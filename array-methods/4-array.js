var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

// your code goes here

// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.

// Solution 105

function getAge(data){
  let sum=0;
  for(var i=0; i<data.length; i++) {
    if(data[i].type === 'dog') {
      let temp = data[i].age;
      sum += (temp*7);
  }
}
return sum;
}
console.log(getAge(data));

// fitter, map, reduce
function getAge(data){
  let isDog = (animal) => {
  return animal.type === 'dog';
}
let dogYears = (animal) => {
  return animal.age * 7;
}
let sum = (sum, animal) => {
  return sum + animal;
}
let ages = data.filter(isDog).map(dogYears).reduce(sum);
  
console.log(ages);
}
getAge(data);

