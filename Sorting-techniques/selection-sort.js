/*
-- Selection Sort Algorithm --
Link: 🔗 GeeksforGeeks – https://www.geeksforgeeks.org/problems/selection-sort/1
Link: 🔗 LeetCode – https://leetcode.com/problems/sort-an-array/description/

=> Time Complexity: 
1] Worst case: O(n2)
2] Average case: O(n2)
3] Best case: O(n2)

=> Space Complexity: O(1)

Explanation:
- The selection sort algorithm sorts an array by repeatedly finding the minimum element from the unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array:
1] The subarray which is already sorted.
2] Remaining subarray which is unsorted.
-
*/


let arr = [6, 9, 3, 10, 2]

function sort(arr) {
  let n = arr.length;

  if(n <= 1) return n;

  for(let i= 0; i < n; i++) {
    let mini = i;
    for(let j= i+1; j < n; j++) {
      if(arr[j] < arr[mini]) {
        [arr[j], arr[mini]] = [arr[mini], arr[j]];
      }
    }
  }
  return arr;
}