//FOR LOOP
for (var i = 0; i <dataset.length; i++){
  var objInDataset = dataset[i];
  console.log('for loop', objInDataset.country);
}

//FOR EACH
dataset.forEach(function(objInDataset){
  console.log('forEach', objInDataset.country);
})


//MAP
var numbers = [5, 10 ,15, 5];
numbers.map(function(num){
return num * 2;
});

//MAP creating new array
var output = people.map(function(person) {
  var obj = {
    firstName: person.firstName,
    lastName: person.lastName,
    fullName: person.firstName + ' ' + person.lastName
  }
  return obj;
});
