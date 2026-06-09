/*
Question: Sort an array of 0's, 1's and 2's
Link: 🔗 LeetCode – https://leetcode.com/problems/set-matrix-zeroes/description/
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/set-matrix-zeroes/1
Approach: 
1] Brute Force => Transverse => Time Complexity = O(n * m) * (n + m) + (n * m) / Space Complexity = O(1)
2] Better Approach => HashArray => Time Complexity = O(2 * n * m) / Space Complexity = O(n + m)
3] Optimized Approach => Transverse  => Time Complexity = O(2n * m) / Space Complexity = O(1)

Explanation(Brute force approach):
- We will traverse the matrix and whenever we encounter a 0, we will mark the entire row and column with -1 (or any other marker value) except for the cells which are already 0.
- After the first traversal, we will again traverse the matrix and replace all the marked cells with 0.
- This approach consumes alot of time because we are traversing the matrix multiple times and also we are using extra space to mark the cells.


Explanation(Better approach):
- We will use two arrays to mark the rows and columns which contain 0.
- We will traverse the matrix and whenever we encounter a 0, we will mark the corresponding row and column in the respective arrays.
- After the first traversal, we will again traverse the matrix and set the cells to 0 if the corresponding row or column is marked in the respective arrays.
- This approach is better than the brute force approach because we are traversing the matrix only twice and we are using extra space to mark the rows and columns.


Explanation(Optimized approach):
- We will use the first row and first column of the matrix to mark the rows and columns which contain 0.
- We will traverse the matrix and whenever we encounter a 0, we will mark the corresponding row and column in the first row and first column of the matrix.
- After the first traversal, we will again traverse the matrix and set the cells to 0 if the corresponding row or column is marked in the first row or first column of the matrix.
- We will also handle the first row and first column separately because they are used for marking the rows and columns.
- This approach is optimal because we are traversing the matrix only twice and we are not using any extra space to mark the rows and columns.
*/


/* Brute Force Solution */
let mat = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1]
]

function markRow(mat, row) {
  let m = mat[0].length;   // columns
  for(let i= 0; i < m; i++) {
    if(mat[row][i] !== 0) {
      mat[row][i] = -1;
    }
  }
}

function markCol(mat, col) {
  let n = mat.length;   // rows

  for(let j= 0; j < n; j++) {
    if(mat[j][col] !== 0) {
      mat[j][col] = -1;
    }
  }
}

function setMat(mat) {
  let n = mat.length;   // rows
  let m = mat[0].length;   // columns

  for(let i= 0; i < n; i++) {
    for(let j= 0; j < m; j++) {
      if(mat[i][j] === 0) {
        markRow(mat, i);
        markCol(mat, j);
      }
    }
  }

  for(let i= 0; i < n; i++) {
    for(let j= 0; j < m; j++) {
      if(mat[i][j] === -1) {
        mat[i][j] = 0;
      }
    }
  }
  return mat;
}


/* Better approach Solution */
let mat = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1]
]

function setMat(mat) {
  let n = mat.length;   // rows
  let m = mat[0].length;   // columns
  let row = new Array(n).fill(0);
  let col = new Array(m).fill(0);

  // Mark rows and columns containing 0
  for(let i= 0; i < n; i++) {
    for(let j= 0; j < m; j++) {
      if(mat[i][j] === 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  // Set cells to 0 if row and column is marked
  for(let i= 0; i < n; i++) {
    for(let j= 0; j < m; j++) {
      if(row[i] === 1 || col[j] === 1) {
        mat[i][j] = 0;
      }
    }
  }
  return mat;
}


/* Optimal approach solution */
let mat = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1]
]

function setMat(mat) {
  let n = mat.length;   // rows
  let m = mat[0].length;   // columns
  let col0 = 1;

  // Mark rows and coloums
  for(let i= 0; i < n; i++) {
    for(let j= 0; j < m; j++) {
      if(mat[i][j] === 0) {
        mat[i][0] = 0;     // mark the i-th row
      
        if(j !== 0) {
          mat[0][j] = 0;    // mark the j-th column
        } else{
          col0 = 0;
        }
      }
    }
  }

  // Set zeroes based on Markers
  for(let i= 1; i < n; i++) {
    for(let j= 1; j < m; j++) {
      if(mat[i][0] === 0 || mat[0][j] === 0) {     // check row and column markers
        mat[i][j] = 0;
      }
    }
  }

  // Handle First row
  if(mat[0][0] === 0) {
    for(let j= 0; j < m; j++) {
      mat[0][j] = 0;
    }
  }

  // Handle First coloum
  if(col0 === 0) {
    for(let i= 0; i < n; i++) {
      mat[i][0] = 0;
    }
  }
  return mat;
}