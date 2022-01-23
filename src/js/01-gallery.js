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

// ! Задание 1 - галерея изображений
// * Создай галерею с возможностью клика по её элементам и просмотра полноразмерного
// * изображения в модальном окне.Посмотри демо видео работы галереи.

// * Выполняй это задание в файлах 01 - gallery.html и 01 - gallery.js.
// * Разбей его на несколько подзадач:

// * 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному
// * 	  шаблону элемента галереи.

// * 2. Реализация делегирования на div.gallery и получение url большого изображения.

// * 3.	Подключение скрипта и стилей библиотеки модального окна basicLightbox.
// * 	  https://basiclightbox.electerious.com/
// * 	  Используй CDN сервис jsdelivr https://www.jsdelivr.com/package/npm/basiclightbox?path=dist
// *    и добавь в проект ссылки на минифицированные(.min)
// * 	  файлы библиотеки.

// * 4. Открытие модального окна по клику на элементе галереи.Для этого ознакомься с
// * 	  документацией https://github.com/electerious/basicLightbox#readme
// *	  и примерами. https://basiclightbox.electerious.com/

// * 5. Замена значения атрибута src элемента < img > в модальном окне перед открытием.
// *  	Используй готовую разметку модального окна с изображением из примеров библиотеки
// * 	  basicLightbox. https://basiclightbox.electerious.com/

// ! Разметка элемента галереи
// * Ссылка на оригинальное изображение должна храниться в data - атрибуте source на
// * элементе
// * 	< img >, и указываться в href ссылки.Не добавляй другие HTML теги или CSS
// * 	классы кроме тех, что есть в этом шаблоне.

// * <div class="gallery__item">
// *   <a class="gallery__link" href="large-image.jpg">
// *     <img
// *       class="gallery__image"
// *       src="small-image.jpg"
// *       data-source="large-image.jpg"
// *       alt="Image description"
// *     />
// *   </a>
// * </div>

// * 	Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по
// * умолчанию пользователь будет перенаправлен на другую страницу.Запрети это поведение
// * по умолчанию.

// ! Закрытие с клавиатуры
// * ⚠️ Следующий функционал не обязателен при сдаче задания, но будет хорошей
// * дополнительной практикой.

// * Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы
// * прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки
// * basicLightbox есть метод для программного закрытия модального окна.
