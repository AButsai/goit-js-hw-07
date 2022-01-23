import { galleryItems } from "./gallery-items.js";

const parentDivEl = document.querySelector(".gallery");

const gallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      />
      </a>`;
  })
  .join("");

parentDivEl.insertAdjacentHTML("beforeend", gallery);

new SimpleLightbox(".gallery a", {
  showCounter: false,
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
});
