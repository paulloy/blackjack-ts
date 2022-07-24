import shuffle from "../shuffle";

describe("shuffle function", () => {
  test("shuffled array is the same length as the original array", () => {
    const arr = Array.from({ length: 50 }, () =>
      Math.floor(Math.random() * 50)
    );

    const newArr = shuffle(arr);

    expect(newArr.length).toEqual(arr.length);
  });

  test("New array order does not match original array order", () => {
    const arr = Array.from({ length: 50 }, () =>
      Math.floor(Math.random() * 50)
    );

    const newArr = shuffle(arr);

    expect(new Set(arr)).not.toEqual(new Set(newArr));
  });
});
