Swap the maximum and minimum elements of an array
question
Write a function changeMaxAndMin that takes the arr array as an argument and returns an array in which the maximum and minimum elements are swapped. If the array has several maximum or several minimum elements, swap the first of them. In all tests, the array contains at least two elements.

Use loops in your solution. The use of the Math.min () and Math.max () methods is not permitted.
function changeMaxAndMin (arr) {
 let indMin = 0;
   let indMax = 0;
let min = arr [0];
let max = arr [0];
let temp;
for (let i = 1; i <arr.length; i ++) {
 
if (arr [i] <min) {
  min = arr [i];
 indMin = i;
}
if (arr [i]> max) {
  max = arr [i];
indMax = i;
}
}
arr [indMin] = max;
arr [indMax] = min;
 
  
return arr;
 }
