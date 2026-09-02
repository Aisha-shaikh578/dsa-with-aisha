/*
-- Quick Sort Algorithm --
Link: 🔗 GeeksforGeeks – https://www.geeksforgeeks.org/problems/quick-sort/1
Link: 🔗 LeetCode – https://leetcode.com/problems/sort-an-array/description/

=> Time Complexity: 
1] Worst case: O(n2)
2] Average case: O(nlogn)
3] Best case: O(nlogn)

=> Space Complexity:
# Average/Best case: O(logn)
# Worst case: O(n)

Explanation [Haore's Partition Method]:
-We can choose pivot as the first element, last element, or a random element. The choice of pivot can affect the performance of the algorithm, especially in cases where the input array is already sorted or nearly sorted.
-In this method, we select the first element as the pivot and then use two pointers to partition the array into two halves. 
-The left pointer moves from the start of the array towards the right, and the right pointer moves from the end of the array towards the left.
-When both pointers find elements that are on the wrong side of the pivot, they are swapped. 
-This process continues until the pointers cross each other, at which point we recursively sort the two halves of the array.


Explanation [Lamuto's Partition Method]:
-We can choose pivot as the first element, last element, or a random element. The choice of pivot can affect the performance of the algorithm, especially in cases where the input array is already sorted or nearly sorted.
-In this method, we select the last element as the pivot and then use a single pointer to partition the array into two halves.
-The pointer keeps track of the position where the next smaller element than the pivot should be placed.
-When we find an element smaller than the pivot, we swap it with the element at the pointer's position and move the pointer forward.
-If the element is greater than or equal to the pivot, we simply move to the next element.
*/


/* Haore's Partition Method */
let arr = [3, 2, 4, 5, 1];

function sort(arr, low, high) {
  if(low >= high) return arr;

  let i = low;
  let j = high; 
  let pivot = arr[low];

  while(low < high && i <= j) {
    while(i <= high && arr[i] < pivot) {
      i++;
    }

    while(j >= low && arr[j] > pivot) {
      j--;
    }


  if(i <= j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
   }
  }
  sort(arr, low, j);
  sort(arr, i, high);
   
  return arr;
}



/* Lamuto's Partition Method */
let arr = [3, 2, 4, 5, 1];

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[high]] = [arr[high], arr[i]];
  return i;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let partitionIdx = partition(arr, low, high);

    quickSort(arr, low, partitionIdx - 1);
    quickSort(arr, partitionIdx + 1, high);
  }
  return arr;
}

console.log(quickSort(arr, 0, arr.length-1));