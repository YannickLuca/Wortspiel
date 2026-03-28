const STORAGE_KEY = "odettes-wortspiel-progress-v2";
const LEGACY_STORAGE_KEYS = ["wortstern-progress-v1"];
const STARTING_STARS = 2;
const FALLBACK_STATE = {
  currentLevel: 1,
  unlockedLevel: 1,
  stars: STARTING_STARS,
  solved: {},
  hintProgress: {}
};

const refs = {
  levelBadge: document.getElementById("levelBadge"),
  starBadge: document.getElementById("starBadge"),
  earnedBadge: document.getElementById("earnedBadge"),
  spentBadge: document.getElementById("spentBadge"),
  levelTitle: document.getElementById("levelTitle"),
  levelIntro: document.getElementById("levelIntro"),
  levelStrip: document.getElementById("levelStrip"),
  wordList: document.getElementById("wordList"),
  letterWheel: document.getElementById("letterWheel"),
  entryBox: document.getElementById("entryBox"),
  statusText: document.getElementById("statusText"),
  clearButton: document.getElementById("clearButton"),
  submitButton: document.getElementById("submitButton"),
  nextLevelButton: document.getElementById("nextLevelButton"),
  wordCardTemplate: document.getElementById("wordCardTemplate")
};

let state = loadState();
let selectedAnswer = null;
let currentEntry = "";
let letterOrder = [];

initialize();

function initialize() {
  bindEvents();
  syncLetterOrder();
  render();
  registerServiceWorker();
}

function bindEvents() {
  refs.clearButton.addEventListener("click", clearEntry);
  refs.submitButton.addEventListener("click", submitEntry);
  refs.nextLevelButton.addEventListener("click", moveToNextLevel);

  document.addEventListener("keydown", (event) => {
    const tagName = event.target && event.target.tagName;
    if (tagName === "INPUT" || tagName === "TEXTAREA") {
      return;
    }

    const level = getCurrentLevel();
    const key = event.key.toUpperCase();

    if (event.key === "Backspace") {
      event.preventDefault();
      deleteLastLetter();
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      submitEntry();
      return;
    }

    if (event.key === "Escape") {
      clearEntry();
      return;
    }

    if (key.length === 1 && level.letters.includes(key)) {
      addLetter(key);
    }
  });
}

function getCurrentLevel() {
  return LEVELS.find((level) => level.id === state.currentLevel) || LEVELS[0];
}

function syncLetterOrder() {
  letterOrder = [...getCurrentLevel().letters];
}

function cloneFallbackState() {
  return JSON.parse(JSON.stringify(FALLBACK_STATE));
}

function loadState() {
  const keys = [STORAGE_KEY, ...LEGACY_STORAGE_KEYS];

  for (const key of keys) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) {
        continue;
      }

      return sanitizeState(JSON.parse(raw));
    } catch (error) {
      continue;
    }
  }

  return cloneFallbackState();
}

function sanitizeState(input) {
  const next = cloneFallbackState();

  if (Number.isInteger(input?.currentLevel) && input.currentLevel >= 1 && input.currentLevel <= LEVELS.length) {
    next.currentLevel = input.currentLevel;
  }

  if (Number.isInteger(input?.unlockedLevel) && input.unlockedLevel >= 1) {
    next.unlockedLevel = Math.min(input.unlockedLevel, LEVELS.length);
  }

  next.solved = sanitizeSolvedBuckets(input?.solved);
  next.hintProgress = sanitizeHintProgress(input?.hintProgress, input?.extraHints);
  syncStars(next);

  next.unlockedLevel = Math.max(next.unlockedLevel, getDerivedUnlockedLevel(next.solved));
  if (next.currentLevel > next.unlockedLevel) {
    next.currentLevel = next.unlockedLevel;
  }

  return next;
}

function sanitizeSolvedBuckets(source) {
  const clean = {};

  if (!source || typeof source !== "object") {
    return clean;
  }

  LEVELS.forEach((level) => {
    const validAnswers = new Set(level.words.map((word) => word.answer));
    const rawAnswers = Array.isArray(source[level.id]) ? source[level.id] : [];
    const safeAnswers = [...new Set(
      rawAnswers
        .map((answer) => normalizeWord(answer))
        .filter((answer) => validAnswers.has(answer))
    )];

    if (safeAnswers.length > 0) {
      clean[level.id] = safeAnswers;
    }
  });

  return clean;
}

function sanitizeHintProgress(source, legacyExtraHints) {
  const clean = {};

  LEVELS.forEach((level) => {
    const validAnswers = new Set(level.words.map((word) => word.answer));
    const levelProgress = {};
    const rawLevelProgress = source && typeof source === "object" ? source[level.id] : null;
    const rawLegacyHints = legacyExtraHints && typeof legacyExtraHints === "object" ? legacyExtraHints[level.id] : null;

    if (rawLevelProgress && typeof rawLevelProgress === "object" && !Array.isArray(rawLevelProgress)) {
      Object.entries(rawLevelProgress).forEach(([answer, stage]) => {
        const normalized = normalizeWord(answer);
        if (validAnswers.has(normalized) && Number.isInteger(stage) && stage >= 1) {
          levelProgress[normalized] = Math.min(stage, 3);
        }
      });
    }

    if (Array.isArray(rawLegacyHints)) {
      rawLegacyHints.forEach((answer) => {
        const normalized = normalizeWord(answer);
        if (validAnswers.has(normalized)) {
          levelProgress[normalized] = Math.max(levelProgress[normalized] || 0, 1);
        }
      });
    }

    if (Object.keys(levelProgress).length > 0) {
      clean[level.id] = levelProgress;
    }
  });

  return clean;
}

function getDerivedUnlockedLevel(solvedBuckets) {
  let highestUnlocked = 1;

  LEVELS.forEach((level) => {
    const solvedCount = Array.isArray(solvedBuckets[level.id]) ? solvedBuckets[level.id].length : 0;
    if (solvedCount === level.words.length) {
      highestUnlocked = Math.min(LEVELS.length, level.id + 1);
    }
  });

  return highestUnlocked;
}

function getCollectedStars(solvedSource = state.solved, hintSource = state.hintProgress) {
  return LEVELS.reduce((total, level) => {
    const solvedAnswers = Array.isArray(solvedSource[level.id]) ? solvedSource[level.id] : [];
    const collectedForLevel = solvedAnswers.filter((answer) => getHintStageFromSource(hintSource, level.id, answer) < 3).length;
    return total + collectedForLevel;
  }, 0);
}

function getSpentStars(source = state.hintProgress) {
  return LEVELS.reduce((total, level) => {
    const levelHints = source[level.id];
    if (!levelHints || typeof levelHints !== "object") {
      return total;
    }

    const spentForLevel = Object.values(levelHints).reduce((sum, stage) => {
      if (!Number.isInteger(stage) || stage < 1) {
        return sum;
      }

      return sum + getSpentStarsForStage(stage);
    }, 0);

    return total + spentForLevel;
  }, 0);
}

function syncStars(targetState = state) {
  const collectedStars = getCollectedStars(targetState.solved, targetState.hintProgress);
  const spentStars = getSpentStars(targetState.hintProgress);
  targetState.stars = Math.max(0, STARTING_STARS + collectedStars - spentStars);
}

function saveState() {
  try {
    syncStars();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    setStatus("Der Browser konnte gerade nicht speichern. Dein Fortschritt bleibt bis zum Neuladen offen.");
  }
}

function getSolvedAnswers(levelId) {
  return new Set(state.solved[levelId] || []);
}

function setSolvedAnswers(levelId, answers) {
  state.solved[levelId] = [...answers];
}

function getHintStageFromSource(source, levelId, answer) {
  const levelHints = source[levelId];
  if (!levelHints) {
    return 0;
  }

  return Math.min(levelHints[answer] || 0, 3);
}

function getHintStage(levelId, answer) {
  return getHintStageFromSource(state.hintProgress, levelId, answer);
}

function setHintStage(levelId, answer, stage) {
  if (!state.hintProgress[levelId]) {
    state.hintProgress[levelId] = {};
  }

  state.hintProgress[levelId][answer] = Math.min(Math.max(stage, 0), 3);
}

function getSpentStarsForStage(stage) {
  if (stage >= 3) {
    return 13;
  }

  if (stage === 2) {
    return 3;
  }

  if (stage === 1) {
    return 1;
  }

  return 0;
}

function getHintUnlockCost(stage) {
  if (stage === 1) {
    return 1;
  }

  if (stage === 2) {
    return 2;
  }

  return 0;
}

function render() {
  const level = getCurrentLevel();
  const solvedAnswers = getSolvedAnswers(level.id);
  const collectedStars = getCollectedStars();
  const spentStars = getSpentStars();

  syncStars();
  refs.levelBadge.textContent = `${level.id} / ${LEVELS.length}`;
  refs.starBadge.textContent = String(state.stars);
  refs.earnedBadge.textContent = String(collectedStars);
  refs.spentBadge.textContent = String(spentStars);
  refs.levelTitle.textContent = `Level ${level.id}: ${level.title}`;
  refs.levelIntro.textContent = level.intro;

  renderLevelStrip();
  renderEntry();
  renderWheel();
  renderWords();

  const complete = solvedAnswers.size === level.words.length;
  refs.nextLevelButton.hidden = !(complete && level.id < LEVELS.length);
}

function renderLevelStrip() {
  refs.levelStrip.innerHTML = "";

  LEVELS.forEach((level) => {
    const button = document.createElement("button");
    const solved = getSolvedAnswers(level.id).size === level.words.length;
    button.type = "button";
    button.className = "level-button";
    button.textContent = String(level.id);

    if (level.id === state.currentLevel) {
      button.classList.add("is-active");
    }

    if (solved) {
      button.classList.add("is-complete");
    }

    if (level.id > state.unlockedLevel) {
      button.classList.add("is-locked");
      button.disabled = true;
    } else {
      button.addEventListener("click", () => {
        state.currentLevel = level.id;
        selectedAnswer = null;
        currentEntry = "";
        syncLetterOrder();
        saveState();
        render();
        setStatus(`Level ${level.id} geladen.`);
      });
    }

    refs.levelStrip.appendChild(button);
  });
}

function renderEntry() {
  refs.entryBox.textContent = currentEntry || "Wähle Buchstaben";
}

function renderWheel() {
  refs.letterWheel.innerHTML = "";
  const radius = 118;

  letterOrder.forEach((letter, index) => {
    const angle = (-Math.PI / 2) + ((Math.PI * 2 * index) / letterOrder.length);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "letter-button";
    button.textContent = letter;
    button.style.transform = `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`;
    button.addEventListener("click", () => addLetter(letter));
    refs.letterWheel.appendChild(button);
  });
}

function renderWords() {
  const level = getCurrentLevel();
  const solvedAnswers = getSolvedAnswers(level.id);

  refs.wordList.innerHTML = "";

  level.words.forEach((word, index) => {
    const node = refs.wordCardTemplate.content.firstElementChild.cloneNode(true);
    const selectButton = node.querySelector(".word-select");
    const clue = node.querySelector(".word-clue");
    const extraOne = node.querySelector(".word-extra-one");
    const extraTwo = node.querySelector(".word-extra-two");
    const solution = node.querySelector(".word-solution");
    const number = node.querySelector(".word-number");
    const hintButton = node.querySelector(".hint-button");

    const isSolved = solvedAnswers.has(word.answer);
    const isSelected = selectedAnswer === word.answer;
    const hintStage = getHintStage(level.id, word.answer);

    if (isSolved) {
      node.classList.add("is-solved");
    }

    if (isSelected) {
      node.classList.add("is-selected");
    }

    number.textContent = String(index + 1);
    clue.textContent = `${word.clue} (${word.answer.length})`;
    extraOne.textContent = hintStage >= 1 || isSolved ? `Hinweis 2: ${word.hint1}` : "Hinweis 2 gesperrt";
    extraTwo.textContent = hintStage >= 2 || isSolved ? `Hinweis 3: ${word.hint2}` : "Hinweis 3 gesperrt";
    solution.textContent = isSolved ? word.answer : "_ ".repeat(word.answer.length).trim();

    selectButton.addEventListener("click", () => {
      selectedAnswer = word.answer;
      renderWords();
      setStatus(`Aktive Aufgabe: ${word.clue}`);
    });

    if (isSolved) {
      hintButton.classList.add("is-solved");
      hintButton.textContent = "Gelöst";
      hintButton.disabled = true;
    } else if (hintStage === 0) {
      hintButton.textContent = "Hinweis 2 für 1 Stern";
      hintButton.disabled = false;
      hintButton.addEventListener("click", () => unlockHint(word.answer));
    } else if (hintStage === 1) {
      hintButton.textContent = "Hinweis 3 für 2 Sterne";
      hintButton.disabled = false;
      hintButton.addEventListener("click", () => unlockHint(word.answer));
    } else if (hintStage === 2) {
      hintButton.textContent = "Lösung für 10 Sterne";
      hintButton.disabled = false;
      hintButton.addEventListener("click", () => buySolution(word.answer));
    } else {
      hintButton.textContent = "Lösung gekauft";
      hintButton.disabled = true;
    }

    refs.wordList.appendChild(node);
  });
}

function addLetter(letter) {
  currentEntry += letter;
  renderEntry();
}

function clearEntry() {
  currentEntry = "";
  renderEntry();
}

function deleteLastLetter() {
  currentEntry = currentEntry.slice(0, -1);
  renderEntry();
}

function submitEntry() {
  const answer = normalizeWord(currentEntry);
  const level = getCurrentLevel();
  const solvedAnswers = getSolvedAnswers(level.id);

  if (!answer) {
    setStatus("Noch kein Wort gebaut.");
    return;
  }

  const selectedWord = level.words.find((word) => word.answer === selectedAnswer);
  if (selectedWord && selectedWord.answer === answer && !solvedAnswers.has(answer)) {
    solveWord(level.id, answer, selectedWord.clue);
    return;
  }

  const matchedWord = level.words.find((word) => word.answer === answer && !solvedAnswers.has(word.answer));
  if (!matchedWord) {
    setStatus(`„${answer}“ ist in diesem Level kein offenes Zielwort.`);
    return;
  }

  solveWord(level.id, matchedWord.answer, matchedWord.clue);
}

function solveWord(levelId, answer, clue, options = {}) {
  const purchasedSolution = options.purchasedSolution === true;
  const solvedAnswers = getSolvedAnswers(levelId);
  solvedAnswers.add(answer);
  setSolvedAnswers(levelId, solvedAnswers);
  syncStars();
  currentEntry = "";
  selectedAnswer = null;

  const level = LEVELS.find((entry) => entry.id === levelId);
  const allSolved = solvedAnswers.size === level.words.length;

  if (allSolved && levelId < LEVELS.length) {
    state.unlockedLevel = Math.max(state.unlockedLevel, levelId + 1);
  }

  saveState();
  render();

  if (purchasedSolution && allSolved && levelId < LEVELS.length) {
    setStatus(`„${answer}“ als Lösung freigeschaltet. Level abgeschlossen. Nächstes Level ist frei.`);
  } else if (purchasedSolution && allSolved) {
    setStatus(`„${answer}“ als Lösung freigeschaltet. Alle ${LEVELS.length} Level sind geschafft.`);
  } else if (purchasedSolution) {
    setStatus(`„${answer}“ als Lösung freigeschaltet. 10 Sterne ausgegeben.`);
  } else if (allSolved && levelId < LEVELS.length) {
    setStatus(`„${answer}“ gelöst. Level abgeschlossen. Nächstes Level ist frei.`);
  } else if (allSolved) {
    setStatus(`„${answer}“ gelöst. Alle ${LEVELS.length} Level sind geschafft.`);
  } else {
    setStatus(`„${answer}“ gelöst. Stern erhalten. Hinweis war: ${clue}.`);
  }
}

function unlockHint(answer) {
  syncStars();

  const level = getCurrentLevel();
  const nextStage = getHintStage(level.id, answer) + 1;
  const cost = getHintUnlockCost(nextStage);

  if (!cost) {
    return;
  }

  if (state.stars < cost) {
    setStatus(`Dir fehlen ${cost} Sterne für den nächsten Hinweis.`);
    return;
  }

  setHintStage(level.id, answer, nextStage);
  syncStars();
  saveState();
  render();

  if (nextStage === 1) {
    setStatus("Hinweis 2 freigeschaltet.");
  } else {
    setStatus("Hinweis 3 freigeschaltet.");
  }
}

function buySolution(answer) {
  const level = getCurrentLevel();
  const word = level.words.find((entry) => entry.answer === answer);

  if (!word) {
    return;
  }

  if (getHintStage(level.id, answer) < 2) {
    setStatus("Schalte erst beide Hinweise frei.");
    return;
  }

  syncStars();

  if (state.stars < 10) {
    setStatus("Dir fehlen 10 Sterne für die Lösung.");
    return;
  }

  setHintStage(level.id, answer, 3);
  solveWord(level.id, answer, word.clue, { purchasedSolution: true });
}

function moveToNextLevel() {
  if (state.currentLevel >= LEVELS.length) {
    return;
  }

  state.currentLevel += 1;
  currentEntry = "";
  selectedAnswer = null;
  syncLetterOrder();
  saveState();
  render();
  setStatus(`Level ${state.currentLevel} gestartet.`);
}

function normalizeWord(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "");
}

function setStatus(message) {
  refs.statusText.textContent = message;
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      setStatus("Offline-Modus konnte nicht aktiviert werden.");
    });
  });
}
