// ! Задание 2 - библиотека SimpleLightbox
// * Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox,
// * https://simplelightbox.com/
// * которая возьмет на себя обработку кликов по изображениям,
// * открытие и закрытие модального окна, а также пролистывание изображений при
// * помощи клавиатуры.

// * Посмотри демо видео работы галереи с подключенной библиотекой.
// * https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4

// * Необходимо немного изменить разметку карточки галереи, используй этот шаблон.

// * <a class="gallery__item" href="large-image.jpg">
// *  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// * </a>

// * Выполняй это задание в файлах 02 - lightbox.html и 02 - lightbox.js.Разбей его на
// * несколько подзадач:

// * 1. Создание и рендер разметки по массиву данных galleryItems и
// * 	предоставленному шаблону элемента галереи.Используй готовый код из первого задания.

// * 2. Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs.
// *	https://cdnjs.com/libraries/simplelightbox
// * 	Необходимо добавить ссылки на два файла: simple - lightbox.min.js и simple -
// * 	lightbox.min.css.

// * 3. Инициализация библиотеки после того как элементы галереи созданы и добавлены в
// * 	div.gallery.Для этого ознакомься с документацией SimpleLightbox
// * 	https://simplelightbox.com/
// *	- в первую очередь секции
// * 	«Usage» и «Markup».

// * 4. Посмотри в документации секцию «Options» и добавь отображение подписей к
// * 	изображениям из атрибута alt.Пусть подпись будет снизу и появляется через 250
// * 	миллисекунд после открытия изображения.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const parentDivEl = document.querySelector(".gallery");

const gallery = galleryItems.reduce(
  (itemMarkup, { preview, original, description }) => {
    return (
      itemMarkup +
      `<a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      />
      </a>`
    );
  },
  ""
);

parentDivEl.insertAdjacentHTML("beforeend", gallery);

const lightbox = new SimpleLightbox(".gallery a", {
  showCounter: false,
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
});
