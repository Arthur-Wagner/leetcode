/*
718. Maximum Length of Repeated Subarray

Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

Example 1:

Input:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
Output: 3
Explanation: 
The repeated subarray with maximum length is [3, 2, 1].
 

Note:

1 <= len(A), len(B) <= 1000
0 <= A[i], B[i] < 100
 
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) { 
  let maxval = 0;   
  for ( let i = 0 ; i < A.length; i++) {
    for( let j = 0; j < B.length; j++){
      if(A[i] === B[j]) { 
        maxval = Math.max(maxval, 1);   
        for (let k=1; k < Math.min(A.length-i, B.length-j); k++){
          if(A[i+k] != B[j+k]) {
            break;            
          }   
          maxval = Math.max(maxval, k+1); 
        }
      }
    }
  }
  return maxval;
};

var findLength = function(A, B) {
    var n=A.length, m=B.length;
    var dp = new Array(n+1).fill().map(() => new Array(m+1).fill(0));
    var res = 0;
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=m; j++) {
            if (A[i-1]===B[j-1]) dp[i][j] = dp[i-1][j-1]+1;
            res = Math.max(res, dp[i][j]);
        }
    }
    return res;
};
