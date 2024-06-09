document.addEventListener('DOMContentLoaded', (event) => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const allCards = document.querySelectorAll('.more-work-card');

    function filterCards(category) {
        allCards.forEach(card => {
            const cardId = card.querySelector('.mw-card-img').id;
            if (category === 'all' || category.includes(cardId)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
            // Filter cards based on the selected category
            const category = button.getAttribute('data-category').split(' ');
            filterCards(category.includes('all') ? 'all' : category);
        });
    });

    // Show all cards by default
    filterCards('all');
});
