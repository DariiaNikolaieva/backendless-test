const colorSwitcherForm = document.querySelector('form');

const themeEls = document.querySelectorAll([
    "body",
    "header",
    "footer",
    "a"
]);

const changeTheme = function(evt) {
    evt.preventDefault();
    if (evt.target.value === "dark-theme") {
        themeEls.forEach(el => {
            el.removeAttribute('class');
            el.classList.add(`${evt.target.value}`);
        })
    } else if (evt.target.value === "custom-theme") {
        themeEls.forEach(el => {
            el.removeAttribute('class');
            el.classList.add(`${evt.target.value}`);
        })
    } else {
        themeEls.forEach(el => {
            el.removeAttribute('class');
        })
    }   
}

colorSwitcherForm.addEventListener('click', changeTheme);