/*
Question: 
Link: 🔗GeeksforGeeks – https://www.geeksforgeeks.org/problems/stock-buy-and-sell2615/1
Link: 🔗LeetCode – https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=problem-list-v2&envId=array

Approach: 
1] Better Approach => Iterate through the array => Compare each day's price to buying price => Time Complexity = O(n) / Space Complexity = O(1)

Explanation:
- Note: You cannot sell the stock before buying it. 
- Initially, we will assume that we are buying our stock on day one. 
- We will iterate through the array from the second day, which is index '1'. 
- On each day, we will check our profit. 
- If we get a new profit which is greater than the previous maxProfit, then we will update our maxProfit to the current day's profit.
- And if our buying price for the current day is less than our previous buying price, then we will update our buying price to the current day's price. 
*/


/* Better Approach solution*/
let arr = [7, 1, 5, 3, 6, 4];

function findMaxProfit(arr) {
  let buy = arr[0];
  let maxProfit = 0;

  for(let i= 1; i < arr.length; i++) {
    let profit = arr[i] - buy;
    maxProfit = Math.max(maxProfit, profit);
    buy = Math.min(buy, arr[i]);
  }
 return maxProfit;
}