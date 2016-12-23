//FOR LOOP
for (var i = 0; i <dataset.length; i++){
  var objInDataset = dataset[i];
  console.log('for loop', objInDataset.country);
}

//FOR EACH
dataset.forEach(function(objInDataset){
  console.log('forEach', objInDataset.country);
})

//FOR EACH with SUM
function sumOfMales (data){
  var output = 0;

  data.forEach(function(item){
    output += item.males
  });
  return output;
}

var result = sumOfMales(dataset);
console.log(result);

//Creating for each function
Array.prototype.forEachFunction = function (func) {
  // console.log('doing this thing');
  for (var i =0; i < this.length; i++){
    // console.log('iterating over i', i);
    func(this[i]);
  }

}


//MAP
var numbers = [5, 10 ,15, 5];
numbers.map(function(num){
return num * 2;
});

//MAP with Obj in Array
function justLadies(data) {
  var output = data.map(function(info){
    return info.females;
  });
  return output;
}

var result = justLadies(dataset);
console.log(result);

//MAP creating new array
var output = people.map(function(person) {
  var obj = {
    firstName: person.firstName,
    lastName: person.lastName,
    fullName: person.firstName + ' ' + person.lastName
  }
  return obj;
});

//REDUCE
var numbers = [1, 3, 5, 22, 12];

var output = numbers.reduce(function (sum, valueInArray){
  // console.log('sum', sum, 'value in array', valueInArray);
  return sum + valueInArray
}, 0);


//FITLER

var stuff2 = [{name: 'mark twain', age: 64}, {name:'jane austen', age:45}];

filter2 = stuff2.filter(function(obj){
  if (obj.age< 50){
    return true;
  }
  else{
    return false;
  }
});

console.log(filter2);
