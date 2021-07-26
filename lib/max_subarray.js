
// Time Complexity:
// Space Complexity:

function maxSubArray(nums) {

  if (!nums.length) return null 

 let maxSoFar = -Infinity;
 let maxEndingHere = 0;

 for (num in nums){
   maxEndingHere = maxEndingHere + nums[num]
  //  console.log(maxEndingHere)

   if (maxSoFar < maxEndingHere) {
     maxSoFar = maxEndingHere;
   } else if (maxEndingHere < 0){
     maxEndingHere = 0
   }
 }
 return maxSoFar
}

module.exports = {
  maxSubArray
}