var Testimonials = (function (window) {

  function initialize() {
    var list = document.querySelector('.testimonials__list')
    var links = document.querySelectorAll('.testimonials__figure')
    links.forEach(function(link, index) {
        link.addEventListener('mousedown', function() {
          if (_getWindowsWidth() <= 576) return
          if (this.classList.contains('testimonials__figure--active')) return false;
          document.querySelector('.testimonials__figure--active').classList.remove('testimonials__figure--active')
          this.classList.add('testimonials__figure--active')
          list.style.transform = "translateX(-"+index*100+"%)";
        })
    })

  }

  function _getWindowsWidth() {
    return (window.innerWidth > 0) ? window.innerWidth : screen.width;
  }

  return {
    init: initialize
  };
})(window);

Testimonials.init();

