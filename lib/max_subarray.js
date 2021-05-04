
// Time Complexity: O(n). The for loop iterates through each element
// in the nums array one time.
// Space Complexity: O(1). Regardless of the length of the nums array,
// maxSubArray() only ever creates two variables to store integers.

function maxSubArray(nums) {
  if (nums.length === 0) return null;

  let max_so_far = 0;
  let max_ending_here = 0;

  for (const num of nums) {
    max_ending_here += num;
    if (max_ending_here > max_so_far || max_so_far === 0) max_so_far = max_ending_here;
    if (max_ending_here < 0) max_ending_here = 0;
  }
  
  return max_so_far;
}

module.exports = {
  maxSubArray
}