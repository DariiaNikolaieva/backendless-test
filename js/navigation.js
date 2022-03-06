const navForm = document.querySelector("header form");

const changeNavType = function () {
  if (window.matchMedia("(min-width: 1080px)").matches) {
    navForm.innerHTML = `<label><input type="radio" name="theme" value="light-theme" checked/>Light Theme</label>
    <label><input type="radio" name="theme" value="dark-theme" />Dark Theme</label>
    <label><input type="radio" name="theme" value="custom-theme" />Grey Theme</label>`;
  } else if (
    window.matchMedia("(min-width: 641px) and (max-width: 1079px)").matches
  ) {
    navForm.innerHTML = `<button value="light-theme">Light theme</button>
  <button value="dark-theme">Dark theme</button>
  <button value="custom-theme">Backendless theme</button>`;
  } else if (window.matchMedia("(max-width: 640px)").matches) {
    navForm.innerHTML = `<select name="theme">
    <option value="light-theme" selected>Light theme</option>
    <option value="dark-theme">Dark theme</option>
    <option value="custom-theme">Backendless theme</option>
  </select>`
  }
};

document.addEventListener("load", changeNavType);
window.addEventListener("resize", changeNavType);
