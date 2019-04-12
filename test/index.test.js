const newArray = require('../lib/index');

describe('New array', () => {
  it('filters out numbers less than 5', () => {
    const oldArray = newArray[1, 3, 5, 7, 2];
    const updatedArray = newArray[5, 7];
    expect(oldArray).toEqual(updatedArray);
  });

  it('maps the filtered array to a new array with different phrases', () => {
    const result = newArray[5, 7];
    const mappedArray = newArray['Wow, 5 is big', 'Wow, 7 is big'];
    expect(result).toEqual(mappedArray);
  });
});
