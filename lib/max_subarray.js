
// Time Complexity: O(n)
// Space Complexity: O(1) constant

function maxSubArray(nums) {
  let maxSoFar = Number.NEGATIVE_INFINITY;
  // or should I init maxSoFar as Math.max(nums) or something
  let maxEndingHere = 0;

  nums.forEach(num => { //O(n)
    maxEndingHere = maxEndingHere + num;

    if(maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
    }

    if(maxEndingHere < 0) {
      // reset maxEndingHere, so that it doesn't accumulate
      // negative nums,  any single negative num would be greater
      maxEndingHere = 0
    }
  })

  if (maxSoFar == Number.NEGATIVE_INFINITY) return null;
  return maxSoFar;
}

module.exports = {
  maxSubArray
}