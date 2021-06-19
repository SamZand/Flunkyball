var toggleThemeSwitch = document.getElementById("ChangeTheme"); 
var toggleFontSwitch = document.getElementById("ChangeFont"); 

const currentTheme = localStorage.getItem("theme");
const currentFont = localStorage.getItem("font");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        toggleThemeSwitch.checked = true;
    }
}

if (currentFont) {
    document.documentElement.setAttribute("data-font", currentFont);

    if (currentFont === "dyslexic") {
        toggleFontSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}

function switchFont(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-font", "dyslexic");
        localStorage.setItem("font", "dyslexic");
    } else {
        document.documentElement.setAttribute("data-font", "Roboto");
        localStorage.setItem("font", "Roboto");
    }
}

toggleThemeSwitch.addEventListener("change", switchTheme, false);
toggleFontSwitch.addEventListener("change", switchFont, false);