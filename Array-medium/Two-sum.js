/*
Question: Find the pair equal to target [Two Sum]. 
Link: 🔗 LeetCode – https://leetcode.com/problems/two-sum/description/

Approach: 
1] Brute Force => Transverse through the array with nested loops => Time Complexity = O(n2) / Space Complexity = O(1)
2] Better Approach => Using HashMap => Time Complexity = O(n) / Space Complexity = O(n)
3] Optimized Approach => Two pointer => Time Complexity = O(n) / Space Complexity = O(1)

Explanation(Brute force approach):
- We will transverse through the array with nested loops.
- The outer loop will start from the first index and the inner loop will start from the next index of the outer loop.
- We will check if the sum of the elements at the outer and inner loop is equal to the target. 
- If it is equal, then we will return the indices of the elements. 
- If it is not equal, then we will continue to the next iteration of the inner loop. 
- If we reach the end of the inner loop and we do not find any pair, then we will continue to the next iteration of the outer loop.


Explanation(Better approach):
- We will use a HashMap to store the elements of the array and their indices.
- We will traverse through the array and for each element, we will check if the complement (target - current element) is present in the HashMap.  
- If it is present, then we will return the indices of the current element and the complement.
- If it is not present, then we will add the current element and its index to the HashMap. 
- If we reach the end of the array and we do not find any pair, then we will return [-1, -1] to indicate that no pair was found.


Explanation(Optimized approach):
- We will use two pointers, one starting from the beginning of the array and the other starting from the end of the array.
- We will calculate the sum of the elements at the two pointers and compare it with the target.
- If the sum is equal to the target, then we will return the indices of the two pointers.
- We will assume that the array is sorted. If it is not sorted, we can sort it first and then apply this approach.
- If the sum is less than the target, then we will move the left pointer to the right (increment it) to increase the sum.
- If the sum is greater than the target, then we will move the right pointer to the left (decrement it) to decrease the sum.
- We will continue this process until we find a pair that equals the target or until the two pointers meet. 
- If we reach the end of the loop and we do not find any pair, then we will return [-1, -1] to indicate that no pair was found.


Test Cases:
1] If array is empty
2] If only one element is present in the array
*/


/* Brute force solution */
let arr = [2, 7, 11, 15];
let target = 9;

function twoSum(arr, target) {
  for(let i= 0; i < arr.length; i++) {
    for(let j= i+1; j < arr.length; j++){  
      if(arr[i] + arr[j] === target){
          return [i, j];
      }
    }
  }
}


/* Better Approach solution */
let arr1 = [2, 7, 11, 15];
let target1 = 9;

function twoSum(arr1, target1) {
  if(arr1.length <= 1) {  // Handling Test cases
    return arr1;
  }

  let hashMap = new Map();

  for(let i= 0; i < arr1.length; i++) {
    const current = arr1[i];
    const needed = target1 - current;

    if(hashMap.has(needed)){
      return [hashMap.get(needed), i];
    } else{
      hashMap.set(current, i);
    }
  }
  return [-1,-1];    // If no pair found
}

/* Optimized Approach solution */
let array = [2, 7, 11, 15];
let targetSum = 9;

function twoSum(array, targetSum) {
  if(array.length <= 1) {    // Handling Test cases
    return array;
  } 

  let left = 0;
  let right = array.length - 1;

  while(left < right) {
    const sum = array[left] + array[right];

    if(sum === targetSum) {
      return [left, right];
    } else if(sum < targetSum) {    // Assuming the array is sorted
      left++;
    } else {
      right--;
    }
  }
}