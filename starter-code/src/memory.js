var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  this.cards = this.cards.sort(() => Math.random() - 0.5);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard===secondCard){
    this.pairsGuessed += 1;
    return true;
  }
  return false;
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed===this.cards.length/2){
    return true;
  }
  return false;
};