const LEVELS = [
  {
    id: 1,
    title: "Leicht und vertraut",
    intro: "Vier sehr bekannte Wörter mit einem klaren Buchstabenpool. Perfekt zum Start.",
    letters: ["H", "A", "U", "S", "M"],
    words: [
      { answer: "HAUS", clue: "Zuhause", hint1: "Gebäude zum Wohnen", hint2: "Hat Zimmer, Fenster und eine Tür" },
      { answer: "MAUS", clue: "Kleines Nagetier", hint1: "Mag Käse in vielen Geschichten", hint2: "Hat einen langen Schwanz" },
      { answer: "SAUM", clue: "Rand an Stoff", hint1: "Kante oder Abschluss", hint2: "Findet man oft unten an Hosen oder Röcken" },
      { answer: "MAMA", clue: "Mutter", hint1: "Familienwort", hint2: "Viele kleine Kinder sagen es zuerst" }
    ]
  },
  {
    id: 2,
    title: "Rund um Bauch und Buch",
    intro: "Jetzt wird das Denken etwas breiter. Ein paar Begriffe sind kürzer, einer ist luftiger.",
    letters: ["B", "A", "U", "C", "H"],
    words: [
      { answer: "BAUCH", clue: "Vorderseite des Körpers", hint1: "Hier knurrt der Hunger", hint2: "Dort sitzt bei vielen der Nabel" },
      { answer: "BUCH", clue: "Gebundene Seiten", hint1: "Lesestoff", hint2: "Steht oft im Regal" },
      { answer: "AUCH", clue: "Ebenfalls", hint1: "Noch dazu", hint2: "Ein Wort für Zustimmung oder Ergänzung" },
      { answer: "HAUCH", clue: "Sehr leichter Luftzug", hint1: "Fast nur ein Atemzug", hint2: "Kaum spürbarer Wind" }
    ]
  },
  {
    id: 3,
    title: "Zahlen und Dinge",
    intro: "Mehr Wörter, mehr Längen. Das Level bringt dir schon erste Mehrdeutigkeiten.",
    letters: ["S", "T", "E", "I", "N"],
    words: [
      { answer: "SEIN", clue: "Existieren", hint1: "Unregelmäßiges Verb", hint2: "Grundwort in Sätzen wie „ich will ...“" },
      { answer: "NEST", clue: "Vogelwohnung", hint1: "Platz für Eier", hint2: "Wird aus Zweigen gebaut" },
      { answer: "EINS", clue: "Zahl vor zwei", hint1: "Beste Schulnote", hint2: "Beginnt das Zählen" },
      { answer: "STEIN", clue: "Harter Brocken", hint1: "Stück Fels", hint2: "Liegt auf Wegen oder am Flussufer" },
      { answer: "SEITE", clue: "Teil eines Buchs", hint1: "Nicht vorne, nicht hinten", hint2: "Wird beim Lesen umgeblättert" }
    ]
  },
  {
    id: 4,
    title: "Licht und Verkehr",
    intro: "Hier tauchen mehr gleich lange Wörter auf. Die Hinweise helfen, die richtige Richtung zu halten.",
    letters: ["L", "A", "M", "P", "E"],
    words: [
      { answer: "AMPEL", clue: "Regelt den Verkehr", hint1: "Rot Gelb Grün", hint2: "Steht an Kreuzungen" },
      { answer: "LAMPE", clue: "Spendet Licht", hint1: "Steht oft auf dem Tisch", hint2: "Wird eingeschaltet, wenn es dunkel ist" },
      { answer: "MAPPE", clue: "Sammelt Blätter", hint1: "Ordner aus Pappe oder Stoff", hint2: "Darin transportiert man Unterlagen" },
      { answer: "PALME", clue: "Tropischer Baum", hint1: "Passt an den Strand", hint2: "Hat oft einen langen Stamm und große Blätter" }
    ]
  },
  {
    id: 5,
    title: "Schlaf und Straße",
    intro: "Ab hier kommen abstraktere Begriffe dazu. Die zweite Hilfe kann sich lohnen.",
    letters: ["T", "R", "A", "U", "M"],
    words: [
      { answer: "RAUM", clue: "Zimmer oder Platz", hint1: "Nicht eng", hint2: "Kann in einem Haus sein" },
      { answer: "MAUT", clue: "Gebühr auf manchen Straßen", hint1: "Zahlt man auf bestimmten Autobahnen", hint2: "Eine Art Straßenabgabe" },
      { answer: "TRAUM", clue: "Passiert im Schlaf", hint1: "Kann auch ein Wunschbild sein", hint2: "Man erlebt ihn nachts" },
      { answer: "ARMUT", clue: "Mangel an Geld", hint1: "Gegenteil von Reichtum", hint2: "Beschreibt große finanzielle Not" }
    ]
  },
  {
    id: 6,
    title: "Küche und Klang",
    intro: "Dieses Set spielt mit Verbformen und körperlichen Begriffen. Genau lesen lohnt sich.",
    letters: ["K", "O", "C", "H", "E"],
    words: [
      { answer: "KOCH", clue: "Macht Essen", hint1: "Beruf in der Küche", hint2: "Steht oft am Herd" },
      { answer: "ECHO", clue: "Zurückgeworfener Schall", hint1: "Antwortet aus dem Berg", hint2: "Wiederholt deinen Ruf" },
      { answer: "HOCKE", clue: "Tiefe Sitzposition", hint1: "Fast wie eine Kniebeuge", hint2: "Man ist unten auf den Beinen" },
      { answer: "KOCHE", clue: "Bereite Essen zu", hint1: "Verbform von kochen", hint2: "Ich ... gerade Suppe" },
      { answer: "ECKE", clue: "Treffpunkt zweier Kanten", hint1: "Gibt es in jedem Zimmer", hint2: "Nicht in der Mitte, sondern am Rand" }
    ]
  },
  {
    id: 7,
    title: "Natur und Weinberg",
    intro: "Mehr Mehrdeutigkeit, mehr Wiederholungen. Die Wörter bleiben fair, sind aber nicht mehr ganz so direkt.",
    letters: ["B", "E", "R", "G", "N"],
    words: [
      { answer: "BERG", clue: "Hoher Naturhügel", hint1: "Größer als ein Hügel", hint2: "Die Alpen bestehen daraus" },
      { answer: "BERGE", clue: "Mehrzahl von Berg", hint1: "Die Alpen sind welche", hint2: "Viele hohe Gipfel zusammen" },
      { answer: "EBER", clue: "Männliches Wildschwein", hint1: "Boar auf Englisch", hint2: "Ein borstiges Waldtier" },
      { answer: "REBE", clue: "Traubenpflanze", hint1: "Wird im Weinberg gezogen", hint2: "Daran wachsen Weintrauben" },
      { answer: "BEERE", clue: "Kleine Frucht", hint1: "Blaubeere ist eine", hint2: "Wächst oft an Sträuchern" }
    ]
  },
  {
    id: 8,
    title: "Tempo und Trinken",
    intro: "Jetzt kommen Alltagsbegriffe mit mehr Streuung. Ein falscher erster Impuls ist hier normal.",
    letters: ["W", "A", "S", "E", "R"],
    words: [
      { answer: "WARE", clue: "Zum Verkauf bestimmte Sache", hint1: "Liegt im Laden", hint2: "Produkt im Handel" },
      { answer: "RASER", clue: "Fährt viel zu schnell", hint1: "Gefährlich im Straßenverkehr", hint2: "Hält sich nicht an Tempolimits" },
      { answer: "SAAR", clue: "Fluss im Westen", hint1: "Gab auch einem Bundesland den Namen", hint2: "Liegt in Deutschland und Frankreich" },
      { answer: "WASSER", clue: "Flüssigkeit zum Trinken", hint1: "Kommt aus dem Hahn", hint2: "Farblos und lebenswichtig" }
    ]
  },
  {
    id: 9,
    title: "Runen und Reue",
    intro: "Ab hier wird der Wortschatz deutlich spezieller. Sterne clever einsetzen hilft.",
    letters: ["F", "E", "U", "R", "N"],
    words: [
      { answer: "FEUER", clue: "Brennt mit Hitze", hint1: "Braucht Sauerstoff", hint2: "Kann knistern und leuchten" },
      { answer: "REUE", clue: "Spätes Bedauern", hint1: "Man wünscht, es nicht getan zu haben", hint2: "Ein starkes Gefühl nach einem Fehler" },
      { answer: "UFER", clue: "Rand am Wasser", hint1: "Dort endet der See", hint2: "Zwischen Land und Wasser" },
      { answer: "RUNE", clue: "Altes Schriftzeichen", hint1: "Historische nordische Zeichenform", hint2: "Findet man in alten Inschriften" },
      { answer: "EUER", clue: "Besitzwort für mehrere", hint1: "Zum Beispiel: euer Haus", hint2: "Form von „ihr habt“ als Pronomen" }
    ]
  },
  {
    id: 10,
    title: "Finale mit Wind",
    intro: "Zum Schluss mischt das Level konkrete Dinge mit abstrakteren Begriffen. Ein guter Abschluss für die erste Staffel.",
    letters: ["G", "L", "A", "S", "E"],
    words: [
      { answer: "GLAS", clue: "Durchsichtiger Behälter", hint1: "Fenster bestehen oft daraus", hint2: "Daraus kann man trinken" },
      { answer: "LAGE", clue: "Position oder Zustand", hint1: "Wie etwas gelegen ist", hint2: "Zum Beispiel gute Wohn..." },
      { answer: "SAGE", clue: "Alte Erzählung", hint1: "Mythennaher Text", hint2: "Eine Geschichte aus früheren Zeiten" },
      { answer: "SEGEL", clue: "Fängt Wind für ein Boot", hint1: "Ohne Motor auf dem Wasser", hint2: "Wird vom Wind aufgebläht" },
      { answer: "GASSE", clue: "Schmale Straße", hint1: "Zwischen Häusern", hint2: "Kleiner als eine breite Straße" }
    ]
  }
];
