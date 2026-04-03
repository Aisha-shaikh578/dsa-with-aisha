/*
Question: Find the second smallest element of the array
Link: 🔗 GeeksforGeeks – https://www.geeksforgeeks.org/problems/find-the-smallest-and-second-smallest-element-in-an-array3226/1

Approach: 
1] Brute Force => Sorting => Fails if duplicate elements present => Time Complexity = O(nlogn) / Space Complexity = depends 
2] Better Approach => Transverse once(1st time) through the array and keep the track of the last smallest element found => Transverse again(2nd time) through the array and keep the track of the last second smalllest element found => Time Complexity = O(2n) / Space Complexity = O(1)
3] Optimized Approach [Reducing Time Complexity]=> Transverse once through the array => Compare and check for smallest and second smallest element simultaneously => Time Complexity = O(n) / Space Complexity = O(1)


Explanation(Better Approach):      
- Check if the array has 0 elements(empty array). In that case, finding a second smallest element is not possible, so we return early.

-Initialize two variables:
smallest = Infinity → to store the smallest element
secondSmallest = Infinity → to store the second smallest element

-First traversal:
Loop through the array to find the smallest element.
Ignore non-number values using typeof check.
If the current element is smaller than smallest, update smallest.

-Second traversal:
Loop again through the array to find the second smallest element.
Again, skip non-number values.

-Check two conditions:
# Element should be greater than smallest
# Element should be smaller than secondSmallest
If both conditions are true, update secondSmallest.

-If no secondSmallest is found(value of secondSmallest never changed), return 'No second smallest present'
Finally, return the secondSmallest value.


Explanation(Optimized Approach):      
-First, handle edge cases: if the array has 0 element(empty array), we return early since second smallest cannot be found.

-Initialize two variables:
smallest = Infinity
secondSmallest = Infinity

Single traversal (main logic):
-Loop through the array only once.
-Ignore non-number values using typeof check.

-For each element check:
# If element is smaller than smallest:
Update secondSmallest = smallest
Update smallest = current element

-Else if element is greater than smallest but smaller than secondSmallest:
Update secondSmallest = current element
This way, we maintain both smallest and second smallest in a single pass.

After the loop:
If secondSmallest is still Infinity, it means no valid second smallest exists (e.g, all elements are same).
Otherwise, return secondSmallest.

Test Cases:
1] If array is empty
2] If only one element present in the array
3] If all the elements are same
4] If there are different data types present like-strings or booleans
*/

/* Code for Better Approach */
let arr1 = [-3, 2, 7, 2];

function findSecondSmallest(arr1) {
  if(arr1.length === 0) {   // Handling test case-1
    return arr1;
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

// First transverse to find the smallest element
  for(let i= 0; i < arr1.length; i++) {
    if(typeof(arr1[i]) !== 'number') {   //Handling text case-4
      continue;
    } else if(arr1[i] < smallest) {
      smallest = arr1[i];
    }
  }

// Second transverse to find the second smallest element
  for(let j= 0; j < arr1.length; j++) {
    if(typeof(arr1[j]) !== 'number') {   //Handling text case-4
      continue;
    } else if(arr1[j] > smallest && arr1[j] < secondSmallest) {
      secondSmallest = arr1[j];
    }
  }

if(secondSmallest === Infinity) {    //Handling text cases-2 and 3
  return 'No second smallest element present';
} else{
  return secondSmallest;
 }
}

/* Code for Optimized approach */

let arr2 = [3,7,9,2,-3];

function findSecondSmallest(arr2) {
  if(arr2.length === 0) {   // Handling test case-1
    return arr2;
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for(let i= 0; i < arr2.length; i++) {
    if(typeof(arr2[i]) !== 'number') {   //Handling text case-4
      continue;
    } else if(arr2[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr2[i];
    } else if(arr2[i] > smallest && arr2[i] < secondSmallest) {
      secondSmallest = arr2[i]
    }
  }
  if(secondSmallest === Infinity) {    //Handling test cases-2 and 3
    return 'Second smallest element not found';   // Your return value for (if no second smallest element present) can be anything
  } else{
    return secondSmallest;
  }
}