/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let seq = 0;
    let res = 0; 

    for(let i=0; i < nums.length; i++) {
      if(nums[i] != 1) {
        seq = 0;
        continue;
      }
      seq += nums[i];
      if (seq > res) res = seq;   
    }
    
    return res;
};


