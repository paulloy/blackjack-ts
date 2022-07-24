/*
 * min = inclusive
 * max = exclusive
 */
const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * max + min);
};

/*
 * Fisher-Yates shuffle alogrithm - Pencil-and-paper method
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Pencil-and-paper_method
 */
const shuffle = <T>(arr: Array<T>): Array<T> => {
  const arrCopy: T[] = arr.slice();
  const newArr: T[] = [];
  let index: number = arr.length;

  while (index !== 0) {
    const randomIndex: number = getRandomNumber(1, index) - 1;

    newArr.push(arr[randomIndex]);
    arrCopy.splice(randomIndex, 1);

    index--;
  }

  return newArr;
};

export default shuffle;
