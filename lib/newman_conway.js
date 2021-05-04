
// Time Complexity: O(n). The number of times the for loop runs
// will increase linearly to an increase in size of num. All
// operations in the for loop are O(1) so there's no nesting to worry about.
// Space Complexity: O(n). newmanConway builds an array that will hold
// n items where n is equal to num.

function newmanConway(num) {
  if (num === 1) {
    return "1";
  } else if (num === 2) {
    return "1 1";
  } else if (num < 1) {
    throw new Error("value must be greater than zero")
  }
  
  const sequence = [1, 1];
  
  for (i = 3; i <= num; i++) {
    const lastValue = sequence[i - 2];
    const newValue = sequence[lastValue - 1] + sequence[i - lastValue - 1];
    sequence.push(newValue);
  }

  return sequence.join(' ');
}

module.exports = {
  newmanConway
};