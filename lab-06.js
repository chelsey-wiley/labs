var csv = 'name,age\nJoan,22\nBob,42\nFred,78'

//console.log('pt1')
function bFunction(c) {
//console.log('pt2')
  var z = c.split('\n');
  return z;
}

function aFunction(a, b) {
  //console.log('pt3')
  var f = b(a);
  //console.log('pt4')
  for (var i = 1; i < f.length; i++) {
    var d = f[i].split(',');
    //console.log(d[0], ' is ', d[1], ' years old');
  }
  //console.log('pt5')
}

//console.log('pt6')
aFunction(csv, bFunction);
//console.log('pt7')
