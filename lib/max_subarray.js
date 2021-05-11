
// Time Complexity: O(n) - we iterate n times through nums, which is an array of length n
// Space Complexity: O(1) - we have constant space complexity, with variables max_result and temp_max

function maxSubArray(nums) {
  if (nums.length < 1) {
    return null;
    }

  let max_result = -Infinity, 
  temp_max = 0;
  
  for (let i = 0; i < nums.length; i++) {
    temp_max += nums[i]
    
    if (max_result < temp_max) {
      max_result = temp_max;
    }

    if (temp_max < 0) {
      temp_max = 0;
    }
  }

  return max_result;
}

module.exports = {
  maxSubArray
}