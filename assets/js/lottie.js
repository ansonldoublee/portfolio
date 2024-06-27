document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'lottie-play'
    const lottiePlayers = document.querySelectorAll('.lottie-play');

    if (lottiePlayers.length === 0) {
        console.error('No elements found with class "lottie-play".');
        return;
    }

    // Define the Intersection Observer options
    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.5 // Trigger callback when 50% of the element is in view
    };

    // Create the Intersection Observer callback
    const observerCallback = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                console.log('Playing animation for:', entry.target);
                entry.target.play();
            } else {
                console.log('Stopping animation for:', entry.target);
                entry.target.stop();
            }
        });
    };

    // Create the Intersection Observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Start observing each Lottie player element
    lottiePlayers.forEach(function (player) {
        if (player && typeof player.play === 'function' && typeof player.stop === 'function') {
            observer.observe(player);
        } else {
            console.error('Lottie player element is not valid:', player);
        }
    });
});
