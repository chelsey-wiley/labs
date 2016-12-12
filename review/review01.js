/*COMPLETED No. 1: write a function that takes two numbers and returns a sum

function sum(a, b){
  var answer = (a + b);
  console.log(answer + " is the answer")
}

sum(7, 9);

-------------------
 COMPLETED No. 2: write a function that takes a password and returns if it is equal to 'p@55w0rd'

function answer(text){

  if (text == 'p@55w0rd'){
    return 'correct';
  }
  else{
    return 'incorrect';
  }
}

var result = answer('p@55w0rd');
console.log(result);

-----------------------
COMPLETED No. 3: write a function that takes a string and returns whether or not it is longer than 10 characters long.

function gettingThere(myString){
  if(myString.length > 10 ){
    return 'it is longer'
  }
  else{
    return 'it is shorter'
  }
}

var result = gettingThere('nope');
console.log(result);

_____________________
COMPLETED No. 4: write a function that takes a string and returns whether or not it is longer than 10 characters long and contains an exclamation point.


function happyString(aString) {
  if(aString.length > 10 && aString.indexOf('!')){
    return 'requirements met'
  }
  else{
    return 'requirements NOT met'
  }
}
result = happyString('String goes Here!')
console.log (result)

_________________________
COMPLETED No. 5: write a function that takes an array of strings and returns the number of things in the array


function colors(arr) {
  var answer = arr.length;
  return answer;
}

result = colors(['red', 'yellow', 'blue', 'orange', 'purple'])
console.log (result)


COMPLETED No. 6 write a function that takes an array of numbers and returns the sum

function add(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

console.log(add([1, 6, 42, 3, 9]));

No. 7 write a function that takes an array and return `true` if the array contains more than 20 items.
*/

function longArr(theArr){
  for (theArr.length > 20) {
  return 'true'
  }
}

console.log(longArr([1, 4, 15, 1, 14, 14, 14, 3, 4 ,17, 5, 4, 5, 0, 7, 9, 5, 45, 12));
