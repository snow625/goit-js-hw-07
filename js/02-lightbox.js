import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryPlace = document.querySelector(".gallery");

addGaleryToHTML(galleryItems);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  /* options */
});

function createOneItemEl({ preview, original, description } = {}) {
  return `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  </div>`;
}

function renderGaleryItems(arrOfItems) {
  return arrOfItems.map((el) => createOneItemEl(el)).join("");
}

function addGaleryToHTML(galleryItems) {
  galeryPlace.insertAdjacentHTML("beforeend", renderGaleryItems(galleryItems));
}
