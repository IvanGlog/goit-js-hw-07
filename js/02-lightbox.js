import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// refs
const refs = {
    gallery: document.querySelector('.gallery'),
}

const galleryCard = createGallery(galleryItems);


// create gallery
function createGallery(items) {
    const tempGallery = []
    items.map(({ preview, original, description }) => {
        const img = `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>
        `
        tempGallery.push(img)
    })
    return refs.gallery.insertAdjacentHTML('afterbegin',tempGallery.join(''))
}

createGallery(galleryItems);


let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});

