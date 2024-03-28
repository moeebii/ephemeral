document.addEventListener('DOMContentLoaded', function() {
  var video = document.querySelector("#videoElement");

  if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
          .then(function (stream) {
              video.srcObject = stream;
              fadeOutOverTime(video, 10); // Start fading out over 30 seconds immediately
          })
          .catch(function (error) {
              console.log("Something went wrong: ", error);
          });
  } else {
      console.log("getUserMedia not supported on your browser");
  }

  function fadeOutOverTime(element, duration) {
      var start = performance.now();
      var interval = setInterval(function() {
          var elapsed = performance.now() - start;
          var opacity = 1 - (elapsed / (duration * 1000)); // Calculate opacity
          if (opacity <= 0) {
              clearInterval(interval);
              element.style.opacity = 0; // Ensure opacity is 0
          } else {
              element.style.opacity = opacity;
          }
      }, 16); // Update every 16ms (approx. 60fps)
  }
});



