const concepts = [
  {
    answer: "Truss",
    aliases: ["pin-jointed truss", "truss structure"],
    module: "CIVIL STRUCTURES",
    clues: [
      "My usefulness comes from turning a large shape into many small decisions.",
      "My members meet at joints, and the course analyses me using loads and reactions.",
      "In the syllabus, I’m analysed as a pin-jointed structure.",
      "You can solve the forces in my members using the method of joints or sections.",
      "I’m a triangulated framework that carries loads through tension and compression."
    ]
  },
  {
    answer: "Neutral axis",
    aliases: ["neutral plane"],
    module: "CIVIL STRUCTURES",
    clues: [
      "What happens at one particular place can be simpler than what happens around it.",
      "I separate regions experiencing different types of longitudinal strain.",
      "At my position, the bending strain is zero.",
      "The bending stress changes sign as it passes through me.",
      "I’m the line in a bent beam where longitudinal stress and strain are zero."
    ]
  },
  {
    answer: "Factor of safety",
    aliases: ["safety factor", "factor of safety (fos)", "fos"],
    module: "CIVIL STRUCTURES",
    clues: [
      "Good design leaves room for what a calculation cannot know.",
      "I account for uncertainty in loads, materials, and real-world conditions.",
      "A larger value generally means a greater margin between capacity and demand.",
      "I’m commonly calculated by comparing a failure strength with a working stress.",
      "I’m the ratio of a material’s failure strength to its allowable working stress."
    ]
  },
  {
    answer: "Galvanic corrosion",
    aliases: ["bimetallic corrosion", "galvanic action"],
    module: "CIVIL STRUCTURES",
    clues: [
      "Two individually stable choices can become a problem when brought together.",
      "I need two dissimilar metals and an electrical connection between them.",
      "An electrolyte, such as moisture, helps the reaction take place.",
      "The less noble metal corrodes preferentially.",
      "I’m corrosion caused when dissimilar connected metals form an electrochemical cell."
    ]
  },
  {
    answer: "Prestressed concrete",
    aliases: ["pre-stressed concrete", "pre stressed concrete"],
    module: "CIVIL STRUCTURES",
    clues: [
      "A material can be asked to carry a condition before a load ever arrives.",
      "I combine concrete with steel reinforcement to improve structural performance.",
      "The reinforcement is tensioned to place the concrete into compression.",
      "The syllabus compares my pre-tensioned and post-tensioned forms.",
      "I’m concrete given an intentional compressive stress by tensioned steel tendons."
    ]
  },
  {
    answer: "Second moment of area",
    aliases: ["area moment of inertia", "second moment of area (i)", "second moment of inertia"],
    module: "CIVIL STRUCTURES",
    clues: [
      "Geometry can matter as much as the substance itself.",
      "My value depends on how the area is distributed around an axis.",
      "I help describe how strongly a beam resists bending.",
      "In the syllabus, my value is given for bending-stress calculations.",
      "I’m the cross-sectional property, often written I, used in the bending-stress equation."
    ]
  },
  {
    answer: "Static friction",
    aliases: [],
    module: "PERSONAL & PUBLIC TRANSPORT",
    clues: [
      "A force can be present even when nothing appears to move.",
      "I act before two contacting surfaces begin sliding.",
      "My limiting value depends on the coefficient of friction and the normal force.",
      "The syllabus applies me to transport problems and the angle of repose.",
      "I’m the friction force that prevents surfaces at rest from starting to slide."
    ]
  },
  {
    answer: "Mechanical advantage",
    aliases: ["ma"],
    module: "PERSONAL & PUBLIC TRANSPORT",
    clues: [
      "A machine changes the relationship between what goes in and what comes out.",
      "I’m a ratio, not a unit of energy.",
      "A value above one means the output force is greater than the input effort.",
      "For a simple machine, compare the load with the effort.",
      "I’m the ratio of a machine’s output force (load) to its input force (effort)."
    ]
  },
  {
    answer: "Annealing",
    aliases: ["anneal"],
    module: "PERSONAL & PUBLIC TRANSPORT",
    clues: [
      "A material's past can be changed without changing what it is made of.",
      "I involve heating and then controlled cooling.",
      "I can reduce hardness and relieve internal stresses.",
      "Compared with hardening, my cooling stage is usually slower.",
      "I’m the heat treatment that softens metal through heating followed by slow cooling."
    ]
  },
  {
    answer: "Forging",
    aliases: ["forge"],
    module: "PERSONAL & PUBLIC TRANSPORT",
    clues: [
      "Shape can be changed by adding pressure, not subtraction.",
      "I can be performed hot or cold.",
      "I use compressive force rather than removing material as chips.",
      "A hammer or press can force heated metal into a new shape.",
      "I’m the process of shaping metal by hammering or pressing it under compression."
    ]
  },
  {
    answer: "Bernoulli's principle",
    aliases: ["bernoulli principle", "bernoullis principle", "bernoulli's theorem"],
    module: "AERONAUTICAL ENGINEERING",
    clues: [
      "One kind of energy can trade against another as a fluid travels.",
      "I relate fluid speed and pressure along a streamline.",
      "For ideal flow, an increase in speed is associated with a decrease in static pressure.",
      "The syllabus connects me with the Venturi effect and aircraft lift.",
      "I state that faster-moving fluid has lower static pressure, under the principle’s ideal-flow assumptions."
    ]
  },
  {
    answer: "Angle of attack",
    aliases: [],
    module: "AERONAUTICAL ENGINEERING",
    clues: [
      "A small change in orientation can have a large effect on what a surface experiences.",
      "Changing me affects the aerodynamic forces on a wing.",
      "I’m measured between a wing’s reference line and the oncoming airflow.",
      "Increasing me can increase lift, until the wing approaches a stall.",
      "I’m the angle between an aerofoil’s chord line and the relative airflow."
    ]
  },
  {
    answer: "Pitot tube",
    aliases: ["pitot-static tube", "pitot tube system"],
    module: "AERONAUTICAL ENGINEERING",
    clues: [
      "A measurement can be made by comparing stillness with motion.",
      "I work with air pressure to provide useful flight information.",
      "I compare the pressure of moving air with static air pressure.",
      "A related cockpit instrument uses my measurement to indicate speed through the air.",
      "I’m the probe that measures total air pressure for an aircraft airspeed system."
    ]
  },
  {
    answer: "Carbon fibre composite",
    aliases: ["carbon fiber composite", "carbon fibre reinforced polymer", "cfrp"],
    module: "AERONAUTICAL ENGINEERING",
    clues: [
      "Direction is part of the design, not just the material.",
      "I combine reinforcing fibres with a surrounding matrix.",
      "My reinforcement is made from thin strands of carbon.",
      "I offer a high strength-to-weight ratio and can be laid up in chosen directions.",
      "I’m a polymer-matrix composite reinforced with carbon fibres."
    ]
  },
  {
    answer: "Modulation",
    aliases: ["signal modulation"],
    module: "TELECOMMUNICATIONS ENGINEERING",
    clues: [
      "A message can travel by changing something that carries it.",
      "I prepare information for transmission over a communication channel.",
      "I change a property of a carrier signal to represent the information.",
      "Amplitude, frequency, or phase can be varied.",
      "I’m the process of varying a carrier wave’s amplitude, frequency, or phase to carry a message."
    ]
  },
  {
    answer: "Fibre optics",
    aliases: ["fiber optics", "optical fibre", "optical fiber", "fibre optic"],
    module: "TELECOMMUNICATIONS ENGINEERING",
    clues: [
      "A boundary can keep a signal where it belongs.",
      "I carry information using light rather than electrical current in a metal wire.",
      "My strands guide light through a transparent core.",
      "I can transmit large amounts of data over long distances with low signal loss.",
      "I’m the technology that sends data as light pulses through thin glass or plastic fibres."
    ]
  },
  {
    answer: "Zener diode",
    aliases: ["zener"],
    module: "TELECOMMUNICATIONS ENGINEERING",
    clues: [
      "A one-way component can have a useful exception when conditions change.",
      "I’m a type of diode with a specialised reverse-bias behaviour.",
      "Once a particular reverse voltage is reached, I can conduct in reverse.",
      "I’m often used to provide a stable reference or regulate voltage.",
      "I’m the diode designed to operate in reverse breakdown at a controlled voltage."
    ]
  },
  {
    answer: "Geostationary satellite",
    aliases: ["geostationary orbit satellite", "geo satellite"],
    module: "TELECOMMUNICATIONS ENGINEERING",
    clues: [
      "My usefulness depends as much on my timing as my location.",
      "I orbit Earth above the equator in the same direction as Earth’s rotation.",
      "My orbital period matches one rotation of Earth.",
      "I appear to stay above the same point on the ground.",
      "I’m a satellite in a circular equatorial orbit that appears fixed in the sky."
    ]
  },
  {
    answer: "Logic gate",
    aliases: ["digital logic gate", "logic gates"],
    module: "TELECOMMUNICATIONS ENGINEERING",
    clues: [
      "A simple rule can turn several conditions into one decision.",
      "I process binary inputs and produce a binary output.",
      "The syllabus includes AND, NAND, NOR, and OR as examples of me.",
      "My output follows a Boolean rule based on the input combination.",
      "I’m an electronic circuit that performs a Boolean operation on one or more binary inputs."
    ]
  },
  {
    answer: "X-ray testing",
    aliases: ["radiographic testing", "x ray testing", "x-ray inspection", "radiography"],
    module: "CIVIL STRUCTURES",
    clues: [
      "The inside can be examined without exposing it directly.",
      "I can inspect the inside of a part without cutting it open.",
      "I use penetrating electromagnetic radiation to create an image.",
      "Differences in the image can reveal internal defects such as cracks or voids.",
      "I’m a non-destructive test that uses X-rays to reveal internal flaws."
    ]
  }
];

const form = document.querySelector("#guess-form");
const input = document.querySelector("#guess-input");
const feedback = document.querySelector("#guess-feedback");
const clueList = document.querySelector("#clue-list");
const clueCount = document.querySelector("#clue-count");
const prompt = document.querySelector("#question-prompt");
const hintButton = document.querySelector("#hint-button");
const nextButton = document.querySelector("#next-button");
const roundLabel = document.querySelector("#round-label");
const moduleLabel = document.querySelector("#module-label");
const scoreNumber = document.querySelector("#score-number");
const roundLabelDetail = document.querySelector("#round-label-detail");
const suggestions = document.querySelector("#answer-suggestions");
const modeLabel = document.querySelector("#mode-label");
const completionPanel = document.querySelector("#completion-panel");
const query = new URLSearchParams(window.location.search);
const mode = query.get("mode") === "practice" ? "practice" : "daily";
const hardMode = query.get("hard") === "1";
const today = new Date().toISOString().slice(0, 10);
const DAILY_KEY = `engineerle-daily-${today}`;
const HISTORY_KEY = "engineerle-daily-history";

let deck = [];
let deckPosition = 0;
let currentConcept;
let hintsShown = 1;
let conceptsPlayed = 0;
let roundComplete = false;
let dailyState = { hintsShown: 1, complete: false };

if (hardMode) {
  modeLabel.textContent = "HARD MODE";
  input.placeholder = "Type a concept…";
} else {
  input.setAttribute("list", "answer-suggestions");
  const answers = [...new Set(concepts.flatMap(({ answer, aliases }) => [answer, ...aliases]))];
  suggestions.replaceChildren(...answers.map((answer) => {
    const option = document.createElement("option");
    option.value = answer;
    return option;
  }));
}

roundLabelDetail.textContent = mode === "daily" ? `Daily · ${today}` : "Practice";

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function normalize(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function editDistance(first, second) {
  const previous = Array.from({ length: second.length + 1 }, (_, index) => index);
  for (let row = 1; row <= first.length; row += 1) {
    let diagonal = previous[0];
    previous[0] = row;
    for (let column = 1; column <= second.length; column += 1) {
      const above = previous[column];
      const substitutionCost = first[row - 1] === second[column - 1] ? 0 : 1;
      previous[column] = Math.min(
        previous[column] + 1,
        previous[column - 1] + 1,
        diagonal + substitutionCost
      );
      diagonal = above;
    }
  }
  return previous[second.length];
}

function closeMatch(guess) {
  const acceptedAnswers = [currentConcept.answer, ...currentConcept.aliases];
  let bestMatch = null;
  for (const answer of acceptedAnswers) {
    const normalizedAnswer = normalize(answer);
    const distance = editDistance(guess, normalizedAnswer);
    const threshold = normalizedAnswer.length >= 8 ? 2 : normalizedAnswer.length >= 4 ? 1 : 0;
    if (distance <= threshold && (!bestMatch || distance < bestMatch.distance)) {
      bestMatch = { answer, distance };
    }
  }
  return bestMatch;
}

function loadDailyState() {
  const saved = localStorage.getItem(DAILY_KEY);
  if (saved) {
    dailyState = JSON.parse(saved);
  } else {
    localStorage.setItem(DAILY_KEY, JSON.stringify(dailyState));
  }
  hintsShown = dailyState.hintsShown || 1;
}

function saveDailyState() {
  if (mode === "daily") {
    dailyState.hintsShown = hintsShown;
    localStorage.setItem(DAILY_KEY, JSON.stringify(dailyState));
  }
}

function dailyConcept() {
  const dayNumber = Math.floor(Date.UTC(
    Number(today.slice(0, 4)),
    Number(today.slice(5, 7)) - 1,
    Number(today.slice(8, 10))
  ) / 86400000);
  return concepts[((dayNumber % concepts.length) + concepts.length) % concepts.length];
}

function history() {
  return JSON.parse(localStorage.getItem(HISTORY_KEY) || "{}");
}

function overallScore() {
  const records = Object.values(history());
  const points = records.reduce((sum, record) => sum + record.score, 0);
  return `${points} / ${records.length * 5}`;
}

function renderClues() {
  clueList.replaceChildren();
  currentConcept.clues.slice(0, hintsShown).forEach((clue, index) => {
    const item = document.createElement("li");
    item.className = "clue-item";
    const number = document.createElement("span");
    number.className = "clue-number";
    number.textContent = String(index + 1).padStart(2, "0");
    const text = document.createElement("span");
    text.className = "clue-text";
    text.textContent = clue;
    item.append(number, text);
    clueList.append(item);
  });
  clueCount.textContent = `${hintsShown} / ${currentConcept.clues.length} revealed`;
}

function shareText(solved, score) {
  const tiles = Array.from({ length: 5 }, (_, index) => {
    if (!solved) return index < hintsShown ? "⬛" : "⬜";
    if (index < hintsShown - 1) return "🟨";
    if (index === hintsShown - 1) return "🟩";
    return "⬜";
  }).join("");
  return `Engineerle ${today}\n${solved ? `${score}/5` : "X/5"}\n${tiles}\n${new URL("game.html", window.location.href).href}`;
}

function showCompletion({ solved, message, score }) {
  roundComplete = true;
  form.hidden = true;
  hintButton.hidden = true;
  nextButton.hidden = mode !== "practice";
  nextButton.focus();
  scoreNumber.textContent = solved ? `${score}/5` : "0/5";
  feedback.textContent = message;

  if (mode === "practice") return;

  document.querySelector(".card-topline").hidden = true;
  document.querySelector(".question-area").hidden = true;
  document.querySelector(".clue-panel").hidden = true;
  document.querySelector(".card-actions").hidden = true;
  dailyState.complete = true;
  dailyState.solved = solved;
  dailyState.score = score;
  dailyState.hintsShown = hintsShown;
  const records = history();
  if (!records[today]) {
    records[today] = { score, solved };
    localStorage.setItem(HISTORY_KEY, JSON.stringify(records));
  }
  saveDailyState();
  completionPanel.hidden = false;
  document.querySelector("#completion-title").textContent = solved ? "Daily challenge complete" : "That's today's challenge";
  document.querySelector("#completion-answer").textContent = `The answer was ${currentConcept.answer}.`;
  document.querySelector("#completion-score").textContent = `${solved ? `${score} / 5 points` : "0 / 5 points"} · ${hintsShown} ${hintsShown === 1 ? "clue" : "clues"} revealed`;
  document.querySelector("#overall-score").textContent = overallScore();
  document.querySelector("#community-average").textContent = "Unavailable";
  document.querySelector("#completion-practice").href = `game.html?mode=practice${hardMode ? "&hard=1" : ""}`;
  document.querySelector("#share-button").dataset.shareText = shareText(solved, score);
  document.querySelector("#completion-title").focus();
}

function completeRound({ solved, message }) {
  const score = solved ? Math.max(1, 6 - hintsShown) : 0;
  prompt.innerHTML = solved
    ? `That’s it: <span class="answer-reveal">${currentConcept.answer}</span>`
    : `The answer was <span class="answer-reveal">${currentConcept.answer}</span>`;
  showCompletion({ solved, message, score });
}

function resumeDailyResult() {
  hintsShown = Math.min(dailyState.hintsShown || 1, currentConcept.clues.length);
  renderClues();
  prompt.innerHTML = dailyState.solved
    ? `That’s it: <span class="answer-reveal">${currentConcept.answer}</span>`
    : `The answer was <span class="answer-reveal">${currentConcept.answer}</span>`;
  showCompletion({
    solved: dailyState.solved,
    message: "You've already played today's challenge.",
    score: dailyState.score || 0
  });
}

function revealHint() {
  if (roundComplete || hintsShown >= currentConcept.clues.length) return;
  hintsShown += 1;
  renderClues();
  saveDailyState();
  if (hintsShown === currentConcept.clues.length) {
    hintButton.disabled = true;
    feedback.textContent = "Last clue. Submit your answer when you're ready.";
  } else {
    feedback.textContent = `Clue ${hintsShown} revealed.`;
  }
}

function submitGuess(event) {
  event.preventDefault();
  if (roundComplete) return;
  const guess = normalize(input.value);
  if (!guess) {
    feedback.textContent = "Type a concept first, or reveal a clue.";
    input.focus();
    return;
  }

  const exactAnswer = [currentConcept.answer, ...currentConcept.aliases]
    .some((answer) => normalize(answer) === guess);
  if (exactAnswer) {
    completeRound({ solved: true, message: "Exactly right. Nice work." });
    return;
  }

  const correction = closeMatch(guess);
  if (correction) {
    completeRound({
      solved: true,
      message: `We read that as “${correction.answer}” — spelling doesn’t have to be perfect.`
    });
    return;
  }

  input.value = "";
  if (hintsShown === currentConcept.clues.length) {
    completeRound({ solved: false, message: "No more clues. Come back tomorrow for a new daily challenge." });
  } else {
    revealHint();
    feedback.textContent = `Not quite. Clue ${hintsShown} is unlocked. Try again.`;
    input.focus();
  }
}

function startRound() {
  if (deckPosition >= deck.length) {
    deck = shuffle(concepts);
    deckPosition = 0;
  }
  currentConcept = deck[deckPosition];
  deckPosition += 1;
  conceptsPlayed += 1;
  hintsShown = 1;
  roundComplete = false;
  roundLabel.textContent = `PRACTICE ${String(conceptsPlayed).padStart(2, "0")}`;
  moduleLabel.textContent = currentConcept.module;
  prompt.innerHTML = "I’m a concept from your Year 12 course.<br>What am I?";
  feedback.textContent = "";
  scoreNumber.textContent = "—";
  completionPanel.hidden = true;
  form.hidden = false;
  input.disabled = false;
  input.value = "";
  hintButton.hidden = false;
  hintButton.disabled = false;
  nextButton.hidden = true;
  renderClues();
  input.focus();
}

function copyShareScore() {
  const text = document.querySelector("#share-button").dataset.shareText;
  const shareFeedback = document.querySelector("#share-feedback");
  if (navigator.share) {
    navigator.share({ title: "Engineerle", text }).catch((error) => {
      if (error.name !== "AbortError") {
        console.error("Could not share the result.", error);
        shareFeedback.textContent = "Sharing failed. Please try copying the score.";
      }
    });
    return;
  }
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      shareFeedback.textContent = "Score copied. Share it with your friends!";
    }).catch((error) => {
      console.error("Could not copy the score.", error);
      shareFeedback.textContent = "Could not copy the score. Please select and copy it manually.";
    });
    return;
  }
  shareFeedback.textContent = text;
}

form.addEventListener("submit", submitGuess);
hintButton.addEventListener("click", revealHint);
nextButton.addEventListener("click", startRound);
document.querySelector("#share-button").addEventListener("click", copyShareScore);

if (mode === "practice") {
  deck = shuffle(concepts);
  startRound();
} else {
  currentConcept = dailyConcept();
  moduleLabel.textContent = currentConcept.module;
  loadDailyState();
  if (dailyState.complete) {
    resumeDailyResult();
  } else {
    renderClues();
    saveDailyState();
  }
}