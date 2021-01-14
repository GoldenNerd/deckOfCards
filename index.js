// ### CREATING A DECK OBJECT ###
const deckObj = {
  // symbols
  symbols: [{diamond: '&diams;'}, {club: '&clubs;'}, {spade:'&#9824;'}, {heart: '&hearts;'}], 
  // values of Cards
  valuesForPacks: ['A  ' ,  '2  ' ,'3  ' ,'4  ' ,'5  ' ,'6  ' ,'7  ' ,'8  ' ,'9  ' ,'10 ' ,'J  ' ,'Q  ' ,'K  '], 
// ** source packs of card components **
   availableSymbols: [{diamond: 'diamond'}, {club: 'club'}, {spade:'spade'}, {heart: 'heart'}], 
   
  diamond: ['A  ' ,  '2  ' ,'3  ' ,'4  ' ,'5  ' ,'6  ' ,'7  ' ,'8  ' ,'9  ' ,'10 ' ,'J  ' ,'Q  ' ,'K  '] ,
  club: ['A  ' ,  '2  ' ,'3  ' ,'4  ' ,'5  ' ,'6  ' ,'7  ' ,'8  ' ,'9  ' ,'10 ' ,'J  ' ,'Q  ' ,'K  '] ,
  spade: ['A  ' ,  '2  ' ,'3  ' ,'4  ' ,'5  ' ,'6  ' ,'7  ' ,'8  ' ,'9  ' ,'10 ' ,'J  ' ,'Q  ' ,'K  '] ,
  heart: ['A  ' ,  '2  ' ,'3  ' ,'4  ' ,'5  ' ,'6  ' ,'7  ' ,'8  ' ,'9  ' ,'10 ' ,'J  ' ,'Q  ' ,'K  '], 
    // Random selection of symbol
    pointToASymbolObj(){
      // random pointer to a symbol obj 
      const idxOfASymbolObj = Math.floor(Math.random()*this.availableSymbols.length);
      // symbol object pointer
      return idxOfASymbolObj;
    },
      
drawACard(){
// Generate random pointer to one of the symbols
  const idxOfASymbolObj = this.pointToASymbolObj(); // a random number that points to one of the symbol objects 
// Map random pointer to the property name of its symbol object
const randomSymbolKey = Object.keys(this.availableSymbols[idxOfASymbolObj])[0];// key name
// Use symbol name to pinpoint its array, and determine its length (amount of remaining values)
const remainingValuesInArray = this[randomSymbolKey].length; // Use property name of the pack to grab its array by using bracket notation, and count its elements
// Select a value at random using length limit of previous step
const randomPointerToValue = Math.floor(Math.random()*remainingValuesInArray);
// Delete drawed value from pack and deleted item is random card value
const randomCardValue = this[randomSymbolKey].splice(randomPointerToValue, 1);
// Delete pack if no more values remain in its array of remaining values
const qtyOfValuesRemaining = this[randomSymbolKey].length;
if (qtyOfValuesRemaining===0) {
  this.availableSymbols.splice(idxOfASymbolObj, 1);
}
// Compose the object for the outcome card
const randomOutcomeCard = [];
randomOutcomeCard[0] = Object.values(this.symbols[idxOfASymbolObj]);
randomOutcomeCard[1] = `${randomCardValue}`;
// console.log(`randomCardValue: ${randomCardValue}\nrandomSymbolKey: ${randomOutcomeCard[0]}`);
// Display card on browser 
  
const pre = document.createElement('pre');
  pre.innerHTML = `${randomOutcomeCard[1]} ${randomOutcomeCard[0]}`;
const li = document.createElement('li');
li.appendChild(pre);
  const ul = document.querySelector('ul');
  ul.appendChild(li);
return randomOutcomeCard;
 },
 
// cards deck composer
deckComposer(){
  for (let i = 0; i < 52; i++) {
// Add a card to the cards deck
this.deckOfCards.unshift(this.drawACard());
  }
console.log(`Task Complete.\nHere is your shuffled deck of cards:`);
  console.log(`${this.deckOfCards}`);
  return this.deckOfCards;
    },
    
 // reset objects prior to new shuffle
docClear(){
 for (let i = 0; i < 52; i++) {
// remove an li
const ul = document.querySelector('ul');
const li = document.querySelector('li');
ul.removeChild(li);
 } 
  }, 
  
deckReset(){
 this.diamond = this.valuesForPacks. slice(0);
 this.club = this.valuesForPacks.slice(0) ;
 this.spade = this.valuesForPacks.slice(0);
 this.heart = this.valuesForPacks.slice(0);
 this.availableSymbols = this.symbols.slice(0);
 this.deckOfCards.length = 0;
    },
    
 // Shuffled deck of cards   
    deckOfCards: []
  };

  
function reset(){
deckObj.docClear();
deckObj.deckReset();
const pre = document.querySelector('#preserve');
pre.innerHTML = '';
const h4 = document.querySelector('h4');
h4.innerHTML = 'Ready to RUMBLE again!!! 🤓';
  }
  
  function shuffle(){
deckObj.deckComposer();
const h4 = document.querySelector('h4');
h4.innerHTML = '';
const pre = document.querySelector('#preserve');
pre.innerHTML = 'Here is your shuffled\n deck of cards 🤩';
  }
  
const resetBtn = document.querySelector ('#reset');
resetBtn.addEventListener('click', 
reset);

const shuffleBtn = document.querySelector ('#Shuffle');
shuffleBtn.addEventListener('click', 
shuffle);