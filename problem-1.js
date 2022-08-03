/* 

Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to 
help Harry calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka Harry’s mom gave him. 
The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.

Sample Input: 
1000
700

Output: 
300     

*/

var moneyGiven = 1000;
var applePrice = 400;
var orangePrice = 300;
var expense = applePrice + orangePrice;
var giveBack = moneyGiven - expense;
console.log('Money Given: ' +moneyGiven);
console.log('Total Spent: ' +expense)
console.log('Give Back to Mom: ' +giveBack);
