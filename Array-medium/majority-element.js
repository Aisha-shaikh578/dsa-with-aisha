/*
Question: Find the majority element appearing more than n/2 times
Link: 🔗 LeetCode – https://leetcode.com/problems/majority-element/description/
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/majority-element-1587115620/1

Approach: 
1] Brute Force => Nested loops => Time Complexity = O(n2) / Space Complexity = O(1)
2] Better Approach => Hash map => Time Complexity = O(n) / Space Complexity = O(n)
3] Optimized Approach => Moore's Voting Algorithm  => Time Complexity = O(n) / Space Complexity = O(1)


Explanation(Brute force approach):
- We will use nested loops here:
   1. One loop for the number to count
   2. One loop for counting the frequency of that number
- We will keep a count variable to store the count/frequency of the number. 
- If the element on index 'i' is equal to the element on index of 'j, then the count will increment by one. 
- If count is greater than n/2, then we will return the element on index 'i'. 


Explanation(Better approach):
- First, we will handle the edge case of empty array to avoid unnecessary steps. 
- We will run a loop to find the maximum number present in array to create a new hash array. 
- If the element on index 'j' exists in the hash array; then we will increment its count by 1, else we will store its count as 1. 
- Finally, we will transverse through the hash array.
- If the element of hash array count is greater than n/2, then we will return that element. 
- And if no majority element is found, then we will return -1. 


Explanation(Optimized approach):
- # Remember: Moore's voting algorithm will only work on the array which have majority element. 
- Initially, we will assume a result and count variable as zero. 
- Will traverse through the entire array once.  
- If our count is equal to 0, then the result will be the element present on index 'i'. 
- If our result and the element on index 'i' is same then our count will increase by 1; else it will decrease by 1  
- At the end, we will return our result, which will be the majority element present. 

Test Cases:
1] If array is empty
2] If only one element is present in the array
3] If no majority element is present
*/


/* Brute Force Solution */
let arr = [2, 2, 1, 1, 1, 2, 2];

function findMajority(arr) {
  let n = arr.length; 

  for(let i= 0; i < arr.length; i++) {       // This approach itself handles test cases-1 and 2
    let count = 0;
    for(let j= 0; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        count++;
      }
    }
    if(count > n/2) {
      return arr[i];
    }
  }
  return -1;        // Handling test case-3
}


/* Better Approach Solution */
let array = [2, 2, 1, 1, 1, 2, 2];

function findMajority(array) {
  let  n = array.length;
  let maxNum = -Infinity;

  if(n === 0) return 'Empty array';     // Handling test case-1

  for(let i= 0; i < array.length; i++) {    // Finding the maximum number to create the hash array
    if(array[i] > maxNum) {
      maxNum = array[i];
    }
  }

  let hashArr = new Array(maxNum+1).fill(0);

  for(let j= 0; j < array.length; j++) {    // This approach itself handles test cases-1 and 2
    let elem = array[j];
    if(hashArr[elem]) {
      hashArr[elem]++;
    } else{
      hashArr[elem] = 1;
    }
  }

  for(let k= 0; k < hashArr.length; k++) {
    if(hashArr[k] > n/2) {
      return k;
    }
  }
  return -1;   // Handling test case-3
}


/* Optimized Approach Solution */
let array1 = [2, 2, 1, 1, 1, 2, 2];

/* Moore's algorithm will only work on the array which has majority element */
function findMajority(array1) {
  let res = 0;
  let count = 0;

  for(let i= 0; i < array1.length; i++) {
    if(count === 0) {
      res = array1[i];
    }

    if(res === array1[i]) {
      count++;
    } else{
      count--;
    }
  }
  return res;
}

console.log(findMajority(array1));