// Squares of a Sorted Array

/*

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  nums = nums.map(x => x**2);
  l = nums.length;
  
  for (let i=0 ; i < l-1; i ++){
      for( let j=0; j< l-i-1; j++){
          if(nums[j]>nums[j+1]){

            [nums[j+1], nums[j]] = [nums[j], nums[j+1]];
          }
      }
  }
  return nums;
};

