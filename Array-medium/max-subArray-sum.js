/*
Question: Find the maximum sub-array sum
Link: 🔗 LeetCode – https://leetcode.com/problems/maximum-subarray/description/
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1

Approach: 
1] Brute Force => Nested loops [3 loops] => Time Complexity = O(n3) / Space Complexity = O(1)
2] Better Approach => Nested loops [2 loops] => Time Complexity = O(n2) / Space Complexity = O(1)
3] Optimized Approach => Kadane's Algorithm  => Time Complexity = O(n) / Space Complexity = O(1)


Explanation(Brute force approach):
- We will use 3 nested loops here:
   1. First loop will be responsible for the start of the sub-array. 
   2. Second inner loop will be responsible for the length of the sub-array. 
   3. And the third loop will be responsible for counting the total sum of the elements of sub-array.
- We will modify the maxSum variable if greater sum is found


Explanation(Better approach):
- We will use 2 nested loops here:
   1. First loop will be responsible for the start of the sub-array. 
   2. Second inner loop will be responsible for the length of the sub-array. 
- Here we will simultaneously count the total sum of the elements of sub-array. 
- Modify the maxSum variable if greater sum is found. 


Explanation(Optimized approach):
- We will use Kadane's algorithm for this appraoch. 
- We will increase the sum count on every iteration. 
- But whenever our sum becomes negative, then we will replace our sum with zero; As there is no need of taking negative numbers forward. 
- Modify the maxSum variable if greater sum is found. 


Test Cases:
1] If array is empty
2] If only one element is present in the array
*/


/* Brute Force Solution */
let arr = [-2, -3, 4, -1, -2, 1, 5, -3];

function maxSubArr(arr) {
  if(arr.length < 1) {return arr}     // Handling test case-1

  let maxSum = -Infinity;

  for(let i= 0; i < arr.length; i++) {    // This approach will itself handle test case-2
    for(let j= i; j< arr.length; j++) {
      let sum = 0;
      for(let k= i; k <= j; k++) {
        sum += arr[k];
      }
      maxSum = Math.max(sum, maxSum);
    }
  }
  return maxSum;
}


/* Better Approach Solution */
let arr = [-2, -3, 4, -1, -2, 1, 5, -3];

function maxSubArr(arr) {
  if(arr.length < 1) {return arr}    // Handling test case-1

  let maxSum = -Infinity;

  for(let i= 0; i < arr.length; i++) {    // This approach will itself handle test case-2
    let sum = 0;
    for(let j= i; j < arr.length; j++) {
      sum += arr[j];
      maxSum = Math.max(sum, maxSum);    // We will update the maxSum within 'j' loop to get the accurate output
    }
  }
  return maxSum;
}


/* Optimal Approach Solution */
let arr = [-2, -3, 4, -1, -2, 1, 5, -3];

function maxSubArr(arr) {
  if(arr.length < 1) {return arr}

  let sum = 0;
  let maxSum = -Infinity;
 
  for(let i= 0; i < arr.length; i++) {
    sum += arr[i];

    if(sum < 0) {
      sum = 0;
    }
    
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
}