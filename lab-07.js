var csv = 'name,age\nJoan,22\nBob,42\nFred,78'

//point #1
function aFunction(a, b) {
  //point #2
  var f = b(a);
  //point #3
  for (var i = 1; i < f.length; i++) {
    var d = f[i].split(',');
    console.log(d[0], ' is ', d[1], ' years old');
  }
}

//point #4

aFunction(csv, function(c) {
  //point #5
  var z = c.split('\n');
  return z;
});

//point #6
