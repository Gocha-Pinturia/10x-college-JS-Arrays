# 10x-college-JS-Arrays

1

Automatic Zoom
1 - INDEXES & LENGTH  
Challenge 1: First & last 
 
const fruits = ["apple", "banana", "cherry", "date"]; 
 
// 1. Log the first element 
// 2. Log the last element (use .length) 
// 3. Log the total count of fruits 
 
Challenge 2: Update by index 
 
const scores = [80, 55, 90, 42, 73]; 
 
// 1. Change the second score to 60 
// 2. Change the last score to 99 
// 3. Log the updated array 
 
 
2 - LOOPS  
 
Challenge 3: for loop - sum 
 
const prices = [12, 5, 8, 30, 3]; 
 
// Calculate the total sum of all prices 
// using a for loop. Log the result. 
 
 
Challenge 4: for...of - greet 
 
const names = ["Alice", "Bob", "Charlie", "Diana"]; 
 
// Log "Hello, Alice!", "Hello, Bob!" ... 
// for each name using for...of 
 
 
Challenge 5: forEach - multiply 
 
const nums = [2, 4, 6, 8, 10]; 
 
// Log each number multiplied by 3 
// using .forEach() 
 
 
 
3 - PUSH, POP, SHIFT, UNSHIFT  
Challenge 6: Queue simulation 
 
const queue = ["Tom", "Sara"]; 
 
// 1. Add "Mike" to the end 
// 2. Add "Lena" to the beginning 
// 3. Remove the first person (they got served) 
// 4. Remove the last person (they left) 
// 5. Log the final queue 
 
 
4 - MAP 
 Challenge 7: Celsius to Fahrenheit 
 
const temps = [0, 10, 20, 30, 40]; 
 
// Create a new array where each 
// Celsius temp is converted to Fahrenheit. 
// Formula: (C * 9/5) + 32 
 
 
Challenge 8: Pass the threshold 
 
const scores = [45, 82, 60, 37, 91, 55, 78]; 
 
// 1. Get only scores that are 60 or above 
// 2. Get only scores below 60 (failing) 
// Log both arrays 
 
 
Challenge 9: Count occurrences 
 
const votes = ["yes", "no", "yes", "yes", "no", "yes"]; 
 
// Use .reduce() to count how many times 
// each answer appears. 
// Expected result: { yes: 4, no: 2 } 
 
 
7 - SORT & REVERSE  
Challenge 10: Sort numbers 
 
const nums = [40, 1, 5, 200, 13, 99]; 
 
// 1. Sort ascending  (smallest first) 
// 2. Sort descending (largest first) 
// 3. Reverse the original array 
 
 
8 - indexOf, lastIndexOf, includes, find, findIndex  
Challenge 11: Search methods 
 
const colors = ["red", "blue", "green", "blue", "red"]; 
 
// 1. What index is the first "blue"? 
// 2. What index is the last "blue"? 
// 3. Does it include "green"? 
// 4. Does it include "yellow"? 
 
 
 
9 - SPLICE & SLICE  
Challenge 12: slice - extract a copy 
 
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; 
 
// 1. Get the first 3 days 
// 2. Get only the weekend (Sat, Sun) 
// 3. Log the original - confirm it's unchanged 
 
 
Challenge 18: splice - mutate in place 
 
const menu = ["soup", "salad", "pasta", "steak", "cake"]; 
 
// 1. Remove "pasta" (by index) using splice 
// 2. Insert "risotto" where "pasta" was 
// 3. Log the final menu 