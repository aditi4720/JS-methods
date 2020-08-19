var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.

function longestWord(arr) {
  var lg =0;
  var longest;
  for( var i=0; i<arr.length; i++) {
    if(arr[i].length > lg) {
      lg= arr[i].length;
      longest=arr[i];
    }
  }
  return longest;
}
console.log(longestWord(words));


var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.

function sumarray(number) {
  var sum= number.reduce((sum,current) => sum + current,0);
  return sum;
} 
var result= sumarray(numbers1);
var len= numbers1.length;
var average= result /len;
console.log(result);
console.log(average);





var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers

function avgarray(number) {
  var sum= number.reduce((sum,current) => sum + current,0);
  var len= number.length;
  var average= sum /len;
  return average;
} 
console.log(avgarray(numbers2));


var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function avg(arr) {
  if (arr.length === 0) return null;
  const avgValue = (sum(arr) / arr.length).toFixed(2);
  return Number(avgValue);
}
function sum(someArr) {
  if (!someArr) return 0;
  let sum = 0;
  for (let el of someArr) {
    if (typeof el === 'object') {
      throw new Error("Unsupported data type sir or ma'am");
      return;
    }
    if (typeof el === 'string') sum += el.length;
    else sum += el;
  }
  return sum;
}
console.log(avg(words2));