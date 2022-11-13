import { galleryItems } from './gallery-items.js';
// Change code below this line

const instance = basicLightbox.create(`
    <div class="modal">
        <img class="gallery_image_modal"/>
        src=""
        alt=""/>
    </div>
`)


// refs
const refs = {
    gallery: document.querySelector('.gallery'),
}

const galleryCard = createGallery(galleryItems);
refs.gallery.addEventListener('click', onCardGallery);


// create gallery
function createGallery(items) {
    const tempGallery = []
    items.map(({ preview, original, description }) => {
        const img = `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `
        tempGallery.push(img)
    })
    return refs.gallery.insertAdjacentHTML('afterbegin',tempGallery.join(''))
}

createGallery(galleryItems)


function onCardGallery(event) {
    event.preventDefault();
    window.addEventListener('keydown', closeModal);
    const tapGalleryCard = event.target.classList.contains('gallery__image');

    if (!tapGalleryCard) {
        return;
    }
    const urlImgCard = event.target.getAttribute('data-source');
    const desImgCard = event.target.getAttribute('alt');
    openModal(urlImgCard, desImgCard);
}
function openModal(url, des) {
    const modalCard = instance.element().querySelector('.gallery_image_modal');

    modalCard.setAttribute('src', url);
    modalCard.setAttribute('alt', des);
instance.show()
}

function closeModal(event) {
    if (event.code === 'Escape') {
        instance.close(() => {
            window.removeEventListener('keydown', closeModal)
        })
    }
}