// You are given a string time in the form of hh:mm, where some of the digits in the string are hidden (represented by ?).
// The valid times are those inclusively between 00:00 and 23:59.
// Return the latest valid time you can get from time by replacing the hidden digits.

// Example 1:
// Input: time = "2?:?0"
// Output: "23:50"
// Explanation: The latest hour beginning with the digit '2' is 23 and the latest minute ending with the digit '0' is 50.

// Example 2:
// Input: time = "0?:3?"
// Output: "09:39"

// Example 3:
// Input: time = "1?:22"
// Output: "19:22"

let maximumTimeFirst = function(time) {

  timeArray = time.split('');
  
  for(let i=0; i < timeArray.length; i++){
    if(timeArray[i] == '?') {
      switch (i) {
        case 0: 
          if(Number(timeArray[1]) < 4 || timeArray[1] == '?') {
          timeArray[i] = '2';
          } else {
            timeArray[i] = '1';
          }
          break;
        case 1:
          if (timeArray[0] == '2') {
            timeArray[i] = '3';
          } else {
            timeArray[i] = '9';
          }
          break;
        case 3:
          timeArray[i] = '5';
          break;
        case 4:
          timeArray[i] = '9';
          break;       
      }     
    }
  }
  return timeArray.join('');
};


let maximumTimeSecond = function(time) {
  let ans = time.split('');
  
  if(time[0] === '?' && ('0123?'.includes(time[1]))) {
    ans[0] = '2'
  } else {
    if(time[0] === '?' && !('0123?'.includes(time[1]))) ans[0] = '1';
  }

  if(time[1] === '?' && (ans[0] !== '2')) {
    ans[1] = '9';
  } else {
  if(time[1] === '?' && ans[0] === '2') ans[1] = '3';
  }

  if(time[3] === '?') ans[3] = '5';
  if(time[4] === '?') ans[4] = '9';
  
  return ans.join(''); 
};

