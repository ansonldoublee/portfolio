let lastScrollTop = 0;
const hideHeader = document.getElementById('hide-header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        hideHeader.style.top = '-90px'; // Adjust based on the header height
    } else {
        // Scrolling up
        hideHeader.style.top = '0';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});