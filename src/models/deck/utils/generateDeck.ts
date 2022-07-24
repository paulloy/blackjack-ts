import { Card, Rank, Suit } from "../deck.interface";

const generateDeck = (): Card[] => {
  const suits = Object.values(Suit);
  const ranks = Object.values(Rank);

  const deck: Card[] = ranks
    .map((rank: Rank) =>
      suits.map((suit: Suit) => {
        return {
          suit: suit,
          rank: rank,
        };
      })
    )
    .flat();

  return deck;
};

export default generateDeck;
