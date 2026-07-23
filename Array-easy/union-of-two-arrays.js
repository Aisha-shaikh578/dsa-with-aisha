/*
Question: Union of two sorted arrays
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1

Approach: 
1] Brute Force => Set => Slow Performance(hashing + inserting) => Time Complexity = O(n+m) / Space Complexity = O(n+m)
2] Better Approach => Two pointer => Fast Performance(single comparisions) => 1st pointer for scanning array1 => 2nd pointer for array2 => Time Complexity = O(n+m) / Space Complexity = O(n+m)

Explanation(Brute force approach):
-Put elements of array in Set(set only stores unique elements and ignore duplicate elements)
-Push the values(elements) from set to union
-Return union array

Explanation(Better approach):
-Keep 1 pointer for iterating through array1
-2nd pointer for iterating through array2
-If any element is smaller then the other; also our last value of unique array is not that element
-Push the smaller element in union array(as we want to return sorted array)
-Else only increment pointer
-At last if any one array is completely transversed; but the other is still left for transversing
-Then push the elements of that array in unique array(if those elements are not present in union array)
# Remember our pointer movement should not depend on duplicate check

Test Cases:
1] If array is empty
2] If only one element present in the array
2] If all elements are same
*/

/* Brute force solution */
let a1 = [1, 2, 2, 4];
let a2 = [1, 2, 3, 4, 5];

function findUnion(a1, a2) {
  let mySet = new Set([...a1, ...a2]);

  for(let value of mySet) {
    union.push(value);
  }
  return union;
}


/* Better approach solution */
let arr1 = [1, 2, 2, 4];
let arr2 = [1, 2, 3, 4, 5];

function findUnion(arr1, arr2) {
  let i= 0;
  let j= 0;
  let union = [];

  while(i < arr1.length && j < arr2.length) {
    let val1 = arr1[i];
    let val2 = arr2[j];

    if(val1 < val2) {
      if(union[union.length-1] !== val1){
        union.push(val1);
      }
      i++;
    }else if(val1 > val2) {
      if(union[union.length-1] !== val2) {
        union.push(val2);
      }
      j++;
    }else if(union[union.length-1] !== val1) {
      union.push(val1);
      i++;
      j++;
    }
  }

  while(i < arr1.length) {
    if(union[union.length-1] !== arr1[i]) {
      union.push(arr1[i]);
    }
    i++
  }

  while(j < arr2.length) {
    if(union[union.length-1] !== arr2[j]) {
      union.push(arr2[j]);
    }
    j++;
  }
  return union;
}