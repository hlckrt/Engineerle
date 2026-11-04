const themeStorageKey = "engineerle-theme";
const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
const themeButtons = document.querySelectorAll(".theme-toggle");

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#171c19" : "#f5f4ef";
  themeButtons.forEach((button) => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    button.textContent = theme === "dark" ? "☀" : "☾";
    button.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
    button.title = `Switch to ${nextTheme} mode`;
  });
}

const savedTheme = localStorage.getItem(themeStorageKey);
applyTheme(savedTheme || (themeMedia.matches ? "dark" : "light"));

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(themeStorageKey, nextTheme);
    applyTheme(nextTheme);
  });
});

themeMedia.addEventListener("change", (event) => {
  if (!localStorage.getItem(themeStorageKey)) {
    applyTheme(event.matches ? "dark" : "light");
  }
});
