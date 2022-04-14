var Tablinks = (function (window) {

  function initialize() {
    var tablinks = document.querySelectorAll('.tablinks')
    tablinks.forEach(function(tablink){
        var links = tablink.querySelectorAll('.tablinks__link')
        links.forEach(function(link){
            link.addEventListener("click", _onLinkClick);
        })
    })
    window.addEventListener("resize", function() {
      readjustUnderline()
    });
  }

  function _onLinkClick(e) {
    e.preventDefault();
    setTabActive(this)
  }

  function setTabActive(link) {
    _selectActiveLink(link)
    setActive(link) // set active text TODO: rename
    _moveUnderline(link)
  }

  function _selectActiveLink(clickedLink) {
    var activeLink = document.querySelector('.tablinks__link--active')
    if (activeLink === clickedLink) return
    if (activeLink) {
      activeLink.classList.remove('tablinks__link--active')
    }
    if (clickedLink) {
      clickedLink.classList.add('tablinks__link--active')
    }
  }

  function _moveUnderline(link) {
    // console.log(link, link.offsetLeft)
    var line = link.parentNode.parentNode.nextElementSibling //.closest('.tablinks__line')
    line.style.transform="translateX("+link.offsetLeft+"px)"
  }

  var readjustUnderline = debounce(function(){
    var activeLink = document.querySelector('.tablinks__link--active')
    _moveUnderline(activeLink)
  },100)

  return  {
    init: initialize,
    setTabActive: setTabActive
  };

})(window);

Tablinks.init();


//
// function throttle (callback, limit) {
//   var waiting = false;
//   return function () {
//     if (!waiting) {
//       callback.apply(this, arguments);
//       waiting = true;
//       setTimeout(function () {
//         waiting = false;
//       }, limit);
//     }
//   }
// }


function debounce(fn, delay){
  var timer;
  return function(){
    if(timer) clearTimeout(timer);
    timer = setTimeout(fn, delay)
  }
}
