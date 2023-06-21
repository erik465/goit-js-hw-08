import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery')

const galleryMarkup = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  })

galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup.join(""))

new SimpleLightbox('.gallery a', {
    captionsData : 'alt', 
    captionDelay : 250,
});

