# Blackjack.ts

node v14.15.1
npm v6.14.8

## brainStorming

### Card

Properties:

- suit
- number
- value

### Deck

Deck has only a single instance.

Properties:

- deck: Card[]

Methods:

- shuffle()
- draw()

### Player

Dealer may be a special instance of Player

Properties:

- name
- hand: Card[]
- hand2 ???

Methods:

- bet()
- hit()
- hold()
- split()
- doubleDown()
- exit()

### Table

Properties:

- players: Player[]

methods:

- startGame()
- endGame()
