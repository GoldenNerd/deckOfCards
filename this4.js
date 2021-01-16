// ### CREATING A DECK OBJECT ###
const deckObj = {
// Shuffled deck of cards   
deckOfCards: [], 
// possible symbols
symbols: [{diamond:'&diams;'}, {club:'&clubs;'}, {spade:'&#9824;'}, {heart:'&hearts;'}],
// values of Cards
cardValues: ['A' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9' ,'10' ,'J' ,'Q' ,'K'],
  
// ** sources of card components **
remainingSymbolKeys: [],
diamond: [] ,
club: [] ,
spade: [] ,
heart: [],
  
// Capture each symbol object's property name and save them all to an array
allPossibleSymbolKeys(){
const allPossibleSymbolKeys = [];
for (const symbolObj of this.symbols){
const symbolPropertyName = Object.keys(symbolObj)[0];
allPossibleSymbolKeys.push(symbolPropertyName);
  }
return allPossibleSymbolKeys;
 },
  
// Initialize sources of card components
initialize(){
// Erase deckOfCards' content
this.deckOfCards.length = 0;
// Set arrays' initial values
this.remainingSymbolKeys = this.allPossibleSymbolKeys();
this.diamond.length = 0;
this.diamond = [... this.cardValues];
this.club.length = 0;
this.club = [... this.cardValues];
this.spade.length = 0;
this.spade = [... this.cardValues];
this.heart.length = 0;
this.heart = [... this.cardValues];
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
const dataObj = {diamond:'&diams;', club:'&clubs;', spade:'&#9824;', heart:'&hearts;'};
return dataObj[`${randomSymbolKey}`];
  },
  
// Display card on browser
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
// draw (delete) value from pack, and preserve deletef in a variable
const randomCardValue = this[`${randomSymbolKey}`].splice(randomPointerToValue, 1);
// Compose the object for the outcome card
const randomOutcomeCard = [];
randomOutcomeCard[0] = this.toIcon(randomSymbolKey);
randomOutcomeCard[1] = randomCardValue;
this.displayOutcomeCard(randomOutcomeCard);
this.discardEmptyPack(randomSymbolKey);
}, 

// cards deck composer
deckComposer(){
  for (let i = 0; i < 52; i++) {
// Add a card to the cards deck
this.deckOfCards.unshift(this.drawACard());
  }
return this.deckOfCards;
 },
    
// initialize objects prior to new shuffle
docClear(){
// remove a ul
const body = document.querySelector('body');
const ul = document.querySelector('ul');
body.removeChild(ul);
const newul = document.createElement('ul');
body.appendChild(newul);
 }, 
};

function initialize(){
deckObj.initialize();
deckObj.docClear();
const pre = document.querySelector('#preserve');
pre.innerHTML ='Ready to RUMBLE!!! 😁';
  }
  
function shuffle(){
deckObj.deckComposer();
const pre = document.querySelector('#preserve');
pre.innerHTML ='Here is your shuffled\n deck of cards 🤩';
  }
  
// Listen for initialization directive
const initializeBtn = document.querySelector ('#reset');
initializeBtn.addEventListener('click', 
initialize);

// Listen for shuffle directive
const shuffleBtn = document.querySelector ('#shuffle');
shuffleBtn.addEventListener('click', 
shuffle);
