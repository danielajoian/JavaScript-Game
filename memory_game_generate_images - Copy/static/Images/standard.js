const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
// if we try to turn a second pair of cards before the first set have finished unflipping, then that crushes our logic/bugs
// so in case of not a match we have to lock the board and wait until de cards finish unflipping
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    //if a card is clicked twice it remains open, we want to avoid that
    if(this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        //first time a player has clicked a card
        hasFlippedCard = true;
        firstCard = this;

        return;
    }
    //second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
        let isMatch = firstCard.dataset.puppy === secondCard.dataset.puppy;
        isMatch ? disableCards() : unflipCards();
}

function disableCards() {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);

      resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;
        resetBoard();
        }  , 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//immediately invoked function expression
//executed right after it's definition

(function shuffle() {
    // iterate over our cards and generate numbers from 0-11
    cards.forEach(card => {
        //Math.floor to generate integer
        let randomPos = Math.floor(Math.random() * 12);
        //apply the random number to the order propriety
        card.style.order = randomPos;
    });
})();
cards.forEach(card => card.addEventListener('click', flipCard));
