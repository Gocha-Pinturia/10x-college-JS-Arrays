// Task 1
console.log("Task 1");
const fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits);
console.log('1. Log the first element: ' + fruits[0]);
console.log('2. Log the last element (use .length): ' + fruits[fruits.length-1])
console.log('3. Log the total count of fruits: ' + fruits.length)


// Task 2
console.log("Task 2");
const scores = [80, 55, 90, 42, 73];
console.log(scores);
console.log('1. Change the second score to 60: "scores[1] = 60"');
scores[1] = 60;
console.log(scores);
console.log('2. Change the last score to 99: scores[scores.length-1] = 99');
scores[scores.length-1] = 99;
console.log('3. Log the updated array: ' + scores);


// Task 3
console.log("Task 3");
const prices = [12, 5, 8, 30, 3];
let sum = 0;
for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
}
console.log(sum);


// Task 4
console.log("Task 4");
const names = ["Alice", "Bob", "Charlie", "Diana"]; 
for(const el of names) {
    console.log("Hello, " + el + "!")
}


// Task 5
console.log("Task 5");
const nums = [2, 4, 6, 8, 10];
nums.forEach(element => console.log(element * 3));


// Task 6
console.log("Task 6");
const queue = ["Tom", "Sara"]; 
queue.push("mike");
queue.unshift("lena");
console.log(queue);
queue.shift()
console.log(queue);
queue.pop();
console.log(queue);


// Task 7
console.log("Task 7");
const temps = [0, 10, 20, 30, 40];
console.log(temps)
let fahrenheit = [];
for (const el of temps) {
    fahrenheit.push(el * 9/5 + 32);
}
console.log(fahrenheit)


// Task 8
console.log("Task 8");
const scoresNum = [45, 82, 60, 37, 91, 55, 78];
const scoresHigh = scoresNum.filter(el => el >= 60);
const scoresLow = scoresNum.filter(el => el < 60);
console.log(scoresHigh);
console.log(scoresLow);


// Task 9
console.log("Task 9");
const votes = ["yes", "no", "yes", "yes", "no", "yes"];
const result = votes.reduce((acc, item) => {
    if(item === "yes") {
        acc[item] += 1;
    }else
        acc[item] += 1;
    return acc;
}, {yes: 0, no: 0})
console.log(result);


// Task 10
console.log("Task 10");
const anyNums = [40, 1, 5, 200, 13, 99];
const anyNumsSmallest = [...anyNums].sort((a, b) => a - b);
console.log("original arr " + anyNums);
console.log("smallest arr " + anyNumsSmallest);
const anyNumsLargest = [...anyNums].sort((a, b) => b - a);
console.log("largest arr " + anyNumsLargest);
anyNums.reverse();
console.log("reverse original " + anyNums);


// Task 11
const colors = ["red", "blue", "green", "blue", "red"]; 
console.log('1. What index is the first "blue" ? answer: ' + colors.indexOf("blue"));
console.log('2. What index is the last "blue" ? answer: ' + colors.lastIndexOf("blue"));
console.log('3. Does it include "green"? answer: ' + colors.includes("green"));
console.log('4. Does it include "yellow"? answer: ' + colors.includes("yellow"));


// Task 12
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log("days of the week: " + days);
console.log("1. Get the first 3 days: " + days.slice(0, 3))
console.log("2. Get only the weekend (Sat, Sun): " + days.slice(5, days.length));
console.log("3. Log the original - confirm it's unchanged: " + days)


// Task 13
const menu = ["soup", "salad", "pasta", "steak", "cake"];
console.log("print menu: " + menu);
console.log('1. Remove "pasta"(by index) using splice: ' + menu.splice(2, 1));
console.log('2. Insert "risotto" where "pasta" was: ' + menu.splice(2, 0, "risotto"));
console.log("print menu: " + menu);

