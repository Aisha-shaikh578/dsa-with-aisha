/*
Question: Find Max Consecutive Ones 
Link: 🔗 LeetCode – https://leetcode.com/problems/max-consecutive-ones/description/

Approach: 
=> Linear search => Time Complexity = O(n) / Space Complexity = O(1)

Explanation(Brute force approach):
-First we will assume our consecutive count and maximum count of 1 to be 0.
-Traverse once through the array. 
-Check the condition that if our index of the array is equal to 1, then we will increase our count by one; otherwise, our count will fall back to zero(since it is not consecutive now)
-Then we will store our `maxCount` or `count` as our maximum. 
-And finally return our max count. 
*/


/* Solution */
let arr = [1, 1, 0, 0, 1, 1, 1, 0, 1, 1];

function consecutive(arr) {
  let maxCount = 0;
  let count = 0;

  for(let i= 0; i < arr.length; i++) {
    if(arr[i] === 1) {
      count++;
    } else {
      count = 0;
    }

    maxCount = Math.max(maxCount, count)
  }
  return maxCount;
}