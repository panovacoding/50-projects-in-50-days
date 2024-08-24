document.addEventListener('DOMContentLoaded', () => {
    expandingCardsInit();
})

const expandingCardsInit = () => {
    const cards = document.querySelectorAll('.expand-card');
    const clearActiveCards = () => {
        cards.forEach((card) => card.classList.remove('expand-card_active'));
    }
    const changeActiveCard = (card) => (e) => {
        clearActiveCards();
        if(!card.classList.contains('expand-card_active')) {
            card.classList.add('expand-card_active');
        }
    }
    cards.forEach((card) => {
        card.addEventListener('click', changeActiveCard(card))
    });
}