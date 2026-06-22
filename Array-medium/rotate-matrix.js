/*
Question: Roate matrix by 90 degree
Link: 🔗 LeetCode – https://leetcode.com/problems/rotate-image/description/
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/rotate-by-90-degree-1587115621/1

Approach: 
1] Brute Force => Extra space => Time Complexity = O(n2) / Space Complexity = O(n2)
2] Optimized Approach => Transpose and Transverse every row => Time Complexity = O(n/2 * n/2) + (n * n/2) / Space Complexity = O(1)


Explanation(Brute force approach):
- We will create a new matrix of the same size as the original matrix and we will fill the new matrix with the elements of the original matrix in the rotated position.
- We will traverse the original matrix and for each element, we will place it in the new matrix at the position (j, n-1-i) where i is the row index and j is the column index of the original matrix.
- This approach is not optimal because we are using extra space to store the new matrix and we are traversing the original matrix only once.


Explanation(Optimized approach):
- We will first transpose the matrix by swapping the elements at position (i, j) with the elements at position (j, i) for all i and j.
- After transposing the matrix, we will reverse each row of the transposed matrix to get the final rotated matrix.
- This approach is optimal because we are not using any extra space to store the new matrix and we are traversing the original matrix only twice (once for transposing and once for reversing each row).
*/


/* Brute force solution */
let mat = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16]
]

function rotateMat(mat) {
  let n = mat[0].length;
  let ans = Array.from({ length:n }, () => new Array(n).fill(0))
  
  for(i= 0; i < n; i++) {
    for(let j= 0; j < n; j++) {
      ans[j][(n-1)-i] = mat[i][j]
    }
  }
  return ans;
}


/* Optimal approach solution */
let mat = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16]
]

function rotateMat(mat) {
  let n = mat[0].length;
  
  for(let i= 0; i < n; i++) {
    for(let j= i+1; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }
  for(i= 0; i < n; i++) {
   mat[i].reverse();
  }
  return mat;
}