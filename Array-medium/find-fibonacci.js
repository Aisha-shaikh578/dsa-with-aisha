/*
Question: Find the fibonacci number
Link: 🔗 LeetCode – https://leetcode.com/problems/fibonacci-number/description/

Approach: 
1] Brute Force => Recursion => Time Complexity = O(n2) / Space Complexity = O(n)
2] Optimized Approach => Single iteration => Time Complexity = O(n) / Space Complexity = O(1)


Explanation(Brute force approach):
- If n is less than or equal to 1, return n. Which means if n is 0, return 0 and if n is 1, return 1.
- Any number in the fibonacci series is the sum of the previous two numbers. So, we can use recursion to find the fibonacci number by calling the function recursively for n-1 and n-2 and adding them together.
-It will keep calling the function until it reaches the base case where n is less than or equal to 1.
-Always remember to return the value of the function call. Otherwise, it will return undefined.


Explanation(Optimized approach):
- If n is less than or equal to 1, return n. Which means if n is 0, return 0 and if n is 1, return 1.
- Here we are using two variables to keep track of the last two fibonacci numbers. We will start from 2 and iterate until n. In each iteration, we will calculate the current fibonacci number by adding the last two fibonacci numbers and update the last two fibonacci numbers accordingly.
- This way we can find the fibonacci number in O(n) time complexity and O(1) space complexity.
*/


/* Brute force solution */
let n = 4;

function fibonacci(n) {
  if(n <= 1) return n;

  return fibonacci(n-1) + fibonacci(n-2);
}



/* Optimal approach solution */
let n = 4;

function fibonacci(n) {
  if(n <= 1) return n;

  let secLast = 0;
  let last = 1;

  for(i= 2; i <= n; i++) {
    let current = secLast + last;
    secLast = last;
    last = current;
  }
  return last;
}
