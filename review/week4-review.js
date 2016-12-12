var colors = ['red', 'yellow', 'green', 'purple', 'orange', 'pink', 'indigo', 'violet', 'teal']

function aNumber(arr, number){
  var newArray = [];
  for (var i = 0; i < arr.length; i++){
    var word = arr[i];

    if (word.length > number){
      newArray.push(word);
    }
  }

  return newArray
}

//var result = aNumber(colors, 4);
//console.log(result);




function withLetter(arr, letter){
  var eArray = [];
  for (var i = 0; i < arr.length; i++) {
    var thing = arr[i];

    if (thing.indexOf(letter)> -1){
      eArray.push(thing);
    }
  }
  return eArray;
}



var result = aNumber(colors, 3);
console.log(result);

var result = withLetter(result, 't');
console.log(result);
