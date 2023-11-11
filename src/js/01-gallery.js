import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');


   const createGallery = () => galleryItems.forEach((item) => {
    const createdListItem = document.createElement('li');
    gallery.insertAdjacentElement("beforeend", createdListItem);

    const createdDiv = document.createElement('div');
    createdListItem.insertAdjacentElement('beforeend', createdDiv);
    createdDiv.classList.add('gallery__item');

    const createdLink = document.createElement('a');
    createdDiv.insertAdjacentElement('beforeend', createdLink);
    createdLink.href = item.original;
    createdLink.classList.add('gallery__link');

    const createdImg = document.createElement('img');
    createdLink.insertAdjacentElement("beforeend", createdImg);
    createdImg.src = item.preview;
    createdImg.alt = item.description;
    createdImg.dataset.source = item.original;
    createdImg.classList.add('gallery__image');
    });
    createGallery();


const handleClick = (event) => {
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img src= ${event.target.dataset.source} width="800" height="600">
    `, {onShow: (instance) => {
        // Close when hitting escape.
        document.onkeydown = function(evt) {
            evt = evt || window.event;
            var isEscape = false;
            if ( "key" in evt ) {
                isEscape = ( evt.key === "Escape" || evt.key === "Esc" );
            } else {
                isEscape = ( evt.keyCode === 27 );
            }
            if ( isEscape ) {
                instance.close();
            }
        };
    }
    },);
    instance.show();
}
gallery.addEventListener('click', handleClick);



    
console.log(galleryItems);

