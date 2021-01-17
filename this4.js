// ### CREATING A DECK OBJECT ###
const deckObj = {
// Shuffled deck of cards   
deckOfCards: [],

// ymbols' data
symbols: {diamond:'&diams;', club:'&clubs;', spade:'&#9824;', heart:'&hearts;'},

// Possible values for each symbol 
valuesForEachSymbol: ['A' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9' ,'10' ,'J' ,'Q' ,'K'],

// Capture symbol's property names and save them to an array
allSymbolPropertyNames(){
const allSymbolPropertyNames = Object.keys(this.symbols);
return allSymbolPropertyNames;
},

// ** sources of cards building blocks **
// Create cards deck precursors, and initialize them
initDeck(){
// Erase deckOfCards' content
this.deckOfCards.length = 0;
// Initialize sources of card components
this.remainingSymbolKeys= [];
this.remainingSymbolKeys = this.allSymbolPropertyNames();
// Definition of card packs. As values are removed every time a random card draw occurs, these arrays keep track of remaining values for each symbol.
// Initialize card packs w/ card values
for(const symPropName of this.allSymbolPropertyNames()){
  this[`${symPropName}`] =[];
  this[`${symPropName}`] = [... this.valuesForEachSymbol];
  }
},

// Random selection of a symbol's property name (key)
randomSymbolKey(){
// Pointer to a random symbol
const idxToRandomSymbol = Math.floor(Math.random()*this.remainingSymbolKeys.length);
// symbol key
const randomSymbolKey = this.remainingSymbolKeys[idxToRandomSymbol];
return randomSymbolKey;
 },
 
// Convert symbol to icon
toIcon(randomSymbolKey){
return this.symbols[`${randomSymbolKey}`];
  },
  
// Display card on browser tab
displayOutcomeCard(randomOutcomeCard){
const pre = document.createElement('pre');
pre.innerHTML = `${randomOutcomeCard.join("")}`;
const li = document.createElement('li');
li.appendChild(pre);
const ul = document.querySelector('ul');
ul.appendChild(li);
return randomOutcomeCard;
 },
 
// Delete pack if no more values remain in its array of remaining values
discardEmptyPack(randomSymbolKey){
const remainingAmountOfValues = this[`${randomSymbolKey}`].length;
if (remainingAmountOfValues===0) {
  this.remainingSymbolKeys.splice(this.remainingSymbolKeys.indexOf(`${randomSymbolKey}`), 1);
   }
}, 

drawACard(){
// Select a symbol key at random 
const randomSymbolKey = this.randomSymbolKey();
// Use symbol's property name (key) of a pack using bracket notation, to pinpoint its array, and determine same array's length (amount of remaining values)
const remainingValuesInArray = this[`${randomSymbolKey}`].length;
// Select a value at random using length property of previous step
const randomPointerToValue = Math.floor(Math.random()*remainingValuesInArray) ;
// draw (delete) value from pack, and preserve deleted in a variable
const randomCardValue = this[`${randomSymbolKey}`].splice(randomPointerToValue, 1);
// Compose the outcome card object 
const randomOutcomeCard = [];
randomOutcomeCard[0] = this.toIcon(randomSymbolKey);
randomOutcomeCard[1] = randomCardValue;
this.displayOutcomeCard(randomOutcomeCard);
this.discardEmptyPack(randomSymbolKey);
},

// Remove previous card deck from DOM (if any) in preparation for new shuffled deck of cards
initDoc(){
// remove a ul
const body = document.querySelector('body');
const ul = document.querySelector('ul');
body.removeChild(ul);
const newul = document.createElement('ul');
body.appendChild(newul);
const pre = document.querySelector('#preserve');
pre.innerHTML ='Ready to RUMBLE!!! 😁';
 },
 
// cards deck builder (draw one card and add it to the deck, deckSize times)
deckBuilder(){
  const deckSize = Object.keys(this.symbols).length*this.valuesForEachSymbol.length;
  for (let i = 0; i < deckSize; i++) {
// Add a card to the cards deck
this.deckOfCards.unshift(this.drawACard());}
const pre = document.querySelector('#preserve');
pre.innerHTML ='Here is your shuffled\n deck of cards 🤩';
return this.deckOfCards;
 },
 
};
// initialize objects prior building new deck of shuffled cards
const init=()=>{
deckObj.initDeck();
deckObj.initDoc();
 };
 
// Listen for initialization directive
const initBtn = document.querySelector ('#reset');
initBtn.addEventListener('click', 
init);

// Listen for shuffle directive
const shuffleBtn = document.querySelector ('#shuffle');
shuffleBtn.addEventListener('click', ()=>deckObj.deckBuilder());
