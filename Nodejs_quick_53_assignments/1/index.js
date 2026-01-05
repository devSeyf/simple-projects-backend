// Assignment 1
// Question 1: Read contents of a file named 'data.txt' and log it.
// Answer 1:

const fs = require("fs");

const data = fs.readFileSync("data.txt", "utf8");
console.log(data);
