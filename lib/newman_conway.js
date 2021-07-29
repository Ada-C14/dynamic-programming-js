
// Time Complexity: O(n) where n = num
// Space Complexity: O(n) - technically my in 2n because of the .slice

// P(1) = 1
// P(2) = 1
// for all n > 2
// P(n) = P(P(n - 1)) + P(n - P(n - 1))

function newmanConway(num) {
  if (num < 1) throw new Error;

  let solutions = [0, 1];
  
  if (num > 1) {
    solutions.push(1);

    for (let i = 3; i <= num; i++) {
      solutions.push(
        solutions[solutions[i -1]] + solutions[i - solutions[i -1]])
    }
  }

  return solutions.slice(1).join(" ");
}

module.exports = {
  newmanConway
};