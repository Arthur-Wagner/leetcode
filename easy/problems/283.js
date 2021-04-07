// 283. Move Zeroes

// https://leetcode.com/problems/move-zeroes/

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  
  if(nums.length <2){
    return nums;
  }
  let writer = 0;  
  for(let reader = 0; reader< nums.length; reader++){
    if(nums[reader] != 0) {
      [nums[reader], nums[writer]] = [nums[writer], nums[reader]];      
      writer++;      
    }
  }   
  
};


