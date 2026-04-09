/*
Question: Move zeros to the end of the array.
Link: 🔗 LeetCode – 

Approach: 
1] Brute Force => Extra space for storing unique elements => Time Complexity = O(2n) / Space Complexity = O(1)
2] Better Approach => Two pointer approach => 1st pointer on zero => 2nd pointer for scanning => Time Complexity = O(n) / Space Complexity = O(1)

Explanation(Brute force approach):
-Create an empty arrray; where we will be storing our unique elements
-Loop through the entire array to find unique elements
-If any element which is not zero is found, add and store that unique element in the unique array
-Start another loop from 0th index till index of unique elements length
-Add all the elements from unique array in the original array (now, we stored all the unique elements in the start)
-Start another loop starting from the index of unique array till the last index original array
-Fill all the left over indexes by 0 (left over indexes = total zeroes present)

Explanation(Better approach):
-Keep 1 pointer on zero
-2nd pointer for scanning unique elements
-If any unique element is found while scanning
-Swap the elements (all unique elements in the start and all zeroes at the end)

Test Cases:
1] If array is empty
2] If only one element is present in the array
2] If all elements are same  (either all zero or unique present)
*/

/* Brute force solution */
let arr1 = [1, 0, 2, 0, 4, 0];

function moveZero(arr1) {
  if(arr1.length <= 1) {return arr1};      // Handling test cases-1 and 2
   
  let uniqueEl = [];

  /* This logic will itself handle test case-3 */
  for(let i= 0; i < arr1.length; i++) {
    if(arr1[i] !== 0) {
      uniqueEl.push(arr1[i]);
    }
  }

  for(j= 0; j < uniqueEl.length; j++) {
    arr1[j] = uniqueEl[j];
  }

  for(let k= uniqueEl.length; k < arr1.length; k++) {
    arr1[k] = 0;
  }
  return arr1;
}

/* Better approach solution */
let arr2 = [1, 0, 2, 0, 4, 0];

function moveZero(arr2) {
  if(arr2.length <= 1) {return arr2}    // Handling test cases-1 and 2

  let j= -1;

  for(let i= 0; i < arr2.length; i++) {
    if(arr2[i] === 0) {
      j = i;    // now j is on the first zero element
      break;
    }
  }

  /* This logic will itself handle test case-3 */
  for(let k= j+1; k < arr2.length; k++) {
    if(arr2[k] !== 0) {
      temp = arr2[j];
      arr2[j] = arr2[k];
      arr2[k] = temp;
      j++;
    }
  }
  return arr2;
}

console.log(moveZero(arr2))