// Define the prototype
const cardProto = {
    getName() {
      return `${this.rank} of ${this.suit}`;
    }
  };
  
  // Create King of Diamonds
  const kingDiamonds = Object.create(cardProto);
  kingDiamonds.rank = 'King';
  kingDiamonds.suit = 'Diamonds';
  
  // Create Queen of Hearts
  const queenHearts = Object.create(cardProto);
  queenHearts.rank = 'Queen';
  queenHearts.suit = 'Hearts';
  
  // Print them out
  console.log(kingDiamonds.getName());   // "King of Diamonds"
  console.log(queenHearts.getName());    // "Queen of Hearts"
  
  // If you want to inspect the full object:
  console.log(kingDiamonds);   // { rank: 'King', suit: 'Diamonds' } __proto__: cardProto
  console.log(queenHearts);    // { rank: 'Queen', suit: 'Hearts' } __proto__: cardProto
  

  const suits = ["Club", "Spade", "Diamond", "Heart"];
const numeral = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
                 "Knight", "Queen", "King", "Ace"];

const deckOfCards = [];

// Double loop: for each suit, for each rank, push a card object
for (const suit of suits) {
  for (const rank of numeral) {
    deckOfCards.push(`${rank} of ${suit}`);

  }
}

// Let's see the full deck
console.log(deckOfCards);

