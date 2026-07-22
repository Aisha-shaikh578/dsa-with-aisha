/*
Question: Find the missing element of the array
Link: 🔗 GeeksforGeeks – https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1
Link: 🔗 LeetCode – https://leetcode.com/problems/find-missing-elements/description/

Approach: 
1] Brute Force => Linear Search => Time Complexity = O(n * n) = O(n * 2) / Space Complexity = O(1)
2] Better Approach => Using Hash => Time Complexity = O(n) / Space Complexity = O(n)
3] Optimized Approach [There are two optimized approaches for this question] =>
  1] By subtracting the sum of elements present in the array from sum of n elements =>  Time Complexity = O(n) / Space Complexity = O(1)
  2] XOR => Time Complexity = O(n) / Space Complexity = O(1) 


Explanation(Brute Approach):      
- Traverse through the entire array. 
- Initialize start index as -∞ and then loop through the entire array and find that whichever element is greater than start index, then  replace the start with that index of array. 
- Then start another loop; if j is equal to index of array; then mark found as true
- At the end, If found is not true then return j index. 


Explanation(Better Approach Solution)
- Create a new hash array of size n + 1 ,and fill it with zero. 
- Count of total elements will be increase the hash array count of the index. 
- If any index of the hash array is zero at the end, then it is our missing index, so we will return it. 


Explanation(Optimized Approach):      
 1] We will be solving first optimized approach using a simple Math formula. 
   - Find the sum of all n natural numbers using the formula. 
   - Loop through the array and find the sum of all the elements present in the array. 
   - Return the Total sum of n - Sum of elements present 

 2] We will be solving the second optimized approach using XOR
  - Initially we start XOR from zero; because XOR of zero with any number returns the number itself. 
  - We will do XOR of n elements. 
  - Then we will do XOR of elements present in the array. 
  - Atlast we will do XOR of n elements with total elements present in the array
  - Then you will get the number which is missing because the XOR of the same number will get cancelled(0), so if there is a different number which is not cancelled(0), that is our missing number. 

Test Cases:
1] If array is empty
2] If only one element present in the array
3] If all the elements are same
*/

/* Code for Better Approach */
let arr = [1, 2, 4, 5];
let n = 5

function missingNo(arr,n) {
  if(arr.length === 0) {return arr};  // Handling test case-1

  let start = -Infinity

  for(let i= 0; i < n; i++) {     // This logic itself handles test cases-2 and 3
    if(arr[i] > start) {
      start = arr[i];
      break;
    }
  }
  for(let j= start; j <= n; j++) {
    let found = false;
    for(let k= 0; k < arr.length; k++) {
      if(j === arr[k]) {
        found = true;
      }
    }
    if(!found) {
      return j;
    }
  }
}


/* Better approach solution */
let a1 = [1, 2, 4, 5];
let n1 = 5;

function  missingNo(a1, n1) {
   if(a1.length === 0) {return a1};  // Handling test case-1

  let hashArr = new Array(n1+1).fill(0);

  for(let i= 0; i < a1.length; i++) {    // This logic itself handles test cases-2 and 3
    let elem = a1[i];
    hashArr[elem] = hashArr[elem] + 1;
  }

  for(let j= 1; j <= hashArr.length; j++) {
    if(hashArr[j] === 0) {
      return j;
    }
  }
}


/* Optimized solution-1 */
let array = [1, 2, 4, 5];
let x = 5;

function missingNo(array, x) {
  let totalSum = (x * (x+1)) / 2
  
  let elemSum = 0
  for(let i= 0; i < array.length; i++) {
    elemSum += array[i];
  }
  return totalSum - elemSum
}


/* Optimized solution-2 */
let array1 = [1, 2, 4 ,5];
let x1 = 5;

function missingNo(array1, x1) {
  let xorN = 0;
  let xorArr = 0;

  for(let i= 0; i <= x1; i++) {
   xorN ^= i;
  }

  for(let num of array1) {
    xorArr ^= num;
  }

  return xorN ^ xorArr
}