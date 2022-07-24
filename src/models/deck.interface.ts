export enum Suit {
  Spades = "SPADES",
  Hearts = "HEARTS",
  Diamonds = "DIAMONDS",
  Clubs = "CLUBS",
}

export enum Rank {
  Two = "TWO",
  Three = "THREE",
  Four = "FOUR",
  Five = "FIVE",
  Six = "SIX",
  Seven = "SEVEN",
  Eight = "EIGHT",
  Nine = "NINE",
  Ten = "TEN",
  Jack = "JACK",
  Queen = "QUEEN",
  King = "KING",
  Ace = "ACE",
}

export interface Card {
  suit: Suit;
  rank: Rank;
}

export interface Deck {
  deck: Card[];
}
