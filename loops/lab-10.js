
var names = ['Fred', 'Wilma', 'Barney', 'Betty'];
var mNames = [];
var i = 0;

while (i < names.length) {
  if (names[i].indexOf('m') > -1){
    mNames.push(names[i]);
  }
  i++
}
console.log(mNames);

/*COMPLETED
Write a while loop to loop over the array and use the loop to check each name to see if it contains the letter 'm'. If it does, add it to the mNames array.
Note: you might want to remind yourself of how the `indexOf` function works on string.
Expected Output:
[ 'Wilma' ]
*/
