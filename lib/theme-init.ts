export const THEME_KEY = "theme";

export const themeInitScript = `
(function() {
  var key = "theme";
  try {
    var saved = localStorage.getItem(key);
    if (saved === "dark" || saved === "light") {
      document.documentElement.setAttribute("data-theme", saved);
    }
  } catch (e) {}
})();
`;
