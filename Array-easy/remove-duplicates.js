/*
Question: Remove duplicate elements in place from sorted array.
Link: 🔗 LeetCode – https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

Approach: 
1] Brute Force => Set => Time Complexity = O(n) / Space Complexity = O(n)
2] Better Approach => Two pointer => 1st pointer for scanning => 2nd pointer for returning count as well as modifying(unique elemets in starting) => Time Complexity = O(n) / Space Complexity = O(1)

Explanation(Brute force approach):
-Put elements of array in Set(set only stores unique elements and ignore duplicate elements)
-Return the size of set(total number of unique elements found)

Explanation(Better approach):
-Keep 1 pointer k(for returning total count of unique elements and to modify array so that all unique elements are placed at the start)
-2nd pointer for scanning unique elements
-If any unique element is found while scanning, replace that element with element on k+1(to bring unique elements in start)
-Increment k by 1; so that we can add another unique element(if found) in proper order
-No extra space needed since we are doing in-place shifting of elements

Test Cases:
1] If array is empty
2] If only one element present in the array
2] If all elements are same
*/

/* Brute force solution */

let arr1 = [2, 3, 3, 4, 5, 5];

function removeDuplicates(arr1) {
  const unique = new Set(arr1);

  if(unique.size <= 0) {    // Handling test cases-1 and 2
    return arr1
  } else{
    return unique.size;   // Returns count of total unique elements present also handles our 3rd test-case
  }
}


/* Better approach solution */

let arr2 = [2, 3, 3, 4, 5, 5]

function removeDuplicates(arr2) {
  let k = 0;

  for(let i= 1; i < arr2.length; i++) { 
    if(arr2[i] !== arr2[k]) {
      arr2[k + 1] = arr2[i];
      k++;
    }
  }
  if(arr2.length === 0) {    // Handling test case-1
    return arr2;
  } else{        // Return k + 1, since in starting; we assume the value of k as 0
    return k + 1;       // This logic itself handles test cases-2 and 3
  }
}
