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
new SimpleLightbox('.gallery-item', {
  captions: false,
  
});

// Images Loaded
import imagesLoaded from 'imagesloaded';

// Masonry Layout
import Masonry from 'masonry-layout';
var gallery = document.getElementById('gallery');
imagesLoaded(gallery,function(){
  var msnry = new Masonry(gallery,{
    percentPosition: true,
  });
});


/**
 * Write any other JavaScript below
 */
