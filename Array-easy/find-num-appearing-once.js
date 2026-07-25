/*
Question: Find the number appearing once in the array. 
Link: 🔗 LeetCode – https://leetcode.com/problems/single-number/description/
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/element-appearing-once2552/1

Approach: 
1] Brute Force => Transverse through the array with nested loops => Time Complexity = O(n2) / Space Complexity = O(1)
2] Better Approach => Using Map => Time Complexity = O(n) / Space Complexity = O(n)
3] Optimized Approach[Space complexity is reduced] => XOR => Time Complexity = O(n) / Space Complexity = O(1)

Explanation(Brute force approach):
-Index of first loop will increment after the second loop have entirely completed transversing the array 
-If the number is equal to the arr[j], then the count will keep on incrementing. 
-At the ende if count is 1, then we will return the number. 


Explanation(Better approach):
-Create an empty object in which we will be storing our key(number) and its value(count). 
-Loop through the array and store its index as element.
-If that element already exists in the map, then increment it's value(count) by one.
-Else store it's count as 1. 


Explanation(Optimized approach):
-Start XOR as zero. 
-Iterate through the array. 
-Then do xor of every element. 
-And return xor[As all the numbers who appears twice will be cancelled, only the number who is present alone(once) will be left and returned]


Test Cases:
1] If array is empty
2] If only one element is present in the array
*/


/* Brute force solution */
function findNum(arr) {
  if(arr.length <= 1) {return arr};   // Handling test cases-1 and 2 

  for(let i= 0; i < arr.length; i++) {
    let num = arr[i];
    let count = 0;
    for(let j= 0; j < arr.length; j++) {
      if(num === arr[j]) {
        count++;
      }
    }
    if(count === 1) {
      return num;
    }
  }
}


/* Better approach solution */
let arr1 = [1, 1, 2, 2, 3, 4, 4];

function findNum(arr1) {
  if(arr1.length <= 1) {return arr1};  // Handling test cases-1 and 2 

  let map = {};

  for(let i= 0; i < arr1.length; i++) {
    let elem = arr1[i];

    if(map[elem]) {
      map[elem] = map[elem] + 1;
    } else{
      map[elem] = 1
    }
  }

  for(let key in map) {
    if(map[key] === 1) {
      return key
    }
  }
}


/* Optimized approach solution */
let array = [1, 1, 2, 2, 3, 4, 4];

function findNum(array) {
  if(array.length <= 1) { return array }  // Handling test cases-1 and 2 

  let xor = 0;
  
  for(let i= 0; i < array.length; i++) {
    xor ^= array[i]
  }
  return xor
}