/*
Question: Check if array is sorted or not
Link: 🔗 GeeksforGeeks – https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1

Approach: 
1] Brute Force => Iterate through the array => Compare each element to it's next element => Time Complexity = O(n) / Space Complexity = O(1)

Explanation:
-Iterate through the entire array once
-Compare each element to it's next element
-If current element is greater than it's next element(elements are not sorted in order)
-We will return false
-Else if no such case is found(all elements are in proper order)
-Return true

Test Cases:
1] If array is empty
2] If only one element present in the array
*/

let arr = [2, 2, 4, 5, 6];

function checkSorted(arr) {
  if(arr.length <= 1) {    // Handling test cases
    return true;
  }

  for(let i= 0; i < arr.length-1; i++) {
    if(arr[i] > arr[i+1]) {
      return false;
    }
  }
  return true;   // If above condition is not true
}