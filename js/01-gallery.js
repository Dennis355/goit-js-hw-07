import { galleryItems } from './gallery-items.js';

{/* <script src="dist/basicLightbox.min.js"></script> */}


const imgGalleryEl = document.querySelector('.gallery');
const markupGallery = createMarkUp(galleryItems);
imgGalleryEl.innerHTML = markupGallery;
imgGalleryEl.addEventListener('click', onClickImg);

function createMarkUp(galleryItems) {
    return galleryItems
        .map((item) => {
            return `<div class ="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" 
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"/>
        </a>
        </div>`
        }).join("");
}
    function onClickImg(event){ 
        
        event.preventDefault();
       let instance = basicLightbox.create(`
        <div class="modal">
            <p>
             <img src="${event.target.dataset.source}">
                   
            </p>
        </div>
    `);
    
    instance.show()

    document.addEventListener('keydown', function (e) {
        if (e.code === 'Escape') {
            instance.close();
    }
     }); 
    
};










