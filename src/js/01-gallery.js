// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const list = document.querySelector('.gallery')

function createMarkupItems(arr) {
	return arr.map(item => `<li class="gallery__item" style="list-style-type: none">
	<a class="gallery__link" href="${item.original}" >
	<img src="${item.preview}"  alt="${item.description} " class="gallery__image" ></a></li>`).join("")
}
list.insertAdjacentHTML("beforeend", createMarkupItems(galleryItems))
new SimpleLightbox('.gallery a',{captionsData: `alt`, captionDelay: 250,});