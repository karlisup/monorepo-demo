var General = (function (window) {

  function initialize() {
    _setFocusMethodForLinks();
  }

  function _setFocusMethodForLinks() {
    var links = document.querySelectorAll('a, [tabindex="0"]');
    links.forEach(function(link) {
      link.addEventListener('mousedown', () => {
        link.setAttribute('data-focus-method', 'mouse');
      });
      // link.addEventListener('touchstart', () => {
      //   link.setAttribute('data-focus-method', 'touch');
      // });

      link.addEventListener('blur', () => {
        link.removeAttribute('data-focus-method');
      });
      // link.addEventListener('touchend', () => {
      //   link.removeAttribute('data-focus-method');
      // });
    })
  }

  return {
    init: initialize
  };
})(window);

General.init();




