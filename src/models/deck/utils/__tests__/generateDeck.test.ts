import generateDeck from "../generateDeck";

describe("generateDeck", () => {
  test("deck is of length 52", () => {
    const deck = generateDeck();

    expect(deck.length).toBe(52);
  });
});
