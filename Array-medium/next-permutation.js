/*
Question: Next permutation.
Link: 🔗 LeetCode – https://leetcode.com/problems/next-permutation/description/
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/next-permutation5226/1

Approach: 
1] Brute Force => Recursion => Time Complexity = O(n! * n) / Space Complexity = O(1)
2] Optimal Approach => Pattern searching => Time Complexity = O(3n) / Space Complexity = O(1)

Explanation(Brute force approach):
-We can solve the brute force using recursion,but it will take a lot of time if the array size is large
-First, we will sort the array with all the possible permutations using recursion. 
-Then, we will search(linear) through the sorted arrays and find the permutation which is given to us. 
-Finally, we will return the next permutation which is found. 


Explanation(Optimal approach):
-We will start a loop from backwards. 
-If any element which is smaller than the previous element is found, then we will modify our idx variable with current i(index) and break the loop. [Here, our breakpoint will be found]
-Then we will use a helper function to reverse the array of particular length 
-Handle a test case if there is no next permutation found, then we will reverse and return the array.
-We will again run a loop from backward till our idx variable
-If our current element at i(index) is larger than the element present at the idx variable, then we will swap both the elements and break the loop. 
-Finally, we will reverse the array from idx+1(break point) and return it. 

Test Cases:
1] When no next permutation can be found
*/

/* Optimal approach solution */
let arr = [2, 4, 1, 7, 5, 0];

function nextPer(arr) {
  let idx = -1;
  let n = arr.length;

  for(let i= n-2; i >= 0; i--) {
    if(arr[i] < arr[i+1]) {
      idx = i;
      break;
    }
  }

  function reverse(arr, start, end) {    // Helper function to reverse the array
    while(start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  if(idx === -1) {        // Handling test case-1
    reverse(arr, 0, n-1)
    return arr;
  }

  for(let j= n-1; j > idx; j--) {
    if(arr[j] > arr[idx]) {
      [arr[idx], arr[j]] = [arr[j], arr[idx]];        // Swapping elements
      break;
    }
  }

  reverse(arr, idx+1, n-1)
  return arr;
}