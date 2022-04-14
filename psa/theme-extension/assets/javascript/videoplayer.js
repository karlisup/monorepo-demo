var VideoPlayer = (function (window) {
  
    function initialize(videoID, setActiveFn) {
      const iframe = document.querySelector('.videoplayer > iframe');
      const player = new Vimeo.Player(iframe);

      var video = document.getElementById(videoID)
      var controls = document.querySelectorAll('[data-video="#'+videoID+'"]')
      var checkpoints = []
      controls.forEach(function (link, index) {
        var set = []
        set[0] = parseInt(link.getAttribute("data-skip-to"));
        set[1] = link
        checkpoints[index] = set
      });

      // watch time and update tablinks
      player.on('timeupdate', function(data) {
        var seconds = data.seconds
        checkpoints.forEach(function(checkpoint, index) {
          if (checkpoint[0] === Math.round(seconds)){
            setActiveFn(checkpoint[1])
          } else if (Math.round(seconds) > checkpoint[0]){
            if (index+1 in checkpoints) { // is there a next checkpoint?
              var nextCheckpoint = checkpoints[index+1]
              if (Math.round(seconds) < nextCheckpoint[0]) {
                setActiveFn(checkpoint[1])
              }
            } else {
              setActiveFn(checkpoint[1])
            }
          }
        })
      });

      // on tab click - set video time.
      controls.forEach(function(link) {
        link.addEventListener("click", function () {
          player.setCurrentTime(link.getAttribute("data-skip-to"))
        })
      })

    }

    return {
      init: initialize
    };
})(window);
  
VideoPlayer.init('how-it-works', Tablinks.setTabActive);
  
