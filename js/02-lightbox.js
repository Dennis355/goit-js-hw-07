import { galleryItems } from './gallery-items.js';
// Change code below this line

  // data-source="${item.original}"


const imgGalleryEl = document.querySelector('.gallery');
const markupGallery = createMarkUp(galleryItems);
imgGalleryEl.innerHTML = markupGallery;


function createMarkUp(galleryItems) {
    return galleryItems
        .map((item) => {
            return `<div class ="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" 
        src="${item.preview}"
         alt="${item.description}"/>
        </a>
        </div>`
        }).join("");
}




let gallery = new SimpleLightbox('.gallery__item a', {captionsData: "alt",
captionDelay: 250 });
gallery.on('show.simplelightbox', function () {
  

    
});
