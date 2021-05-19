
// Time Complexity: O(n)
// Space Complexity: O(n)?...not feeling confident about this because .slice() makes a copy

function newmanConway(num) {
  let result = [0, 1, 1];

  if (num === 0) { throw new Error('Value must be greater than 0'); };
  if (num === 1) { return '1'; };
  if (num === 2) { return '1 1'; };

  for (let i = 3; i <= num; i++) {
    result[i] = result[result[i - 1]] + result[i - result[i - 1]];
  };

  return result.slice(1).join(' ');
}

module.exports = {
  newmanConway
};