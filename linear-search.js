/*
Question: Linear search
Link: 🔗 GeeksforGeeks – https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1

Approach: 
1] Brute Force => Iterate through the array => Check if element is equal to the target => Time Complexity = O(n) / Space Complexity = O(1)

Explanation:
-Iterate through the entire array once
-Check if element is equal to the target
-If condition is true; return index
-Else-if condition is false; return -1
*/

let arr = [2, 4, 5, 6, 1];
let target = 5

function linearSearch(arr,target) {
  for(let i= 0; i < arr.length; i++) {
    if(arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(arr,target))