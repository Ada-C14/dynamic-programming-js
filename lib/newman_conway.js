// Newman-Conway sequence: P(n) = P( P(n - 1)) + P(n - P(n - 1)), with intial conditions P(1)=1 and P(2)=1
// Time Complexity: O(n) - there is a for loop in newmanConway that will run n number of times. The function p that it calls on has a time complexity of O(1) because it directly looks up the values in the array it's adding to.
// Space Complexity: O(n) - both the newmanConway and p functions add n elements to their data structures.

newmanConway = (num) => {
  let result = "1 1 "

  if (num < 1) {
    throw Error("Number must be greater than or equal to 1");
  } else if (num === 1) {
    return result[0];

  } else if (num === 2) {
    return result.trim();
  }

  for (let n = 3; n <= num; n++) {
    result += `${p(n)} `;
  }
  return result.trim();
}

const pValues = [0, 1, 1]

p = (n) => {
  if (pValues[n]) {
    return pValues[n];
  }

  const pOfN = p(p(n - 1)) + p(n - p(n - 1));
  pValues.push(pOfN);
  return pOfN;
}



module.exports = {
  newmanConway
};