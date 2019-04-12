const newArray = require('../lib/index');

describe('New array', () => {
  it('filters out numbers less than 5', () => {
    const oldArray = [1, 3, 5, 7, 2];
    const newArray = [5, 7];
    expect(oldArray).toEqual(newArray);
  });
});
