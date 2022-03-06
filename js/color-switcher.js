const colorSwitcherForm = document.querySelector('form');
const input = document.querySelectorAll('input');

const themeEls = document.querySelectorAll([
    "body",
    "header",
    "footer",
    "a"
]);

const changeTheme = function(evt) {
    evt.preventDefault();
    console.log(evt.target);
    if (evt.target.id === "dark-theme" || evt.target.value === "dark-theme") {
        themeEls.forEach(el => {
            el.removeAttribute('class');
            el.classList.add(`${evt.target.value || evt.target.id}`);
        })
        input[1].checked = "checked";
    } else if (evt.target.id === "custom-theme" || evt.target.value === "custom-theme") {
        themeEls.forEach(el => {
            el.removeAttribute('class');
            el.classList.add(`${evt.target.value || evt.target.id}`);
        })
        input[2].checked = "checked";
    } else {
        themeEls.forEach(el => {
            el.removeAttribute('class');
        })
        input[0].checked = "checked";
    }   
}

colorSwitcherForm.addEventListener('click', changeTheme);