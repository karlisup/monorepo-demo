var Timeline = (function (window) {
  var timeline;
  var sections;
  var totallength = 0; // for each timeline
  var valuenow = 0;
  var timelineinterval; // inerval

  function initialize() {
    timeline = document.querySelectorAll(".timeline")[0];
    sections = timeline.querySelectorAll(".timeline__section");
    _prepareTimeline(); // calculate attributes, set classes
    sections.forEach(function (section) {
      section.addEventListener("click", _onSectionClick);
    });
    _startTimer(0);
  }

  function _prepareTimeline() {
    sections.forEach(function (section) {
      section.setAttribute("data-start", totallength);
      totallength += parseInt(section.getAttribute("data-duration"));
    });
    timeline.setAttribute("aria-valuemin", 0);
    timeline.setAttribute("aria-valuemax", totallength);
    sections.forEach(function (section) {
      var width = (
        (section.getAttribute("data-duration") * 100) /
        totallength
      ).toFixed(2);
      section.style.width = "calc(" + width + "% - 4px)";
    });
  }

  function _startTimer(second) {
    timelineinterval = setInterval(function () {
      if (valuenow >= totallength) {
        _jumpProgressTo(0); // jump to begining
      }
      valuenow += 0.1;
      timeline.setAttribute("aria-valuenow", valuenow.toFixed(1));
      _drawProgress(valuenow);
    }, 100);
  }

  function _drawProgress(valuenow) {
    sections.forEach(function (section) {
      var start = parseInt(section.getAttribute("data-start"));
      var duration = parseInt(section.getAttribute("data-duration"));
      if (valuenow < start || valuenow > start + duration) return;
      var progress = (valuenow - start) / duration;
      section.childNodes[1].style.transform = "scaleX(" + progress + ")";
      _setActiveState(section);
    });
  }

  function _setActiveState(section) {
    var active = document.querySelector(".timeline__section--active");
    if (section != active) {
      if (active) {
        active.classList.remove("timeline__section--active");
      }
      section.classList.add("timeline__section--active");
      setActive(section)
    }
  }

  function _jumpProgressTo(second) {
    clearInterval(timelineinterval);
    _emptyTimeline();
    _fillTill(second);
    valuenow = second;
    _startTimer(second);
  }

  function _emptyTimeline() {
    notanimate(function () {
      sections.forEach(function (section) {
        // reset everything to 0
        section.childNodes[1].style.transform = "scaleX(0)";
      });
      // console.log('executing fn')
    });
  }

  function _fillTill(second) {
    notanimate(function () {
      sections.forEach(function (section) {
        // reset everything to 0
        var start = parseInt(section.getAttribute("data-start"));
        var duration = parseInt(section.getAttribute("data-duration"));
        if (second >= start + duration) {
          section.childNodes[1].style.transform = "scaleX(1)";
        } else {
          return;
        }
      });
      // console.log('executing fn')
    });
  }

  function notanimate(fn) {
    // console.log('no-transition ON')
    timeline.classList.add("no-transition");
    fn();
    setTimeout(function () {
      // console.log('no-transition OFF')
      timeline.classList.remove("no-transition");
    }, 10);
  }

  function _onSectionClick(e) {
    e.preventDefault();
    // console.log('event', e)
    _jumpProgressTo(parseInt(this.getAttribute("data-start")));
  }

  return {
    init: initialize
  };
})(window);

Timeline.init();


// TODO: meant to be an general utility function. Move it.
function setActive(link) {
  // console.log('calling setActive with' + link)
  var targetID = link.hash.substr(1)
  var targetEl = document.getElementById(targetID)
  if (!targetEl) {
    console.warn('timeline: for link with href: '+link.hash+' doesn\'t exist corresponding target element with such ID.')
    return
  }
  var container = targetEl.parentElement
  var previousActive = container.querySelector('.animatable--active')
    if (previousActive) {
      previousActive.classList.remove('animatable--active')
    }
    if (targetEl) {
      targetEl.classList.add('animatable--active')
    }
}

// TODO: meant to be an general utility function. Move it.
// function throttle(fn, delay){
//   var lastCalled = 0;
//   return function(...args){
//     var now = new Date().getTime();
//     if(now - lastCalled < delay) {
//       return;
//     }
//     lastCalled = now;
//     return fn(...args);
//   }
// }