/*
Question: Find the total number of subarrays equal to k
Link: 🔗 LeetCode – https://leetcode.com/problems/subarray-sum-equals-k/description/
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/subarrays-with-sum-k/1

Approach: 
1] Brute Force => Nested loops [3 loops] => Time Complexity = ~O(n3) / Space Complexity = O(1)
2] Better Approach => Nested loops [2 loops] => Time Complexity = ~O(n2) / Space Complexity = O(1)
3] Optimized Approach => Prefix sum  => Time Complexity = O(n) / Space Complexity = O(n)


Explanation(Brute force approach):
- We will use 3 nested loops here:
   1. First loop will be responsible for the start of the sub-array. 
   2. Second inner loop will be responsible for the length of the sub-array. 
   3. And the third loop will be responsible for counting the total sum of the elements of sub-array.
- We will modify the totalSubArrCnt variable if subarray with sum equal to k is found


Explanation(Better approach):
- We will use 2 nested loops here:
   1. First loop will be responsible for the start of the sub-array. 
   2. Second inner loop will be responsible for the length of the sub-array. 
- Here we will simultaneously count the total sum of the elements of sub-array. 
- Modify the totalSubArrCnt variable if subarray with sum equal to k is found


Explanation(Optimized approach):
- We will use prefix sum and hash map here:
   1. We will maintain a variable curSum which will store the sum of elements from index 0 to i.
   2. We will also maintain a hash map preSumMap which will store the frequency of prefix sums.
   3. For each element in the array, we will calculate the required prefix sum as curSum - k.
   4. If this required prefix sum exists in the hash map, it means there are subarrays that sum to k, and we will increment our count accordingly.
   5. Finally, we will update the hash map with the current prefix sum. 


Test Cases:
1] If array is empty
2] If only one element is present in the array
*/


/* Brute Force Solution */
let arr = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3];
let k = 3;

function cntSubArr(arr, k) {
  let n = arr.length;
  let totalSubArrCnt = 0;

  for(let i= 0; i < n; i++) {      // This approach itself handles the test case-1 and 2
    for(let j= i; j < n; j++) {
      let cnt = 0;
      for(let k= i; k <= j; k++) {
        cnt += arr[k];
      }
      if(cnt === k) {
        totalSubArrCnt++;
      }
    }
  }
  return totalSubArrCnt;
}


/* Better Approach Solution */
let arr = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3];
let k = 3;

function cntSubArr(arr, k) {
  let n = arr.length;
  let totalSubArrCnt = 0;

  for(let i= 0; i < n; i++) {     // This approach itself handles the test case-1 and 2
    let cnt = 0;
    for(let j= i; j < n; j++) {
      cnt += arr[j];
     if(cnt === k) {
      totalSubArrCnt++;
    }
   }
  }
  return totalSubArrCnt;
}


/* Optimal Approach Solution */
let arr = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3];
let k = 3;

function cntSubArr(arr, k) {
  let curSum = 0;
  let cnt = 0;
  let preSumMap = new Map();
  preSumMap.set(0, 1);

  for(let i= 0; i < arr.length; i++) {     // This approach itself handles the test case-1 and 2
    curSum += arr[i];

    let requiredPrefix = curSum - k;
    if(preSumMap.has(requiredPrefix)) {
      cnt += preSumMap.get(requiredPrefix)
    } else{
      preSumMap.set(curSum, preSumMap.get(curSum) +1)
    }
  }
  return cnt;
}