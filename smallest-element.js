/*
Question: Find the smallest element of the array
Link: 🔗 GeeksforGeeks – https://www.geeksforgeeks.org/problems/min-element-in-array/1

Approach: 
1] Brute Force => Sorting => Time Complexity = O(nlogn) / Space Complexity = depends 
2] Better Approach => Keepng the track of last smallest found => Time Complexity = O(n) / Space Complexity = O(1)

Explanation:
-First we will assume the smallest as Infinity(largest number possible)
-Then start looping through the array
-If any element which is smaller then current smallest is found
-We will replace our smallest with that particular element

Test Cases:
1] If array is empty
2] If only one element present in the array
*/

let arr = [2, -1, 3, 0];

function smallestElement(arr) {
  if(arr.length <= 1) {    // Handling Test Cases
    return arr;
  }

  let smallest = Infinity;

  for(let i= 0; i < arr.length; i++) {
    if(arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(smallestElement(arr));