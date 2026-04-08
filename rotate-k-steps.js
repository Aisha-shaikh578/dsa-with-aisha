/*
Question: Rotate elements in place by K steps.
Link: 🔗 LeetCode – https://leetcode.com/problems/rotate-array/description/
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/rotate-array-clockwise/1

Approach: 
1] Brute Force => Extra Space => Time Complexity = O(n) / Space Complexity = O(n)
2] Better Approach => Reversing array => Time Complexity = O(n) / Space Complexity = O(1)

Explanation(Brute force approach):
-Handle edge-cases first to avoid unnessary steps
-Create an empty result array(this will be our extra space)
-Start looping in original array
-For every iteration; create new index (because we are supposed to rotate by k steps)
-For every iteration put the element of original array in the result array(extra space) on new index
-Put back the elements of result array to the original array
-Return original array (Since we are asked to do in place shifting)


Explanation(Better approach):
-Assume our K as x in better approach; because I cannot re-define block scoped variables
-Handle test cases in the starting; to avoid unnecessary steps(saves time)
-Creating a helper function which will help reversing arrays as our need
-Using while loop for replacing reversed values
-First reverse the entire array
-Then reverse the first k elements from start
-Finally reverse the remaining elements


Test Cases:
1] If array is empty
2] If only one element present in the array
3] If k(number of rotations) > array's length
*/

/* Brute force solution */
let arr1 = [1, 2, 3, 4, 5]
let k = 3;

function rotate(arr1, k) {
  let n = arr1.length;

   if(n <= 1) return arr1;     // Handling test cases-1 and 2

  let result = [];
  k = k % n;    // Handling test case-3  [To avoid unnecessary rotations]

  for(let i= 0; i < n; i++){
    let resultIdx = (i + k) % n;  // Creating new index in every iteration
    result[resultIdx] = arr1[i]
  }

  for(let j= 0; j < result.length; j++){    // Since we are asked to do in place rotations
    arr1[j] = result[j]; 
  } 
  return arr1;
}


/* Better approach solution */     
let arr2 = [1, 2, 3, 4, 5];
let x = 3;    // Assuming K as x here(since cannot re-define block scoped variables)

function rotate(arr2,x) {
  let n = arr2.length;
  if(n <= 1) {return arr2}  // Handling test cases-1 and 2
  x = x % n;        // Handling test case-3(to avoid unnecessary rotaions)

  function reverse(arr2, start, end) {   // Helper function for revesing (since we are using JavaScipt)
    while(start < end) {
      temp = arr2[start];
      arr2[start] = arr2[end];
      arr2[end] = temp;
      start++;
      end--;
    }
  }
  reverse(arr2, 0, n-1);  // Rotate the entire array
  reverse(arr2, 0, x-1)   //Rotate only the number of k elements from start
  reverse(arr2, x, n-1);  //Rotate the remaining elements

  return arr2;
}