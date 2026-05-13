/*
Question: Sort an array of 0's, 1's and 2's
Link: 🔗 LeetCode – https://leetcode.com/problems/sort-colors/description/
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1

Approach: 
1] Brute Force => Merge Sort => Time Complexity = O(nlogn) / Space Complexity = O(n)
2] Better Approach => Linear Search => Time Complexity = O(2n) / Space Complexity = O(1)
3] Optimized Approach => 3 pointer [Dutch National Flag Algorithm] => Time Complexity = O(n) / Space Complexity = O(1)

Explanation(Brute force approach):
- We will sort the array using merge sort and return the sorted array.
- We can also use any other sorting algorithm, but merge sort is the most efficient one for this problem.


Explanation(Better approach):
- We will count the number of 0's, 1's and 2's in the array and then we will fill the array with the counted values.
- We will first fill the array with 0's, then with 1's and finally with 2's.
- This approach is better than the brute force approach because it has a linear time complexity and constant space complexity.


Explanation(Optimized approach):
- We will solve this question in optimal approach using the Dutch National Flag Algorithm [3 pointers]
- The algorithm is focused on FOUR main rules: 
  1] All the elements from 0 to low-1 should be 0. 
  2] All the elements from low pointer to mid - 1 should be 1. 
  3] All the elements from mid pointer to high pointer will have unsorted elements of 0, 1 and 2. 
  4] And all the elements from high + 1 till n - 1 [last element] will be 2. 
- Initially, we will assume our pointer of mid to be 0, low to be 0, and high to be n - 1. 
- We will run a while loop till our mid pointer is smaller or equal to the high pointer. 
- If the array[mid] is equal to 0, then we will swap the elements on low and mid pointers and increase mid and low pointesr by 1.
- If the array[mid] is equal to 1, then we will only increase the mid pointer by 1.  
- Else, if our mid pointer is equal to 2 (which is the only condition left), then we will swap the elements of high pointer and mid pointer and increase mid pointer by 1 and decrease high pointer by 1. 
*/


/* Better Approach Solution */
function sort(arr) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for(let i= 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      count0++;
    } else if(arr[i] === 1) {
      count1++;
    } else{
      count2++;
    }
  }

  for(let i= 0; i <= count0; i++) {
    arr[i] = 0;
  }

  for(let j= count0; j <= count0 + count1; j++) {
    arr[j] = 1;
  }

  for(let k= count0 + count1; k < arr.length; k++) {
    arr[k] = 2;
  }
  return arr;
}


/* Optimal solution */
let array = [2, 0, 2, 1, 1, 0];

function sort(array) {
  let n = array.length;
  let low = 0;
  let mid = 0;
  let high = n-1;

  while(mid <= high) {
    if(array[mid] === 0) {
      [array[mid], array[low]] = [array[low], array[mid]];
      low++;
      mid++;
    } else if(array[mid] === 1) {
      mid++;
    } else{
      [array[mid], array[high]] = [array[high], array[mid]];
      high--;
      mid++;
    }
  }
  return array;
}