/*
Question: Intersection of two sorted arrays
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/intersection-of-two-sorted-array-1587115620/1
Link: 🔗 LeetCode – https://leetcode.com/problems/intersection-of-two-arrays/description/

Approach: 
1] Brute Force => Nested loops => Time Complexity = O(n*m) / Space Complexity = O(n)
2] Optimal Approach => Two pointer => Checks for one element of pair => Checks for another element of the pair => Time Complexity = O(n+m) / Space Complexity = O(1)

Explanation(Brute force approach):
-First loop for checking one element of the pair
-Second loop for checking another element of the pair
-If both the indexes(elements) are same -pair found
-Push the element in intersect array
-Mark the index as checked(as we are not supposed to consider the element from pair twice)
-Break the loop and start another iteration
-If the element of inner loop is greater; then break the loop and increase the outer loop by 1(since our array is sorted)
-Return intersected array

Explanation(Optimal approach):
-Keep 1 pointer for checking one element of the array
-2nd pointer for checking another element of the array
-If any element is smaller then the other;increase the pointer of that element
-If both the elements are same -pair found
-Push one element in intersect array (resultant array)
-And increase both the pointers by one
-Return the increment array (which have the elements who have corresponding elements[pairs])

Test Cases:
1] If array is empty
2] If only one element present in the array
2] If all elements are same
*/

/* Brute force solution */
let arr1 = [1, 2, 2, 4];
let arr2 = [1, 2, 3, 4, 5];

function intersect(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;

  if(m === 0 || n === 0) {return 'No pairs found'};   // Handling test case-1

  let isChecked = new Array(n).fill(false);
  let intersectArr = [];

  for(let i= 0; i < arr1.length; i++) {    // This logic itself handles test cases-2 and 3
    for(let j= 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j] && isChecked[j] === false) {
        intersectArr.push(arr1[i]);
        isChecked[j] = true;
        break;
      } else if(arr2[j] > arr1[i]) {
        arr1[i]++;
      break;
      }
    } 
  }
  return intersectArr;
}

/* Optimal approach solution */
let a1 = [1, 2, 2, 4];
let a2 = [1, 2, 3, 4, 5];

function intersect(a1, a2) {
  let m = a1.length;
  let n = a2.length;

  if(m === 0 || n === 0) {return 'No pairs found'};   // Handling test case-1

  let i = 0;
  let j = 0;
  let intersectArr = [];

  while(i < m && j < n) {   // This logic itself handles test cases-2 and 3
    if(a1[i] > a2[j]) {
      j++
    } else if(a1[i] < a2[j]) {
      i++;
    } else if(a1[i] === a2[j]) {
      intersectArr.push(a1[i]);
      i++;
      j++;
    }
  }
  return intersectArr;
}