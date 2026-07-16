/*
-- Merge Sort Algorithm --
Link: 🔗 GeeksforGeeks – https://www.geeksforgeeks.org/problems/merge-sort/1
Link: 🔗 LeetCode – https://leetcode.com/problems/sort-an-array/description/

=> Time Complexity: 
1] Worst case: O(nlogn)
2] Average case: O(nlogn)
3] Best case: O(nlogn)

=> Space Complexity: O(n)

Explanation:
- First, we divide the array into two halves recursively until we reach the base case where the array has one or zero elements.
- Then, we merge the sorted halves back together by comparing elements from both halves and placing them in the correct order.
- The merge function takes two sorted arrays and merges them into a single sorted array by comparing the elements from both arrays and adding the smaller element to the result array.
- We use two pointers to keep track of the current index in each array and iterate through both arrays until we have added all elements to the result array.
*/


let arr = [6, 9, 3, 10, 2];

function mergeSort(arr) {
  if(arr.length <= 1) {return arr};   // Base case

  let middle = Math.floor((arr.length / 2));   // Find the middle index

  // Divide the array into two halves
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  // Recursively sort both halves
  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);

  // Merge the sorted halves
  return merge(leftSorted, rightSorted);
} 

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays
  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements from left array
  while(i < left.length) {
    result.push(left[i]);
    i++;
  }

  // Add remaining elements from the right array
  while(j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
}