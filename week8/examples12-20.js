var numbers = [5, 10 ,15, 5];
numbers.map(function(num){
return num * 2;
});

console.log(numbers);

var people = [
  {firstName: 'joe',
  lastName: 'smith',
  },
  {firstName: 'joan',
  lastName: 'smith'
  }];

var fullNames = people.map(function(person){
return person.firstName + ' ' + person.lastName;
});

var output = people.map(function(person){
  person.fullName = person.firstName + ' ' + person.lastName;
  return person; // will take what you return and stick it in the output array
});



//REDUCE
//reduce takes 2 parameters not just passing function
//reduce takes a bunch of things and returns one value
//function is the item in array, initial value (0)
//second paramenter is the vallue in the array
//first parameter is what you're doing

var numbers = [1, 3, 5, 22, 12];

var output = numbers.reduce(function (sum, valueInArray){
  // console.log('sum', sum, 'value in array', valueInArray);
  return sum + valueInArray
}, 0);

  // console.log ('end of output', output);

var names = ['ben', 'joe', 'bob', 'paul']

var output = names.reduce(function(initial, value){
  // console.log('initial', initial);
  return initial + ',' + value
});

// console.log('end of output', output);
