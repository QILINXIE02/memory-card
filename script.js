document.addEventListener('DOMContentLoaded', () => {
  const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];

  const memoryGame = document.querySelector('.memory-game');
  let flippedCards = [];
  let matchedCards = [];

  // Shuffle the cards
  cards.sort(() => Math.random() - 0.5);

  // Create card elements and append them to the memory game
  cards.forEach((card, index) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.dataset.index = index;
      cardElement.textContent = card;

      cardElement.addEventListener('click', flipCard);

      memoryGame.appendChild(cardElement);
  });

  function flipCard() {
      const selectedCard = this;

      if (flippedCards.length === 1 && flippedCards[0] === selectedCard) {
          return; // Prevent clicking the same card twice
      }

      selectedCard.classList.add('flipped');
      flippedCards.push(selectedCard);

      if (flippedCards.length === 2) {
          setTimeout(checkForMatch, 500);
      }
  }

  function checkForMatch() {
      const [card1, card2] = flippedCards;

      if (card1.textContent === card2.textContent) {
          card1.classList.add('matched');
          card2.classList.add('matched');
          matchedCards.push(card1, card2);

          if (matchedCards.length === cards.length) {
              alert('Congratulations! You matched all the cards!');
          }
      } else {
          card1.classList.remove('flipped');
          card2.classList.remove('flipped');
      }

      flippedCards = []; // Clear the flipped cards array
  }
});
