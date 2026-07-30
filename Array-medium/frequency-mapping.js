/*
Question: Find frequency of all the elements.
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1

Approach: 
1] Brute Force => Using map => Time Complexity = O(n) / Space Complexity = O(k)


Explanation(Brute force approach):
-Handle test case first to avoid unnecessary steps
-Create an empty object
-Loop thorugh the entire array once
-Check if element already exists in object
-If yes then increase the count of frequency by one
-Else count the number as one


Test Cases:
1] If array is empty
2] If only one element present in the array
2] If all elements are same
*/


/* Brute force solution */
let arr = [1, 2, 3, 4, 5];


function frequency(arr) {
  if(arr.length === 0 ) {return arr};   // Handling test case-1

  let freqMap = {};   // Create an empty object

  for(let i= 0; i < arr.length; i++) {    // This logic itself handles test cases-2 and 3
    let elem = arr[i];

    if(freqMap[elem]) {
      freqMap[elem] = freqMap[elem] + 1;
    } else {
      freqMap[elem] = 1;
    }
  }
  return freqMap;
}