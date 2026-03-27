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
    title: "Etappe mit Wind",
    intro: "Dieses Level mischt konkrete Dinge mit abstrakteren Begriffen. Ein guter Meilenstein, bevor die Reise weitergeht.",
    letters: ["G", "L", "A", "S", "E"],
    words: [
      { answer: "GLAS", clue: "Durchsichtiger Behälter", hint1: "Fenster bestehen oft daraus", hint2: "Daraus kann man trinken" },
      { answer: "LAGE", clue: "Position oder Zustand", hint1: "Wie etwas gelegen ist", hint2: "Zum Beispiel gute Wohn..." },
      { answer: "SAGE", clue: "Alte Erzählung", hint1: "Mythennaher Text", hint2: "Eine Geschichte aus früheren Zeiten" },
      { answer: "SEGEL", clue: "Fängt Wind für ein Boot", hint1: "Ohne Motor auf dem Wasser", hint2: "Wird vom Wind aufgebläht" },
      { answer: "GASSE", clue: "Schmale Straße", hint1: "Zwischen Häusern", hint2: "Kleiner als eine breite Straße" }
    ]
  },
  {
    id: 11,
    title: "Karten und Kater",
    intro: "Ab jetzt wird breiter kombiniert. Die Wörter bleiben alltagsnah, aber die Bedeutungen liegen nicht mehr ganz so offen.",
    letters: ["K", "A", "R", "T", "E"],
    words: [
      { answer: "KARTE", clue: "Papier mit Infos oder Weg", hint1: "Kann Landkarte oder Spielkarte sein", hint2: "Zeigt Wege oder liegt beim Kartenspiel auf dem Tisch" },
      { answer: "KATER", clue: "Männliche Katze", hint1: "Haustier mit Schnurrhaaren", hint2: "Kann auch den Morgen nach zu viel Alkohol meinen" },
      { answer: "RATE", clue: "Vermutung", hint1: "Noch keine sichere Antwort", hint2: "Ein Tipp ins Blaue" },
      { answer: "TEER", clue: "Schwarzer Straßenstoff", hint1: "Wird heiß verarbeitet", hint2: "Liegt als dunkler Belag auf vielen Straßen" }
    ]
  },
  {
    id: 12,
    title: "Tisch und Teich",
    intro: "Dieses Set bleibt fair, verlangt aber mehr Blick für ähnliche Wortformen und doppelte Deutungen.",
    letters: ["G", "A", "B", "E", "L"],
    words: [
      { answer: "GABEL", clue: "Esswerkzeug mit Zinken", hint1: "Liegt neben dem Messer", hint2: "Damit isst man Nudeln oder Salat" },
      { answer: "BELAG", clue: "Schicht auf einer Fläche", hint1: "Kann auf Brot oder Boden liegen", hint2: "Man spricht von Pizza- oder Straßen..." },
      { answer: "ALGE", clue: "Pflanze im Wasser", hint1: "Findet man im Meer oder Teich", hint2: "Kann glitschig an Steinen hängen" },
      { answer: "GABE", clue: "Geschenk oder Fähigkeit", hint1: "Kann man bekommen oder besitzen", hint2: "Eine besondere Begabung heißt auch so" }
    ]
  },
  {
    id: 13,
    title: "Abend am Wasser",
    intro: "Hier kommen mehr Wörter mit ähnlichem Klang. Wer die Hinweise sauber liest, spart Sterne.",
    letters: ["B", "A", "D", "E", "N"],
    words: [
      { answer: "BADEN", clue: "Im Wasser liegen", hint1: "Macht man im See oder in der Wanne", hint2: "Man geht dafür oft ans Wasser" },
      { answer: "ABEND", clue: "Zeit nach dem Tag", hint1: "Zwischen Nachmittag und Nacht", hint2: "Viele essen dann zu ..." },
      { answer: "BANDE", clue: "Gruppe mit Zusammenhalt", hint1: "Kann freundlich oder kriminell gemeint sein", hint2: "Mehrere Leute, die eng zusammenhängen" },
      { answer: "NABE", clue: "Mitte eines Rades", hint1: "Dort laufen Speichen zusammen", hint2: "Sitzt genau im Zentrum vom Fahrrad- oder Autorrad" },
      { answer: "ENDE", clue: "Letzter Abschnitt", hint1: "Kommt nach dem Anfang", hint2: "Wenn etwas vorbei ist, ist es am..." }
    ]
  },
  {
    id: 14,
    title: "Hafen im Wind",
    intro: "Die Wörter in diesem Level sind vertraut, liegen aber enger beieinander. Genauigkeit wird wichtiger.",
    letters: ["H", "A", "F", "E", "N"],
    words: [
      { answer: "HAFEN", clue: "Ort für Schiffe", hint1: "Dort legen Boote an", hint2: "Man findet ihn an Flüssen oder am Meer" },
      { answer: "FAHNE", clue: "Tuch an einem Mast", hint1: "Weht im Wind", hint2: "Zeigt oft ein Land oder einen Verein" },
      { answer: "NAHE", clue: "Nicht weit weg", hint1: "Gegenteil von fern", hint2: "Wenn etwas fast direkt bei dir ist" },
      { answer: "AHNE", clue: "Vorfahre", hint1: "Person aus früherer Generation", hint2: "Urgroßvater wäre ein Beispiel" },
      { answer: "HENNE", clue: "Weibliches Huhn", hint1: "Legt Eier", hint2: "Das männliche Gegenstück ist der Hahn" }
    ]
  },
  {
    id: 15,
    title: "Brot und Tore",
    intro: "Mehr kurze Zielwörter bedeuten mehr mögliche Fehlversuche. Das Level belohnt einen ruhigen Blick aufs Ganze.",
    letters: ["B", "R", "O", "T", "E"],
    words: [
      { answer: "BROT", clue: "Grundnahrungsmittel", hint1: "Wird gebacken", hint2: "Liegt oft in Scheiben auf dem Tisch" },
      { answer: "BOTE", clue: "Bringt Nachricht oder Sendung", hint1: "Überbringer", hint2: "Früher lief so jemand von Ort zu Ort" },
      { answer: "ROBE", clue: "Langes festliches Kleidungsstück", hint1: "Tragen Richter oder Absolventen", hint2: "Ein langes Gewand für besondere Anlässe" },
      { answer: "ORTE", clue: "Mehrzahl von Ort", hint1: "Mehrere Plätze", hint2: "Städte und Dörfer sind solche" },
      { answer: "TORE", clue: "Große Eingänge oder Fußballtreffer", hint1: "Gibt es im Stadion und an Mauern", hint2: "Im Fußball will man möglichst viele davon" }
    ]
  },
  {
    id: 16,
    title: "Sagen und Schnattern",
    intro: "Ein paar Begriffe kennst du sofort, andere täuschen nur Vertrautheit vor. Das macht dieses Level etwas trickreicher.",
    letters: ["S", "A", "G", "E", "N"],
    words: [
      { answer: "SAGEN", clue: "Mit Worten ausdrücken", hint1: "Das Gegenteil von schweigen", hint2: "Etwas laut oder klar mitteilen" },
      { answer: "GANS", clue: "Großer weißer Vogel", hint1: "Watschelt und schnattert", hint2: "Wird oft zu Festtagen erwähnt" },
      { answer: "NASE", clue: "Riechorgan im Gesicht", hint1: "Damit riecht man", hint2: "Sitzt zwischen Augen und Mund" },
      { answer: "SAGE", clue: "Alte überlieferte Geschichte", hint1: "Liegt zwischen Mythos und Erzählung", hint2: "Eine legendäre Geschichte aus früherer Zeit" },
      { answer: "GASE", clue: "Luftartige Stoffe", hint1: "Nicht fest und nicht flüssig", hint2: "Sauerstoff und Helium gehören dazu" }
    ]
  },
  {
    id: 17,
    title: "Faser und Farse",
    intro: "Jetzt wird der Unterschied zwischen naheliegend und richtig schmaler. Wer sorgfältig liest, ist klar im Vorteil.",
    letters: ["F", "A", "S", "E", "R"],
    words: [
      { answer: "FASER", clue: "Feiner Bestandteil von Stoff oder Holz", hint1: "Kleine Struktur im Material", hint2: "Papier besteht aus vielen davon" },
      { answer: "RASER", clue: "Fährt rücksichtslos schnell", hint1: "Hält sich nicht ans Tempolimit", hint2: "Gefährlicher Fahrer" },
      { answer: "FARSE", clue: "Übertrieben albernes Theaterstück", hint1: "Komödie mit viel Klamauk", hint2: "Eine lächerliche Angelegenheit nennt man auch so" },
      { answer: "RASE", clue: "Bewege dich viel zu schnell", hint1: "Verbform von rasen", hint2: "Ich ... über die Autobahn" },
      { answer: "SAFE", clue: "Stahlbox für Wertsachen", hint1: "Darin liegen Geld oder Schmuck", hint2: "Ein Tresor im kleineren Format" }
    ]
  },
  {
    id: 18,
    title: "Rechnen und Reden",
    intro: "Die Buchstaben bieten einige sehr klare Wörter, aber auch ein paar, die man leicht zu spät sieht.",
    letters: ["M", "A", "T", "H", "E"],
    words: [
      { answer: "THEMA", clue: "Inhalt eines Gesprächs", hint1: "Darüber redet man", hint2: "Ein Referat hat meistens eines" },
      { answer: "MATHE", clue: "Schulfach mit Zahlen", hint1: "Darin rechnet man", hint2: "Algebra und Geometrie gehören dazu" },
      { answer: "ATEM", clue: "Luft beim Ein- und Ausatmen", hint1: "Braucht jeder Mensch", hint2: "Kann beim Rennen knapp werden" },
      { answer: "TEAM", clue: "Gruppe mit gemeinsamer Aufgabe", hint1: "Arbeitet oder spielt zusammen", hint2: "Im Sport tritt es gemeinsam an" },
      { answer: "AMT", clue: "Behörde", hint1: "Dort erledigt man offizielle Sachen", hint2: "Bürger-, Finanz- oder Einwohnermelde..." }
    ]
  },
  {
    id: 19,
    title: "Höflich und handlich",
    intro: "Hier tauchen mehr Beugungen und Fachwörter auf. Das Level bleibt lösbar, fordert aber mehr Wortgefühl.",
    letters: ["D", "A", "N", "K", "E"],
    words: [
      { answer: "DANKE", clue: "Wort der Höflichkeit", hint1: "Sagt man nach Hilfe oder einem Geschenk", hint2: "Beginnt oft mit: Vielen ..." },
      { answer: "DEKAN", clue: "Leiter einer Fakultät", hint1: "Position an einer Hochschule", hint2: "Steht einer Uni-Fakultät vor" },
      { answer: "DENK", clue: "Benutze deinen Kopf", hint1: "Imperativ von denken", hint2: "Wird oft als Aufforderung gesagt" },
      { answer: "DANK", clue: "Ausgedrückte Anerkennung", hint1: "Zeigt Wertschätzung", hint2: "Großer ... für deine Hilfe" },
      { answer: "KANNE", clue: "Gefäß mit Griff und Ausguss", hint1: "Darin sind Tee oder Saft", hint2: "Man gießt daraus ein" }
    ]
  },
  {
    id: 20,
    title: "Wort für Wort",
    intro: "Dieses Level spielt offen mit nahen Formen. Es ist weniger schwer als tückisch.",
    letters: ["W", "O", "R", "T", "E"],
    words: [
      { answer: "WORTE", clue: "Mehrzahl von Wort", hint1: "Gesprochene oder geschriebene Einheiten", hint2: "Ein Satz besteht aus mehreren ..." },
      { answer: "WORT", clue: "Einzelne sprachliche Einheit", hint1: "Kleiner als ein Satz", hint2: "Haus ist ein solches" },
      { answer: "TORE", clue: "Mehrzahl von Tor", hint1: "Im Stadion oder in alten Mauern", hint2: "Im Fußball zählt man sie" },
      { answer: "ROT", clue: "Farbe von Feuerwehrautos und Rosen", hint1: "Nicht blau und nicht grün", hint2: "Eine Ampel zeigt sie beim Warten" },
      { answer: "WER", clue: "Frage nach einer Person", hint1: "Beginnt viele Rückfragen", hint2: "... kommt heute mit?" }
    ]
  },
  {
    id: 21,
    title: "Mythen und Feste",
    intro: "Ab hier steigen Dichte und Ablenkung. Die Hinweise sind noch fair, aber man muss sie genauer auswerten.",
    letters: ["G", "R", "E", "I", "F"],
    words: [
      { answer: "GREIF", clue: "Sagenwesen halb Adler halb Löwe", hint1: "Wappentier aus Mythen", hint2: "Mischwesen mit Flügeln und Krallen" },
      { answer: "FEIER", clue: "Festlicher Anlass", hint1: "Man kommt zum Geburtstag zusammen", hint2: "Party auf Deutsch" },
      { answer: "REIF", clue: "Eiskristalle am Morgen", hint1: "Liegt im Winter auf Wiesen", hint2: "Dünner weißer Frostbelag" },
      { answer: "GIER", clue: "Starkes Habenwollen", hint1: "Unersättliche Begierde", hint2: "Zu viel davon gilt als Laster" },
      { answer: "FEIGE", clue: "Süße Frucht", hint1: "Wächst am Feigenbaum", hint2: "Birnenförmig und oft violett oder grün" }
    ]
  },
  {
    id: 22,
    title: "Bahnhof und Eile",
    intro: "Die Kombinationen werden dichter. Einige Wörter springen sofort ins Auge, andere sitzen tiefer im Wortschatz.",
    letters: ["G", "L", "E", "I", "S"],
    words: [
      { answer: "GLEIS", clue: "Bahnstrecke am Bahnhof", hint1: "Dort fährt der Zug ein", hint2: "Auf Nummer 4 kommt dein Zug" },
      { answer: "SIEG", clue: "Gewonnener Erfolg", hint1: "Gegenteil von Niederlage", hint2: "Im Sport freut man sich darüber" },
      { answer: "LEISE", clue: "Kaum hörbar", hint1: "Nicht laut", hint2: "Flüstern ist sehr ..." },
      { answer: "EILIG", clue: "Unter Zeitdruck", hint1: "Man muss sich beeilen", hint2: "Wer spät dran ist, hat es ..." },
      { answer: "IGEL", clue: "Kleines stacheliges Tier", hint1: "Rollt sich bei Gefahr ein", hint2: "Lebt im Garten und trägt Stacheln" }
    ]
  },
  {
    id: 23,
    title: "Falten im Klassenzimmer",
    intro: "Hier hilft ein gutes Auge für Wortbilder. Nichts ist unfair, aber manches ist besser versteckt.",
    letters: ["F", "A", "L", "T", "E"],
    words: [
      { answer: "FALTE", clue: "Knick im Stoff oder in der Haut", hint1: "Entsteht beim Zusammenlegen", hint2: "Findet man im Hemd oder im Gesicht" },
      { answer: "TAFEL", clue: "Große Schreibfläche", hint1: "Hängt oft im Klassenzimmer", hint2: "Darauf schreibt man mit Kreide" },
      { answer: "ALTE", clue: "Ältere Frau oder frühere Person", hint1: "Gegenteil von junge in weiblicher Form", hint2: "In der Redewendung meine ... steckt es auch" },
      { answer: "FETA", clue: "Weißer Käse aus dem Mittelmeerraum", hint1: "Passt in Salat", hint2: "Bröseliger Käse aus Schaf- oder Ziegenmilch" },
      { answer: "TALE", clue: "Mehrzahl von Tal", hint1: "Zwischen Bergen", hint2: "Breite Senken in der Landschaft" }
    ]
  },
  {
    id: 24,
    title: "Suche mit Scheu",
    intro: "Dieses Level ist kürzer gebaut, aber die Lösungen liegen enger zusammen. Hektik hilft hier gar nicht.",
    letters: ["S", "U", "C", "H", "E"],
    words: [
      { answer: "SUCHE", clue: "Gezieltes Findenwollen", hint1: "Man macht sie nach Schlüsseln oder Antworten", hint2: "Wer etwas vermisst, startet eine ..." },
      { answer: "EUCH", clue: "Pronomen für mehrere", hint1: "Richtet sich an eine Gruppe", hint2: "Ich sehe ..." },
      { answer: "SCHEU", clue: "Zurückhaltend und ängstlich", hint1: "Nicht mutig im Kontakt", hint2: "Rehe sind oft so" },
      { answer: "HEU", clue: "Getrocknetes Gras", hint1: "Futter für Tiere", hint2: "Liegt auf dem Bauernhof im Stall" }
    ]
  },
  {
    id: 25,
    title: "Mut und Maße",
    intro: "Spätestens hier lohnt sich taktisches Raten kaum noch. Wer die Bedeutungen trennt, kommt sicherer durch.",
    letters: ["W", "A", "G", "E", "N"],
    words: [
      { answer: "WAGEN", clue: "Auto oder etwas riskieren", hint1: "Kann Fahrzeug oder Verb sein", hint2: "Ein Eisenbahn... fährt auf Schienen" },
      { answer: "WAAGE", clue: "Gerät zum Wiegen", hint1: "Zeigt Kilo an", hint2: "Steht oft in Bad oder Küche" },
      { answer: "NAGE", clue: "Knabbere mit den Zähnen", hint1: "Verbform von nagen", hint2: "Mäuse ... an Kabeln" },
      { answer: "WAGE", clue: "Trau dich", hint1: "Imperativ von wagen", hint2: "Ein einziges Mal: ..." },
      { answer: "GENE", clue: "Träger von Erbinformation", hint1: "Liegt in der DNA", hint2: "Bestimmt mit, welche Merkmale vererbt werden" }
    ]
  },
  {
    id: 26,
    title: "Nagen und Ragen",
    intro: "Die Lösungen hier wirken simpel, aber gerade die kleinen Wörter kosten schnell Konzentration.",
    letters: ["R", "A", "G", "E", "N"],
    words: [
      { answer: "RAGEN", clue: "In die Höhe stehen", hint1: "Deutlich herausstehen", hint2: "Türme ... oft über die Stadt" },
      { answer: "NAGER", clue: "Tier mit starken Schneidezähnen", hint1: "Dazu gehören Maus und Biber", hint2: "Knabbert gern an Samen, Holz oder Kabeln" },
      { answer: "NAGE", clue: "Knabbere mit den Zähnen", hint1: "Verbform von nagen", hint2: "Ich ... am Keksrand" },
      { answer: "GARNE", clue: "Mehrzahl von Garn", hint1: "Wird zum Nähen oder Stricken benutzt", hint2: "Fäden auf Rollen oder Knäueln" },
      { answer: "ANGER", clue: "Grasplatz im Dorf", hint1: "Offene Wiese in alter Ortsmitte", hint2: "Historischer Dorfplatz mit Grünfläche" }
    ]
  },
  {
    id: 27,
    title: "Rund und klug",
    intro: "Die Schwierigkeit zieht weiter an. Nicht alle Lösungen sind gleich lang, und genau das stört das Bauchgefühl.",
    letters: ["K", "U", "G", "E", "L"],
    words: [
      { answer: "KUGEL", clue: "Runder Körper", hint1: "Wie eine kleine Sphäre", hint2: "Eine Billard- oder Christbaum... kann so heißen" },
      { answer: "KLUGE", clue: "Schlaue Person oder passende Form", hint1: "Gegenteil von dumme", hint2: "Eine ... Entscheidung ist gut überlegt" },
      { answer: "KEULE", clue: "Schwere Schlagwaffe oder Fleischstück", hint1: "Passt in Steinzeit und Küche", hint2: "Es gibt auch Hähnchen..." },
      { answer: "LUKE", clue: "Kleine Öffnung am Schiff oder Dach", hint1: "Kann man aufklappen", hint2: "Durch sie kommt Licht oder Luft" },
      { answer: "GEL", clue: "Dickflüssige Masse", hint1: "Haargel ist ein Beispiel", hint2: "Kosmetikprodukt mit glibberiger Konsistenz" }
    ]
  },
  {
    id: 28,
    title: "Kalt und klar",
    intro: "Jetzt wird es ernster. Die Wörter sind bekannt, aber das Set ist voller enger Nachbarn und falscher Starts.",
    letters: ["F", "R", "O", "S", "T"],
    words: [
      { answer: "FROST", clue: "Kälte unter null", hint1: "Lässt Pfützen gefrieren", hint2: "Kommt in klaren Winternächten" },
      { answer: "FORST", clue: "Bewirtschafteter Wald", hint1: "Nicht nur Natur, sondern oft geplant genutzt", hint2: "Förster arbeiten darin" },
      { answer: "TROST", clue: "Hilfe gegen Traurigkeit", hint1: "Spendet man nach schlechten Nachrichten", hint2: "Ein paar freundliche Worte geben ..." },
      { answer: "ROST", clue: "Braune Schicht auf Eisen", hint1: "Entsteht durch Feuchtigkeit", hint2: "Autos bekommen ihn manchmal unten" },
      { answer: "FORT", clue: "Weiter weg oder nicht mehr hier", hint1: "Gegenteil von da", hint2: "Geh ..." }
    ]
  },
  {
    id: 29,
    title: "Paket auf Papier",
    intro: "Dieses Level lebt von unscheinbaren Lösungen. Wer zu schnell baut, landet oft knapp daneben.",
    letters: ["P", "A", "K", "E", "T"],
    words: [
      { answer: "PAKET", clue: "Verschickte Sendung", hint1: "Kommt oft mit der Post", hint2: "Liegt manchmal vor der Haustür" },
      { answer: "AKTE", clue: "Sammelmappe für Unterlagen", hint1: "Liegt im Büro oder Archiv", hint2: "Darin stecken Dokumente zu einem Fall" },
      { answer: "PATE", clue: "Begleiter bei einer Taufe", hint1: "Übernimmt besondere Verantwortung", hint2: "Tauf... steht oft neben dem Kind" },
      { answer: "TAPE", clue: "Klebeband im Sport oder Studio", hint1: "Fixiert oder markiert", hint2: "Wird um Gelenke oder Kabel geklebt" },
      { answer: "PAKTE", clue: "Mehrzahl von Pakt", hint1: "Absprachen oder Bündnisse", hint2: "Staaten schließen manchmal solche" }
    ]
  },
  {
    id: 30,
    title: "Bilder zum Schluss",
    intro: "Das neue Finale verlangt ein sauberes Auge für Sprache und Form. Wer bis hier ist, hat das Spiel wirklich durchdrungen.",
    letters: ["B", "I", "L", "D", "E"],
    words: [
      { answer: "BILDE", clue: "Erschaffe oder forme", hint1: "Verbform von bilden", hint2: "Ich ... aus den Teilen ein Ganzes" },
      { answer: "BILD", clue: "Foto oder Darstellung", hint1: "Hängt an der Wand", hint2: "Kann gemalt, gedruckt oder digital sein" },
      { answer: "LEIB", clue: "Körper", hint1: "Etwas altertümliches Wort", hint2: "Man schützt ihn mit Kleidung" },
      { answer: "BLEI", clue: "Schweres Metall", hint1: "Früher in Wasserrohren problematisch", hint2: "Chemisches Symbol Pb" },
      { answer: "BEIL", clue: "Werkzeug zum Hacken", hint1: "Hat Stiel und Schneide", hint2: "Damit spaltet man Holz" }
    ]
  }
];
