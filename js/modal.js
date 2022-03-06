const modalBackdrop = document.querySelector("body > div");
const modalContainer = document.querySelector("body > div:nth-of-type(2)");
const modalWindow = document.querySelector("body > div:nth-of-type(2) > div");
console.log(modalBackdrop)
console.log(modalContainer)

const createModal = function() {
    const modalImg = document.querySelectorAll("img");
    modalImg.forEach(el => el.addEventListener("click", showModal));
}

const showModal = function(evt) {
    modalBackdrop.classList.remove('hidden');
    modalContainer.classList.remove('hidden');
    document.body.style.overflow = "hidden";
    modalWindow.innerHTML = `<img
    src=${evt.target.src}
    alt=${evt.target.alt}
  />`;
}

const closeModal = function() {
    modalBackdrop.classList.add('hidden');
    modalContainer.classList.add('hidden');
    document.body.style.overflow = "";
    modalWindow.innerHTML = "";
}

modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closeModal();
    }
  });

createModal();