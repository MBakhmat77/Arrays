
Identical elements in an array
// Write a function equalElementsInArray that takes an array of numbers arr as an argument and determines if the array has the same elements, and if so, returns them as an array [element, element]. If there are several such pairs, return the first one. If there are no identical elements in the array, return
// message "All elements are different". If the original array is empty, return an empty array.
function equalElementsInArray (arr) {
let index = -1;
if (arr.length == 0) return [];
let sortedArr = arr.slice (). sort ();
let result = [];
if (arr === []) return [];
for (let i = 0; i <sortedArr.length; i ++) {
if (sortedArr [i] === sortedArr [i + 1] || sortedArr [i] === sortedArr [i - 1]) {
index = i;
result.push (sortedArr [i]);
result.push (sortedArr [i + 1]);
break;
}
