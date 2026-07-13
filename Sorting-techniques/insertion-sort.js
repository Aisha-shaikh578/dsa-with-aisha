/*
-- Insertion Sort Algorithm --
Link: 🔗 GeeksforGeeks – https://www.geeksforgeeks.org/problems/insertion-sort/1
Link: 🔗 LeetCode – https://leetcode.com/problems/sort-an-array/description/

=> Time Complexity: 
1] Worst case: O(n2)
2] Average case: O(n2)
3] Best case: O(n)

=> Space Complexity: O(1)

Explanation:
- The insertion sort algorithm sorts an array by repeatedly taking an element from the unsorted portion and inserting it into the correct position in the sorted portion. It works similarly to how one might sort playing cards in their hands.
- The algorithm maintains a sorted portion of the array and iteratively expands it by inserting elements from the unsorted portion into their correct positions. It does this by comparing the current element with the elements in the sorted portion and shifting them as necessary to make space for the new element.
*/


let arr = [6, 9, 3, 10, 2]

function insertionSort(arr) {
  let n = arr.length;

  for(let i= 0; i < n; i++) {
    let j = i;
    while(j > 0 && arr[j-1] > arr[j]) {
      [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
      j--;
    }
  }
  return arr;
}
