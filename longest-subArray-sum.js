/*
Question: Find the longest subArray with sum equal to k. 
Link: 🔗 LeetCode – https://leetcode.com/problems/subarray-sum-equals-k/description/

Approach: 
1] Brute Force => Transverse through the array with nested loops => Time Complexity = O(n2) / Space Complexity = O(1)
2] Better Approach => Using Map => Time Complexity = O(n) / Space Complexity = O(n)
3] Optimized Approach => Two pointer => Time Complexity = O(n) / Space Complexity = O(1)

Explanation(Brute force approach):
-We will initially assume the length of the sub-array as 0
-Index of outer loop will increment after the inner loop have entirely completed it's iteration. 
-After incrementing the index of the outer loop, we will take sum again as zero. 
-Our j index will always start from the index of i. 
-For every iteration of the inner loop, we will increase the sum with the element of that array.
-If our sum is equal to k(target); then we will store the maximum length of subarray in `length`. 
-Finally return the length -which is our longest sub-array.


Explanation(Better approach):
- We will create a new map(hash map) to store our prefix sum 
- Traverse once through the entire array. 
- Keep adding the sum of every index in the variable `sum`. 
- For the first time we get our sum as k(target), then we will store the max length of sub-array in variable `maxLength` 
- After adding the sum we will check that if our remaining is present in prefixSumMap(hash-map)
- If rem is present the prefixSumMap; then we will create a new variable called 'length' which will give the length of our sub-array
- Else store the current sum with index in prefixSumMap.


Explanation(Optimized approach):
- We will traverse through the entire array using two pointers, left and right. 
- If our sum is greater than K then we will reduce the sum from the index of the left pointer.
- The left pointer will be responsible for decreasing the total count of sum. 
- The right pointer will keep incrementing on every iteration. 
- And the right pointer will be responsible for adding the total sum. 
- If the sum is equal to k(target), then modify the maxLength of sub-array. 


Test Cases:
1] If array is empty
2] If only one element is present in the array
*/


/* Brute force solution */
let arr = [1, 2, 1, 3, 1, 1, 1, 4];
let k = 3;

function subArr(arr, k) {
  let length = 0;

  for(let i= 0; i < arr.length; i++) {
    let sum = 0;
    for(let j= i; j < arr.length; j++) {
      sum += arr[j];
      if(sum === k) {
       length = Math.max(length, (j-i)+1);
     }
   }
  }
  return length;
}


/* Better Approch solution */
let arr1 = [1, 2, 1, 3, 1, 1, 1, 4];
let k1 = 3;

function subarr1(arr1, k1) {
  let prefixSumMap = new Map();
  let sum = 0;
  let maxLength = 0;

  for(let i= 0; i < arr1.length; i++) {
    sum += arr1[i];

    if(sum === k1) {
      maxLength = Math.max(maxLength, i + 1)
    }

    const rem = sum - k1;

    if(prefixSumMap.has(rem)) {
      length = i - prefixSumMap.get(rem);
      maxLength = Math.max(maxLength,length);
    } else if(!prefixSumMap.has(rem)) {
      prefixSumMap.set(sum, i)
    }
  }
  return maxLength;
}


/* Optimal solution */
let a = [1, 2, 1, 3, 1, 1, 1, 4];
let k = 3;

function subArr(a, k) {
  let left = 0;
  let right = 0;
  let sum = a[0];
  let maxLength = 0;
  let n = a.length;

  while(right < n) {
    while(left <= right && sum > k) {
      sum -= a[left];
      left++;
    }
    if(sum === k) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
    right++;
    if(right < n) {
      sum += a[right];
    }
  }
  return maxLength;
}