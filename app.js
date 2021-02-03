// ## SHUFFLED DECK OF CARDS BUILDER ##
const pokerObj = {
// Shuffled deck of cards   
deckOfCards: [],

// Suits data
suitObjects: {diamond:'&diams;', club:'&clubs;', spade:'&#9824;', heart:'&hearts;'},

// Possible values for each suit 
suitValues: ['A' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9' ,'10' ,'J' ,'Q' ,'K'],

randomSuitName0: "", 

// Capture suit's property names and save them to an array
suitNames(){
  return [... Object.keys(this.suitObjects)];
  }, 

// ** sources of cards building blocks **
// Create cards deck precursors, and initialize them
initDeck(){
// Erase deckOfCards' content
this.deckOfCards.length = 0;
// Initialize sources of card components
this.remainingSuitNames= [];
this.remainingSuitNames = this.suitNames();
// Definition of card packs. As values are removed every time a random card draw occurs, these arrays keep track of remaining values for each suit.
// Initialize card packs w/ card values
for(const suitName of this.suitNames()){
  this[`${suitName}`] =[];
  this[`${suitName}`] = [... this.suitValues];
  }
},

// Random selection of an suit's property name (key)
randomSuitName(){
// Pointer to a random suit
const randomSuitIdx = Math.floor(Math.random()*this.remainingSuitNames.length);
// suit key
const randomSuitName = this.remainingSuitNames[randomSuitIdx];
// Preserve randomSuitName for future usage
// this.randomBldgBlocks.randomSuitName = randomSuitName; 
return randomSuitName; //this.randomBldgBlocks.randomSuitName;
 },
 
// Convert suit to entity code
translateSuitToEntityCode(){
return this.suitObjects[`${this.randomSuitName0 }`];
  },
  
// Display card on browser tab
displayOutcomeCard(){
  // Prepare card value
const span = document.createElement('span');
span.innerHTML = `${this.outcomeCard.join("")}`;
// Prepare holder of suit and value
const li = document.createElement('li');
li.classList.add('poker');
// Load holder with value and background image 
li.appendChild(span);
// Add composed card to ul container document
const ul = document.querySelector('ul');
ul.appendChild(li);
return this.outcomeCard;
 },
 
// Delete pack if no more values remain in its array of remaining values
discardEmptyPack(){
const remainingAmountOfValues = this[`${this.randomSuitName0 }`].length;
if (remainingAmountOfValues===0) {
  this.remainingSuitNames.splice(this.remainingSuitNames.indexOf(`${this.randomSuitName0 }`), 1);
   }
}, 

drawCardAtRandom(){
// Select an suit key at random 
const randomSuitName = this.randomSuitName();
// Presetve randomSuitName for future usage
this.randomSuitName0 = randomSuitName;
// Use suit's property name (key) of a pack using bracket notation, to pinpoint its array, and determine same array's length (amount of remaining values)
const remainingValuesInArray = this[`${this.randomSuitName0}`].length;
// Select a value at random using length property of previous step
const cardValueRandomIdx = Math.floor(Math.random()*remainingValuesInArray) ;
// draw (delete) random value from pack, and preserve deleted in a variable
const randomCardValue = this[`${this.randomSuitName0 }`].splice(cardValueRandomIdx, 1);
// Compose the outcome card array 
const outcomeCard = [];
outcomeCard[0] = this.translateSuitToEntityCode();
outcomeCard[1] = randomCardValue;
// Preserve outcome card for future usage
this.outcomeCard = outcomeCard;
this.displayOutcomeCard();
this.discardEmptyPack();
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
  const deckSize = Object.keys(this.suitObjects).length*this.suitValues.length;
  for (let i = 0; i < deckSize; i++) {
// Add a card to the cards deck
this.deckOfCards.unshift(this.drawCardAtRandom());}
const pre = document.querySelector('#preserve');
pre.innerHTML ='Here is your shuffled\n deck of cards 🤩';
return this.deckOfCards;
 },
// initialize objects prior building new deck of shuffled cards
init(){
this.initDeck();
this.initDoc();
 }
};

const briscolaObj = {
// Shuffled deck of cards   
deckOfCards: [],

// Symbols' data
suitObjects: {bastoni:'url(pics/basto1.png)', coppe:'url(pics/copa1.png)', spade:'url(pics/espada1.png)', dinari:'url(pics/oro1.png)'},

// Possible values for each suit 
suitValues: ['1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9' ,'10'],

randomSuitName0: "", 

// Capture suit's property names and save them to an array
suitNames(){
  return [... Object.keys(this.suitObjects)];
  }, 

// ** sources of cards building blocks **
// Create cards deck precursors, and initialize them
initDeck(){
// Erase deckOfCards' content
this.deckOfCards.length = 0;
// Initialize sources of card components
this.remainingSuitNames= [];
this.remainingSuitNames = this.suitNames();
// Definition of card packs. As values are removed every time a random card draw occurs, these arrays keep track of remaining values for each suit.
// Initialize card packs w/ card values
for(const suitName of this.suitNames()){
  this[`${suitName}`] =[];
  this[`${suitName}`] = [... this.suitValues];
  }
},

// Random selection of an suit's property name (key)
randomSuitName(){
// Pointer to a random suit
const randomSuitIdx = Math.floor(Math.random()*this.remainingSuitNames.length);
// suit key
const randomSuitName = this.remainingSuitNames[randomSuitIdx];
// Preserve randomSuitName for future usage
// this.randomBldgBlocks.randomSuitName = randomSuitName; 
return randomSuitName; //this.randomBldgBlocks.randomSuitName;
 },
 
// Convert suit to entity code
translateSuitToEntityCode(){
return this.suitObjects[`${this.randomSuitName0 }`];
  },
  
// Display card on browser tab
displayOutcomeCard(){
  // Prepare card value container
const span = document.createElement('span');
span.classList.add('briscaSpan');
span.innerHTML = `${this.outcomeCard[1]}`;
// Prepare holder of background image and value
const li = document.createElement('li');
li.classList.add('briscola');
// Load holder with value and background image 
li.appendChild(span);
li.style.backgroundImage =`${this.outcomeCard[0]}`;
// Add composed card to ul container document
const ul = document.querySelector('ul');
ul.appendChild(li);
return this.outcomeCard;
 },

// Delete pack if no more values remain in its array of remaining values
discardEmptyPack(){
const remainingAmountOfValues = this[`${this.randomSuitName0 }`].length;
if (remainingAmountOfValues===0) {
  this.remainingSuitNames.splice(this.remainingSuitNames.indexOf(`${this.randomSuitName0 }`), 1);
   }
}, 

drawCardAtRandom(){
// Select an suit key at random 
const randomSuitName = this.randomSuitName();
// Presetve randomSuitName for future usage
this.randomSuitName0 = randomSuitName;
// Use suit's property name (key) of a pack using bracket notation, to pinpoint its array, and determine same array's length (amount of remaining values)
const remainingValuesInArray = this[`${this.randomSuitName0}`].length;
// Select a value at random using length property of previous step
const cardValueRandomIdx = Math.floor(Math.random()*remainingValuesInArray) ;
// draw (delete) random value from pack, and preserve deleted in a variable
const randomCardValue = this[`${this.randomSuitName0 }`].splice(cardValueRandomIdx, 1);
// Compose the outcome card array 
const outcomeCard = [];
outcomeCard[0] = this.translateSuitToEntityCode();
outcomeCard[1] = randomCardValue;
// Preserve outcome card for future usage
this.outcomeCard = outcomeCard;
this.displayOutcomeCard();
this.discardEmptyPack();
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
  const deckSize = Object.keys(this.suitObjects).length*this.suitValues.length;
  for (let i = 0; i < deckSize; i++) {
// Add a card to the cards deck
this.deckOfCards.unshift(this.drawCardAtRandom());}
const pre = document.querySelector('#preserve');
pre.innerHTML ='Here is your shuffled\n deck of cards 🤩';
return this.deckOfCards;
 },
// initialize objects prior building new deck of shuffled cards
init(){
this.initDeck();
this.initDoc();
 }
};

// Pocker or Briscola object selector
let pokerFlag;
let briscolaFlag;
const pokerRadioInput = document.querySelector ('#poker');
pokerRadioInput.addEventListener('click', function (){
  pokerFlag = true;
  briscolaFlag = false;
});

const briscolaRadioInput = document.querySelector ('#briscola');
briscolaRadioInput.addEventListener('click', function (){
  briscolaFlag = true;
  pokerFlag = false;
});

// Listen for initialization directive
const initBtn = document.querySelector ('#reset');
initBtn.addEventListener('click', 
function (){
  if (pokerFlag) {
pokerObj.init();
} else if(briscolaFlag) {
briscolaObj.init();
}else{
// Do nothing, since no radio button was actuated
const pre = document.querySelector('#preserve');
pre.innerHTML =`What's your preference
darling? 🤔`;
}
});

// Listen for shuffle directive
const shuffleBtn = document.querySelector ('#shuffle');
shuffleBtn.addEventListener('click', function (){
  if (pokerFlag) {
pokerObj.deckBuilder()
} else if(briscolaFlag) {
briscolaObj.deckBuilder()
}else{
// Do nothing, since no radio button was actuated
const pre = document.querySelector('#preserve');
pre.innerHTML =`What's your preference
darling? 🤔`;
}
});
