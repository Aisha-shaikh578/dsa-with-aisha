/*
Question: Leaders in an array.
Link: 🔗GeeksForGeeks – https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1

Approach: 
1] Brute Force => Nested loops => Time Complexity = ~O(n2) / Space Complexity-in worst case = O(n)
2] Optimal Approach => Backwards transversing => Time Complexity = O(n) / Space Complexity-in worst case = O(n)

Explanation(Brute force approach):
-We will run nested loops here. 
-On every iteration, you will assume that our particular element/leader is true. 
-But if another element is found which is greater than our current element, then we will mark the leader as false. 
-At the end, if our leader/element is true, then we will push that particular element in our answer array which contains all the leader elements


Explanation(Optimal approach):
-We will run a loop from backwards.
-Also, we will assume that our maximum is initially -Infinity(Smallest possible number) 
-While iterating, if our current element at index is larger than the maximum, then we will update our maximum and also push that current element in the answer array(which contains all the leader elements) 
-We will reverse our answer array, as we are supposed to return our output in sorted order. 
*/


/* Brute force solution */
let arr = [16, 17, 4, 3, 5, 2]   

function findLeaders(arr) {
  let ans = [];

  for(let i= 0; i < arr.length; i++) {
    let leader = true;
    for(let j= i+1; j < arr.length; j++) {
      if(arr[j] > arr[i]) {
        leader = false;
        break;
      }
    }
    if(leader === true) {
      ans.push(arr[i]);
    }
  }
  return ans;
}


/* Optimal approach solution */
let arr = [16, 17, 4, 3, 5, 2]

function findLeaders(arr) {
  let ans = [];
  let max = -Infinity;

  for(let i= arr.length-1; i >= 0; i--) {
   if(arr[i] > max) {
    max = arr[i];
    ans.push(arr[i]);
   }
   max = Math.max(arr[i], max);
  }
  ans.reverse();    // Since we are supposed to return sorted array
  return ans;
}