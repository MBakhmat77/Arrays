Number of items that are squares of integers
// Write a function counOfSquares that takes an array arr as
// argument, and returns the number of elements that are squares of integers.
function counOfSquares (arr) {
let count = 0;
for (let i = 0; i <arr.length; i ++) {
if ({} .toString.call (arr [i]) === "[object Number]")
if (Math.sqrt (arr [i])% 1 === 0)
count ++;
}
return count;
}
//////////////////////////////////////////////// //////////////////
