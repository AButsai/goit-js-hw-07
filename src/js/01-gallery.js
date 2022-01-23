import { galleryItems } from "./gallery-items.js";

const parentDivEl = document.querySelector(".gallery");

const gallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>`;
  })
  .join("");

parentDivEl.insertAdjacentHTML("beforeend", gallery);

parentDivEl.addEventListener("click", onImgClick);

const instance = basicLightbox.create(`<img class="gallery__image">`, {
  onShow: () => {
    window.addEventListener("keydown", onEscClick);
  },

  onClose: () => {
    window.removeEventListener("keydown", onEscClick);
  },
});

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector(".gallery__image").src =
    evt.target.dataset.source;

  instance.show();
}

function onEscClick(evt) {
  if (evt.key === "Escape") {
    instance.close();
    return;
  }
}
