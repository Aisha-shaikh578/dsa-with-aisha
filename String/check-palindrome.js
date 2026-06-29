/*
Question: Check if string is palindrome or not
Link: 🔗 GeeksForGeeks – https://www.geeksforgeeks.org/problems/palindrome-string0817/1
Link: 🔗 LeetCode – https://leetcode.com/problems/valid-palindrome/description/


Approach: 
1] Brute Force => Reverse the string => Time Complexity = O(n) / Space Complexity = O(n)
2] Better Approach => Recursion => Time Complexity = O(n) / Space Complexity = O(n)
3] Optimal Approach => Two pointers => Time Complexity = O(n) / Space Complexity = O(1)

Explanation(Brute force approach):
-First we will reverse the string and then compare the original string with the reversed string. If both are equal then it is a palindrome otherwise not.


Explanation(Better approach):
-The better approach is to use recursion. We will check the first and last character of the string, if they are equal then we will call the function again with the next characters. If at any point the characters are not equal then it is not a palindrome.
-But if we reach the middle of the string then it is a palindrome.


Explanation(Optimal approach):
-The optimal approach is to use two pointers. 
-We will have one pointer at the start of the string and another pointer at the end of the string. 
-We will compare the characters at both pointers, if they are equal then we will move the pointers towards the middle of the string. 
-If at any point the characters are not equal then it is not a palindrome.
-And if the pointers cross each other then it is a palindrome.
*/


/* Brute force approach */
let str = 'madam';

function check(str) {
 let revesrsedStr = str.split('').reverse().join('');

 if(str !== revesrsedStr) {
  return false;
 }
 return true;
}


/* Better approach solution*/
let str = 'madam';
let n = str.length;

function check(i) {
  if(i >= n/2) return true;    // is Palindrome

  if(str[i] !== str[n-i-1]) {
    return false;       // is not a Palindrome
  }
  return check(i+1);
}

function main() {
  return check(0);
}


/* Optimal approach solution */
let str = 'madam';

function check(str) {
  let left = 0;
  let right = str.length-1;

  while(left <= right) {
    if(str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}