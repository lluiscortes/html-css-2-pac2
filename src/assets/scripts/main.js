/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// Bootstrap
import * as bootstrap from 'bootstrap';

// FontAwesome
import '@fortawesome/fontawesome-free/js/all.js';

// Simple Lightbox
import SimpleLightbox from 'simplelightbox';

// Images Loaded
import imagesLoaded from 'imagesloaded';

// Masonry Layout
import Masonry from 'masonry-layout';

// AOS
import AOS from 'aos';



/**
 * Write any other JavaScript below
 */

// Simple Lightbox
new SimpleLightbox('.gallery-item', {
  captions: false,
});

// Masonry
var gallery = document.getElementById('gallery');
imagesLoaded(gallery,function(){
  var msnry = new Masonry(gallery,{
    percentPosition: true,
  });
});

// AOS
AOS.init({
  duration: 1000,
});


// Header behavior
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const navLinks = document.getElementsByClassName('navbar__link');
const openMenu = () => {
  navbar.classList.add('navbar--show');
  toggle.classList.add('toggle--close');
}
const closeMenu = () => {
  navbar.classList.remove('navbar--show');
  toggle.classList.remove('toggle--close');
}
const toggleMenu = () => {
  if (navbar.classList.contains('navbar--show')) {
    closeMenu();
  } else {
    openMenu();
  }
}
toggle.addEventListener('click', toggleMenu);
for (var i = 0, len = navLinks.length; i < len; i++) {
  navLinks[i].addEventListener('click', closeMenu);
}
