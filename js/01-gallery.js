import { galleryItems } from "./gallery-items.js";

const galeryPlace = document.querySelector(".gallery");
galeryPlace.addEventListener("click", onClickGalaryItem);

addGaleryToHTML(galleryItems);

function createOneItemEl({ preview, original, description } = {}) {
  return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
}

function renderGaleryItems(arrOfItems) {
  return arrOfItems.map((el) => createOneItemEl(el)).join("");
}

function addGaleryToHTML(galleryItems) {
  galeryPlace.insertAdjacentHTML("beforeend", renderGaleryItems(galleryItems));
}

function onClickGalaryItem(event) {
  if (event.target.nodeName === "IMG") {
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

    instance.show();
    window.addEventListener("keydown", closeModal);
    function closeModal(event) {
      if (event.code === "Escape") {
        instance.close();
        window.removeEventListener("keydown", closeModal);
      }
    }
  }
}
