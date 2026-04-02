/*
Question: Find the second largest element of the array
Link: 🔗 GeeksforGeeks – https://www.geeksforgeeks.org/problems/second-largest3735/1

Approach: 
1] Brute Force => Sorting => Fails if duplicate elements present => Time Complexity = O(nlogn) / Space Complexity = depends 
2] Better Approach => Transverse once(1st time) through the array and keep the track of the last largest element found => Transverse again(2nd time) through the array and keep the track of the last second largest element found => Time Complexity = O(2n) / Space Complexity = O(1)
3] Optimized Approach [Reducing Time Complexity]=> Transverse once through the array => Compare and check for largest and second largest element simultaneously => Time Complexity = O(n) / Space Complexity = O(1)


Explanation(Better Approach):      
- Check if the array has 0 or 1 element. In that case, finding a second largest element is not possible, so we return early.

-Initialize two variables:
largest = -Infinity → to store the maximum element
secondLargest = -Infinity → to store the second maximum element

-First traversal:
Loop through the array to find the largest element.
Ignore non-number values using typeof check.
If the current element is greater than largest, update largest.

-Second traversal:
Loop again through the array to find the second largest element.
Again, skip non-number values.

-Check two conditions:
# Element should be greater than secondLargest
# Element should be smaller than largest
If both conditions are true, update secondLargest.
Finally, return the secondLargest value.


Explanation(Optimized Approach):      
-First, handle edge cases: if the array has 0 or 1 element, we return early since second largest cannot be found.

-Initialize two variables:
largest = -Infinity
secondLargest = -Infinity

Single traversal (main logic):
-Loop through the array only once.
-Ignore non-number values using typeof check.

-For each element check:
# If element is greater than largest:
Update secondLargest = largest
Update largest = current element

-Else if element is smaller than largest but greater than secondLargest:
Update secondLargest = current element
This way, we maintain both largest and second largest in a single pass.

After the loop:
If secondLargest is still -Infinity, it means no valid second largest exists (e.g, all elements are same).
Otherwise, return secondLargest.

Test Cases:
1] If array is empty
2] If only one element present in the array
3] If all the elements are same
4] If there are different data types present like-strings or booleans
*/

/* Code for Better Approach */
let arr1 = [3,7,9,2,-3];

function findSecondLargest(arr1) {
  if(arr1.length <= 1) {     // Handling test cases-1 and 2
    return arr1;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

// First transverse to find the largest element
  for(let i= 0; i < arr1.length; i++) {  
    if(typeof(arr1[i]) !== 'number') {    //Handling text case-4
      continue;        
    } else if(arr1[i] > largest) {
      largest = arr1[i];
    }
  }

// Second transverse to find the second largest element
  for(let j= 0; j < arr1.length; j++) {
    if(typeof(arr1[j]) !== 'number') {  //Handling text case-4
      continue;    
    } else if(arr1[j] > secondLargest && arr1[j] < largest) {
      secondLargest = arr1[j];
    }
  }
  return secondLargest;
}

/* Code for Optimized approach */

let arr2 = [3,7,9,2,-3];

function findSecondLargest(arr2) {
  if(arr2.length <= 1) {     // Handling test cases-1 and 2
    return arr2;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for(let i= 0; i < arr2.length; i++) {  
    if(typeof(arr2[i]) !== 'number') {    //Handling text case-4
      continue;        
    } else if(arr2[i] > largest) {    
      secondLargest = largest
      largest = arr2[i];
    } else if(arr2[i] > secondLargest && arr2[i] < largest) {
      secondLargest = arr2[i];
    }
  }
  if(secondLargest === -Infinity) {    //Handling test case-3
    return 'Second largest element not found'
  } else{
    return secondLargest;
  }
}