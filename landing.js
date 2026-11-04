const hardModeInput = document.querySelector('input[name="hard"]');
const practiceLink = document.querySelector("#practice-link");

function updatePracticeLink() {
  practiceLink.href = `game.html?mode=practice${hardModeInput.checked ? "&hard=1" : ""}`;
}

hardModeInput.addEventListener("change", updatePracticeLink);
updatePracticeLink();
