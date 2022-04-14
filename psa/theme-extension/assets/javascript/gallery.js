var Gallery = (function (window) {

  function initialize() {
    var artwork = document.querySelector('.gallery__artwork:not(.gallery__artwork--wide)')
    var grid = document.querySelector('.gallery__grid')
    var readjustArtworkHeight = debounce(function(){
      grid.style.gridAutoRows = artwork.offsetWidth+'px'
    },100)
    readjustArtworkHeight()

    window.addEventListener("resize", function() {
      readjustArtworkHeight()
    });
  }

  return {
    init: initialize
  };
})(window);

Gallery.init();

