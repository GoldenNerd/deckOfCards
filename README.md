# deckOfCards
Simulates shuffling a deck of cards. 
Firstly select the preferred suit type. Could be Poker, or Briscola. 
Then press the upper button to initialize the App parameters.
Lastly press the lower button to obtain the shuffled deck of cards.

Algorithm:
The App selects a suit at random using the Math.random() functiom.
It then selects also at random a value for the previously chosen suit.
It combine both to build a card and output results to the web browser.
The App keeps track of used values for each suit to not repeat values.
Once values of a particular suit are exhausted, it deletes the suit to prevent further selection of exhausted suits.
