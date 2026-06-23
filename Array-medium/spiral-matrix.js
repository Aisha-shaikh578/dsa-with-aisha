/*
Question: Spiral matrix
Link: 🔗 LeetCode – https://leetcode.com/problems/spiral-matrix/description/
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1

Approach: 
1] Optimized Approach => Transverse and print entire marix => Time Complexity = O(n * m) / Space Complexity = O(n * m)


Explanation(Optimized approach):
- The idea is to traverse the matrix in a spiral order and store the elements in a new array. We maintain four pointers: top, bottom, left, and right to keep track of the boundaries of the matrix. We start from the top-left corner and move right until we reach the right boundary, then move down until we reach the bottom boundary, then move left until we reach the left boundary, and finally move up until we reach the top boundary. We repeat this process until all elements are traversed.
- The time complexity of this approach is O(n * m) because we are traversing all the elements of the matrix once. The space complexity is also O(n * m) because we are storing all the elements in a new array.
*/


/* Optimal approach solution */
let mat = [
  [1,  2,  3,  4,  5,  6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11]
]

function spiralMat(mat) {
  let n = mat.length;
  let m = mat[0].length;
  let left = 0;
  let top = 0;
  let right = n-1;
  let bottom = n-1;
  let ans = Array.from({length:n}, () => new Array(n));

  while(top <= bottom && left <= right) {
    for(let i= left; i <= right; i++) {    // move towards right
      ans.push(mat[top][i]);
    }
    top++;
    for(let j= top; j <= bottom; j++) {   // move towards bottom
      ans.push(mat[j][right]);
    }
    right--;
    if(top <= bottom) {
      for(let k= right; k >= left; k--) {  // move towards left
        ans.push(mat[bottom][k]);
      }
      bottom--;
    }
    if(left <= right) {
      for(let i= bottom; i >= top; i--) {   // move towards top
        ans.push(mat[i][left]);
      }
      left++;
    }
  }
  return mat;
}