// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
var max = Math.max.apply(null, numbers);
console.log(max);

// Find longest string in strings

var longest = strings.reduce(function (x, y) {
	return x.length > y.length ? x : y
});
console.log('longest word: ' + longest);


// Find all the even numbers
let evennos = () => {
	let the_nos = numbers.filter(number => number % 2 == 0);
	document.write('Even nos' + the_nos);
}
evennos();
// Find all the odd numbers

let evennos = () => {
	let the_nos = numbers.filter(number => number % 2 != 0);
	document.write('Even nos' + the_nos);
}
evennos();

// Find all the words that contain 'is' use string method 'includes'
const matches = strings.filter(s => s.includes('is'));
console.log(matches);

// Find all the words that contain 'is' use string method 'indexOf'
let substr = 'is';

let count = 0;

let index = strings.indexOf(substr);
while (index !== -1) {
	count++;
	index = strings.indexOf(substr, index + 1);
}
console.log(count);

// Check if all the numbers in numbers array are divisible by three use array method (every)
const isdivisible = numbers => numbers.filter(val => val % 3 == 0);
console.log(isdivisible(numbers));

//  Sort Array from smallest to largest

numbers.sort(function (a, b) {
	return a - b;
});
console.log(numbers);

// Remove the last word in strings
var addon = strings.splice(-1, 1);
console.log(strings);

// Add a new word in the array

var addon = strings.splice(4, 0, "new");
console.log(strings);

// Remove the first word in the array

var addon = strings.splice(0, 1);
console.log(strings);

// Place a new word at the start of the array use (upshift)

var addon = strings.unshift("Hey");
console.log(strings);

// Make a subset of numbers array [18,9,7,11]

var substr = numbers.slice(3, 7);
console.log(substr);

// Make a subset of strings array ['a','collection']

var substr = strings.slice(2, 4);
console.log(substr);

// Replace 12 & 18 with 1221 and 1881

var change = console.log(numbers.splice(1, 3, '1221', '4', '1881'));
console.log(numbers);

// Replace words with string in strings array

var change = console.log(strings.splice(-1, 1, "strings"));
console.log(strings);

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];

// Find all customers whose firstname starts with 'J'

var firstJ = customers.filter(function (c) {
	return c.firstname.indexOf('J') == 0
});
console.log(firstJ);

// Create new array with firstname and lastname

var first_last = customers.map(function (c) {
	return {
		name: c.firstname + ' ' + c.lastname
	}
});
console.log(first_last);;

// Sort the array created above alphabetically
var sortname = customers.sort(sortByName);

function sortByName(c1, c2) {
	if (c1.name < c2.name) {
		return -1
	} else if (c1.name > c2.name) {
		return 1
	} else {
		return 0
	}
}

console.log(sortname);