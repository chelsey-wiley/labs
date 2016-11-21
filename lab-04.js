//console.log('pt1')
function aFunction(a, b, c) {

//console.log('pt2')
  c(b);
  
//console.log('pt3')
}

//console.log('pt4')
aFunction(7, 14, function(d) {

//console.log('pt5')
  console.log(d); //What value is logged here?
});
//console.log('pt6')
