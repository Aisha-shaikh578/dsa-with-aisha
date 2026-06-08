/*
Question: Find the longest consecutive sequence.
Link: 🔗 LeetCode – https://leetcode.com/problems/longest-consecutive-sequence/description/
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1

Approach: 
1] Brute Force =>  => Time Complexity = O(n2) / Space Complexity = O(1)
1] Better Approach =>  => Time Complexity = O(n) / Space Complexity = O(1)
3] Optimized Approach => Set => Time Complexity = O(n) / Space Complexity = O(n)


Explanation(Brute force approach):
- Iterate through the array and for each element, check if the next consecutive element exists in the array.
- If it does, keep counting until you find the end of the consecutive sequence. 
- Update the longest length found so far.


Explanation(Better approach):
- We can sort the array first, which will bring all the consecutive elements together.
- Then we can iterate through the sorted array and count the length of consecutive sequences.
- We need to handle duplicates by checking if the current element is the same as the previous one.
- Update the longest length found so far.


Explanation(Optimized approach):
- We can use a Set to store the elements of the array for O(1) average time complexity lookups.
- Iterate through the Set and for each element, check if it is the start of a sequence (i.e., if the previous element is not in the Set).
- If it is the start of a sequence, keep checking for the next consecutive elements and count the length of the sequence.
- Update the longest length found so far.


Test Cases:
1] If array is empty
*/


/* Brute Force Solution */
let arr = [100, 1, 2, 101, 4, 1, 3, 102];

function longestSeq(arr) {
  let longest = 1;
  for(let i= 0; i < arr.length; i++) {
    let elem = arr[i];
    let cnt = 1;
    while(arr.includes(elem+1)) {
      elem++;
      cnt++;
    }
    longest = Math.max(longest, cnt);
  }
  return longest;
}


/* Better Approach Solution */
let arr = [1, 1, 2, 3, 4, 100, 101, 102];

function longestSeq(arr) {
  let longest = 1;
  let cnt = 0;
  let lastSmallest = -Infinity;

  /* Only works when array is sorted; else sort the array first */
  for(let i= 0; i < arr.length; i++) {
    if(arr[i] - 1 === lastSmallest) {
      cnt++;
      lastSmallest = arr[i];
    } else if(arr[i] !== lastSmallest) {
      cnt = 1;
      lastSmallest = arr[i]
    }
    longest = Math.max(longest, cnt);
  }
  return longest;
}


/* Optimal Approach Solution */
let arr = [100, 1, 2, 101, 4, 1, 3, 102];

function longestSeq(arr) {
  let n= arr.length;
  if(n === 0) return 0;    // Handling test case-1

  let longest = 1;
  let set = new Set(arr);
  for(let elem of set) {
    if(!set.has(elem-1)) {
      let current = elem;
      let cnt = 1;
      while(set.has(current+1)) {
        current++;
        cnt++;
      }
      longest = Math.max(longest, cnt);
    }
  }
  return longest;
}