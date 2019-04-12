function newArray(array){
  return array
    .filter(num => num > 5)
    .map(num => `Wow, ${num} is big!`);
}

module.exports = newArray;
