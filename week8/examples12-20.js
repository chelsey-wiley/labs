var numbers = [5, 10 ,15, 5];
numbers.map(function(num){
return num * 2;
});

[10, 20, 30, 10]
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


var obj = {
  firstName
}
