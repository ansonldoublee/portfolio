// script.js
const circle = document.querySelector('.circle');
const hoverImages = document.querySelectorAll('.hover-image');

hoverImages.forEach(image => {
    image.addEventListener('mousemove', (e) => {
        circle.style.left = `${e.pageX + 20}px`; // Adjust position as needed
        circle.style.top = `${e.pageY - 60}px`; // Adjust position as needed
    });
});