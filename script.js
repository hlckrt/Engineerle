const concepts = [
  {
    answer: "Truss",
    aliases: ["pin-jointed truss", "truss structure"],
    module: "CIVIL STRUCTURES",
    clues: [
      "I’m a framework made from straight, connected members.",
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
      "I’m an imaginary line inside a beam under bending.",
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
      "I’m a design measure used when a structure must be reliable.",
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
      "I’m a form of material deterioration involving an electrochemical reaction.",
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
      "I’m a composite material used in structures.",
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
      "I’m a geometric property of a cross-section.",
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
      "I’m a force that resists relative motion between surfaces.",
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
      "I describe how a machine changes an applied effort.",
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
      "I’m a heat-treatment process used on metals.",
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
      "I’m a manufacturing process used to shape metal.",
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
      "I’m a principle used to explain fluid behaviour.",
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
      "I’m an angle that matters in flight mechanics.",
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
      "I’m an instrument used on aircraft.",
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
      "I’m a composite material used in aircraft construction.",
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
      "I’m a process used in telecommunications.",
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
      "I’m a communication medium.",
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
      "I’m a semiconductor component.",
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
      "I’m used in satellite communication systems.",
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
      "I’m a basic building block in digital electronics.",
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
      "I’m a specialised way to test an engineering material or component.",
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
const solvedCount = document.querySelector("#solved-count");
const suggestions = document.querySelector("#answer-suggestions");
const modeLabel = document.querySelector("#mode-label");
const hardMode = new URLSearchParams(window.location.search).get("mode") === "hard";

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

let deck = [];
let deckPosition = 0;
let currentConcept;
let hintsShown = 0;
let conceptsPlayed = 0;
let conceptsSolved = 0;
let roundComplete = false;

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

function renderClues() {
  clueList.replaceChildren();
  if (hintsShown === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.className = "clue-empty";
    emptyMessage.textContent = "Your first clue is waiting. Take a guess or ask for one.";
    clueList.append(emptyMessage);
  } else {
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
  }
  clueCount.textContent = `${hintsShown} / 5 revealed`;
}

function completeRound({ solved, message }) {
  roundComplete = true;
  form.hidden = true;
  hintButton.disabled = true;
  hintButton.hidden = true;
  nextButton.hidden = false;
  nextButton.focus();
  prompt.innerHTML = solved
    ? `That’s it: <span class="answer-reveal">${currentConcept.answer}</span>`
    : `The answer was <span class="answer-reveal">${currentConcept.answer}</span>`;
  feedback.textContent = message;
  scoreNumber.textContent = solved ? `${5 - hintsShown}/5` : "—";
  if (solved) {
    conceptsSolved += 1;
    solvedCount.textContent = String(conceptsSolved);
  }
}

function revealHint() {
  if (roundComplete) return;
  hintsShown += 1;
  renderClues();
  feedback.textContent = `Clue ${hintsShown} revealed.`;
  if (hintsShown === currentConcept.clues.length) {
    completeRound({ solved: false, message: "All five clues are out. Keep the concept in mind for next time." });
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
  if (hintsShown === currentConcept.clues.length - 1) {
    revealHint();
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
  roundLabel.textContent = `CONCEPT ${String(conceptsPlayed).padStart(2, "0")}`;
  moduleLabel.textContent = currentConcept.module;
  prompt.innerHTML = "I’m a concept from your Year 12 course.<br>What am I?";
  feedback.textContent = "";
  scoreNumber.textContent = "—";
  clueList.classList.remove("clues-revealed");
  form.hidden = false;
  input.disabled = false;
  input.value = "";
  hintButton.hidden = false;
  hintButton.disabled = false;
  nextButton.hidden = true;
  renderClues();
  input.focus();
}

form.addEventListener("submit", submitGuess);
hintButton.addEventListener("click", revealHint);
nextButton.addEventListener("click", startRound);

deck = shuffle(concepts);
startRound();