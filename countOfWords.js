Number of words 5 characters long
// Write a countOfWords function that takes an array of names as an argument and returns
// number of names with a length of 5 characters.
function countOfWords (names) {
let count = 0;
for (let i = 0; i <names.length; i ++) {
if (names [i] .length === 5)
count ++;
}
return count;
}
