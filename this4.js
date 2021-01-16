// ### CREATING A DECK OBJECT ###
const deckObj = {
 // Shuffled deck of cards   
    deckOfCards: [], 
  // possible symbols
  symbols: [{diamond:'&diams;'}, {club:'&clubs;'}, {spade:'&#9824;'}, {heart:'&hearts;'}],
  
allPossibleSymbolKeys(){
// Capture each symbol object's property name and save them all to an array
const allPossibleSymbolKeys = [];
for (const symbolObj of this.symbols){
  const symbolPropertyName = Object. keys(symbolObj)[0];
    allPossibleSymbolKeys.push(symbolPropertyName);
  }
  // console.log(`allPossibleSymbolKeys: \n${allPossibleSymbolKeys}`);
  return allPossibleSymbolKeys;
  },
  
  // values of Cards
  cardValues: ['A' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9' ,'10' ,'J' ,'Q' ,'K'],
// ** sources of card components **
   remainingSymbolKeys: [],
   
   remainingAmountOfSymbols(){
     return this.remainingSymbolKeys.length;
   }, 
   
  diamond: [] ,
  club: [] ,
  spade: [] ,
  heart: [],
  
  // Initialize sources of card components
initialize(){
// Erase deckOfCards' content
this.deckOfCards.length = 0;
// Set arrays' initial values
this.remainingSymbolKeys = this.allPossibleSymbolKeys();
// console.log(this.remainingSymbols);
this.diamond.length = 0;
this.diamond = [... this.cardValues];
this.club.length = 0;
this.club = [... this.cardValues];
this.spade.length = 0;
this.spade = [... this.cardValues];
this.heart.length = 0;
this.heart = [... this.cardValues];
//console.log(this.remainingSymbolKeys, this.diamond, this.club, this.spade, this.heart);
   },
   
// Random selection of a symbol
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
 
drawACard(){
// Generate random symbol key
const randomSymbolKey = this.randomSymbolKey();// key name
// Use symbol key to pinpoint its array, and determine its length (amount of remaining values)
const remainingValuesInArray = this[`${randomSymbolKey}`].length; // Use property name of the pack to grab its array by using bracket notation, and count its elements

// Select a value at random using length limit of previous step
const randomPointerToValue = Math.floor(Math.random()*remainingValuesInArray) ;
// draw (delete) value from pack, and preserve it in a variable
const randomCardValue = this[`${randomSymbolKey}`].splice(randomPointerToValue, 1);

// Compose the object for the outcome card
const randomOutcomeCard = [];
randomOutcomeCard[0] = this.toIcon(randomSymbolKey);
randomOutcomeCard[1] = randomCardValue;

// console.log(`randomCardValue: ${randomCardValue}\nrandomSymbolKey: ${randomOutcomeCard[0]}`);
// Delete pack if no more values remain in its array of remaining values
const remainingAmountOfValues = this[`${randomSymbolKey}`].length;

if (remainingAmountOfValues===0) {
  this.remainingSymbolKeys.splice(this.remainingSymbolKeys.indexOf(`${randomSymbolKey}`), 1);
}

// Display card on browser 
  
const pre = document.createElement('pre');
  pre.innerHTML = `${randomOutcomeCard.join("")} ` //`${randomOutcomeCard[1]} //${randomOutcomeCard[0]}`;
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
// remove an li
const body = document.querySelector('body');
const ul = document.querySelector('ul');
body.removeChild(ul);
const newul = document.createElement('ul');
body.appendChild(newul);
 }, 
};

function reset(){
deckObj.docClear();
deckObj.initialize();
const pre = document.querySelector('#preserve');
pre.innerHTML ='Ready to RUMBLE!!! 😁';
  }
  
  function shuffle(){
deckObj.deckComposer();
const pre = document.querySelector('#preserve');
pre.innerHTML ='Here is your shuffled\n deck of cards 🤩';
  }
  
const resetBtn = document.querySelector ('#reset');
resetBtn.addEventListener('click', 
reset);

const shuffleBtn = document.querySelector ('#shuffle');
shuffleBtn.addEventListener('click', 
shuffle);