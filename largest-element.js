/*
Question: Find the largest element of the array
Link: 🔗 GeeksforGeeks – https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1

Approach: 
1] Brute Force => Sorting => Time Complexity = O(nlogn) / Space Complexity = depends 
2] Better Approach => Keepng the track of last largest found => Time Complexity = O(n) / Space Complexity = O(1)

Explanation:
-First we will assume the largest as -Infinity(smallest number possible)
-Then start looping through the array
-If any element which is greater then current largest is found
-We will replace our largest with that particular element

Test Cases:
1] If array is empty
2] If only one element present in the array
*/

let arr = [2, -1, 3, 0];

function findLargest(arr) {
  if(arr.length <= 1) {    // Handling test cases
    return arr;
  }

  let largest = -Infinity;
  for(let i= 0; i < arr.length; i++) {
    if(arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}