/*
Question: Rearrange elements by sign(negative and positive)
Link: 🔗 LeetCode – https://leetcode.com/problems/rearrange-array-elements-by-sign/description/
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/array-of-alternate-ve-and-ve-nos1401/1

Approach: 
1] Brute Force => Transversing twice through the array => Time Complexity = O(n + n/2)/ Space Complexity = O(n)
2] Optimized Approach => Two pointer => Time Complexity = O(n) / Space Complexity = O(n)


Explanation(Brute force approach):
- Initially, we will create two empty array data structures.
- 1st will store the positive numbers/elements and the 2nd one will store the negative numbers/elements
- We will iterate through the entire array and sort/organize our elements in negative and positive array data structures. 
- Then we will run a loop and iterate till n/2, because we want alternate positive and negative numbers. 
- We will place all the positive numbers on even indexes and all the negative numbers on the odd indexes.
- Finally, we will return our rearranged array. 


Explanation(Optimized approach):
- We will optimize the solution using two pointers. 
- 1st pointer will be for positive elements on positive indexes. 
- 2nd pointer will be for negative elements on negative indexes. 
- We will iterate through the entire array once. 
- If our current element on the index is negative, then we will store that element in our result array on odd index.
- And increase the negative index pointer by two.  
- Else if current element on the index is positive, then we will store that element in our result array on even index. 
- And increase the positive index pointer by two.
- Finally, we will return our resultant array.
*/


/* Brute Force solution */
let arr = [3, 1, -2, -5, 2, -4];

function rearrange(arr) {
  let n = arr.length;
  let pos = [];
  let neg = [];

  for(let i= 0; i < n; i++) {     // organizing the elements in their respective category of array
   if(arr[i] < 0) {
    neg.push(arr[i]);
   } else{
    pos.push(arr[i]);
   }
  }
  

  for(let j= 0; j < n/2; j ++) {
    arr[2 * j] = pos[j];      // since positive elements will be on even index as (no of +ve elems === no of -ve elems)
    arr[(2 * j) +1] = neg[j];  // since negative elements will be on odd index as (no of +ve elems === no of -ve elems)
  }
  return arr;
}


/* Better Approach solution */
let arr = [3, 1, -2, -5, 2, -4];

function rearrange(arr) {
  let n = arr.length;
  let posIdx = 0;     // positive elements will be on even indices   
  let negIdx = 1;    // negative elements will be on odd indices
  let res = [];

  for(let i= 0; i < n; i++) {
    if(arr[i] < 0) {
      res[negIdx] = arr[i];
      negIdx += 2;
    } else{
      res[posIdx] = arr[i];
      posIdx += 2;
    }
  }
  return res;    // return our result array(extra space)
}