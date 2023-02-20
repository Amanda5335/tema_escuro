const changeThemeBtn = document.querySelector("#change-theme")

// mudar o toggle dark mode 
function toggleDarkMode() {
    document.body.classList.toggle("dark")
};

function loadTheme() {
    const darkMode = localStorage.getItem("dark")

    if(darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

// function que carrega o modo claro e escuro 
changeThemeBtn.addEventListener("change", function() {
   toggleDarkMode();

   // deixar ou remover o dark mode
    localStorage.removeItem("dark")

   if(document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1)
   }
});