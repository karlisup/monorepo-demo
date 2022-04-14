var Benefits = (function (window) {

  function initialize() {
    var headers = document.querySelectorAll('.benefits__header');
    headers.forEach(function(header) {
      var target = header.nextElementSibling;
      header.addEventListener('click', function() {
        var expanded = header.getAttribute('aria-expanded') === 'true' || false;
        if (expanded) return; // do not close active project
        // handle old and new active headers & targets
        var activeHeader = document.querySelector('.benefits__header[aria-expanded="true"]')
        var activeTarget = activeHeader.nextElementSibling;
        activeHeader.setAttribute('aria-expanded', false);
        activeTarget.hidden = true;
        header.setAttribute('aria-expanded', !expanded);
        target.hidden = expanded;
      })
    })
  }

  return  {
    init: initialize
  };

})(window);

Benefits.init();



