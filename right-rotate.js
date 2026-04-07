/*
Question: Right rotate elements by 1.
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1

Approach: 
1] Brute Force => Extra space => Time Complexity = O(n) / Space Complexity = O(n)
2] Better Approach => Transverse once through the array => Replace values while transversing => Time Complexity = O(n) / Space Complexity = O(1)

Explanation(Brute force approach):
-Store the last element as temp(since it will be lost while iterating)
-Create new array(extra space)
-Push the temp element on the 0th index of newArray(extra space)
-Start looping in original from 0th index till the second last index
-Push the element on index of original array in newArray(extra space)

Explanation(Better approach):
-Store the last element as temp(since it will be lost while iterating)
-Transverse through the array from BACKWARDS
-Replace the current element on i from element on [i-1]
-We won't be using any extra space here      // Hence space complexity will be reduced
-Push temp elememt on 0th index of arr
-Return the modified array itself


Test Cases:
1] If array is empty
2] If only one element present in the array
2] If all elements are same
*/


/* Brute force solution */
let arr1 = [1, 2, 3, 4, 5];

function rightRotate(arr1) {
  if(arr1.length <= 1) {    // Handling test-cases-1 and 2
    return arr1;
  }

  let temp = arr1[arr1.length-1];
  let newArray = [];

  newArray.push(temp);
  for(let i= 0; i < arr1.length-1; i++){
    newArray.push(arr1[i]);    // This logic itself handles test case-3
  }
  return newArray;
}


/* Better approach solution */
let arr2 = [1, 2, 3, 4, 5];

function rightRotate(arr2) {
  if(arr2.length <= 1) {    // Handling test cases-1 and 2
    return arr2;
  }

  let temp = arr2[arr2.length-1];
  
  for(let i= arr2.length-1; i > 0; i--){  
    arr2[i] = arr2[i - 1];   // This logic itself handles test case-3
  }
  arr2[0] = temp;
  return arr2;
}