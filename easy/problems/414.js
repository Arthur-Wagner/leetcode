// 414. Third Maximum Number

// https://leetcode.com/problems/third-maximum-number/

/* 
Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

 

Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation: The third maximum is 1.
Example 2:

Input: nums = [1,2]
Output: 2
Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
  
  if (new Set(nums).size < 3){
    return Math.max(...nums);
  }
  
  let maxes = new Array(3).fill(-(2**31));
  
  for (let i = 0; i < nums.length; i++){

    if(maxes.includes(nums[i])) continue;

    if(nums[i]>maxes[0]){
      
      maxes[2] = maxes[1];           
      maxes[1] = maxes[0];      
      maxes[0] = nums[i];
      continue;
    } else if (nums[i]> maxes[1]) {
      maxes[2] = maxes[1];           
      maxes[1] = nums[i];
      continue;      
    } else if(nums[i] > maxes[2]){
      maxes[2] = nums[i];
    }
  }
  return maxes[2];
};
