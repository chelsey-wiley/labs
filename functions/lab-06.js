

function shortest(a, b, c){

  if (a.length < b.length && a.length < c.length) {
    return a;
  }

  else if (b.length < a.length && b.length < c.length) {
    return b;
  }

  else {
    return c;
  }

}

var answer = shortest("dog", "rabbit","hippopotamus");
console.log(answer);



/* COMPLETED function goes here
var short = "dog";
var s = short.length;

var med = "rabbit";
var m = med.length;

var long = "hippopotamus"
var l = long.length;


if (s <= m && <= l){
   console.log(short);
 }


/*




if (s <= m && <= l){
   console.log(short);
 }


Write a function that takes three strings and returns the shortest. If two of the same length are passed in, it can return either.
*/
