const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('shuffle should return an array', () => {
    let array = [1,2,3]
    expect(Array.isArray(shuffle(array))).toBe(true);
  }) 
  
  test('check that the items have been shuffled around', () => {
    let array = [1,2,3,4,5,6,7]
    let shuffledArray = shuffle(array)
    expect(shuffledArray).not.toEqual(array)
  })
});
