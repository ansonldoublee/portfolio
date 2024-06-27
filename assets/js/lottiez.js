      // Select the Lottie player element
      const lottiePlayerz = document.getElementById('lottie-play-zapp');

      // Create an intersection observer
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  lottiePlayerz.play();
              } else {
                  lottiePlayerz.stop();
              }
          });
      }, {
          threshold: 0.5 // Adjust this value to control when the animation plays (0.5 means the animation will play when 50% of the element is in view)
      });

      // Start observing the Lottie player element
      observer.observe(lottiePlayerz);