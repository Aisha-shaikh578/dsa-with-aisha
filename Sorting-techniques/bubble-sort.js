/*
-- Bubble Sort Algorithm --
Link: 🔗 GeeksforGeeks – https://www.geeksforgeeks.org/problems/bubble-sort/1
Link: 🔗 LeetCode – https://leetcode.com/problems/sort-an-array/description/

=> Time Complexity: 
1] Worst case: O(n2)
2] Average case: O(n2)
3] Best case: O(n)

=> Space Complexity: O(1)

Explanation:
- The bubble sort algorithm is a simple sorting algorithm that, compares adjacent elements and swaps them if they are in the wrong order. The pass through the array is repeated until the entire array is sorted.
*/


let arr = [6, 9, 3, 10, 2];

function bubbleSort(arr) {
  for(i= 0; i < arr.length-1; i++) {
    for(let j= 0; j < arr.length-1; j++) {
      if(arr[j] > arr[j+1]) {
      [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}