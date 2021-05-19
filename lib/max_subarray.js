
// Time Complexity: O(n)
// Space Complexity: O(1)

function maxSubArray(nums) {
  let maxSoFar = Number.NEGATIVE_INFINITY;
  let maxEndingHere = 0;

  if (nums.length === 0) { return null; }

  for (i in nums) {
    maxEndingHere = maxEndingHere + nums[i];

    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    } else if (maxEndingHere < 0) {
      maxEndingHere = 0;
    };
  };
  return maxSoFar;
}

module.exports = {
  maxSubArray
}