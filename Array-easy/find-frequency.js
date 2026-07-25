/*
Question: Find the frequency of number
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/find-the-frequency/1

Approach: 
1] Brute Force => Transverse through the arrray => Check if element is equal to the target => Time Complexity = O(n) / Space Complexity = O(1)
2] Better Approach => Hash map => Time Complexity = O(n) / Space Complexity = O(maxNum)

Explanation(Brute force approach):
-Transverse through the entire array once
-Assume the initial count as 0
-If element is equal to target
-Increase count by 1
-Return total count

Explanation(Better approach):
-Find max number
-Declare the size of hash array as max number + 1 (since array index starts from 0)
-Store the total number of elements in the hash array
-Return the total count of target element from hash array

Test Cases:
1] If array is empty
2] If only one element present in the array
2] If all elements are same
*/

/* Brute force approach */
let arr = [1, 2, 1, 1, 3 ,4];
let num = 10;

function findFrequency(arr, num) {
  if(arr.length === 0) { return arr }   // Handling test case-1

  let count = 0;

  for(let i= 0; i < arr.length; i++) {    // This logic itself handles test cases-2 and 3
    if(arr[i] === num) {
      count++
    }
  }
  return count;
}


/* Better appraoch solution */
let array = [1, 2, 1, 1, 3 ,4];
let target = 1;

function count(array, target) {
  let maxNum = -Infinity;   // Finding the max num for later declaring the length of hash array
  for(let i= 0; i < array.length; i++) {
    if(array[i] > maxNum) {
      maxNum = array[i];
    }
  }

  let hashArr = new Array(maxNum+1).fill(0);   // Declaring the hash array
  for(let j= 0; j < array.length; j++) {
    let num = array[j];
    hashArr[num] = hashArr[num] + 1;
  }
  return hashArr[target];    // Return the total count of target
}