//Which console log runs first?

//console.log('pt1')
function aFunction(a) {

  //console.log('pt2')
  a();

  //console.log('pt3')
  console.log('that one');
}

//console.log('pt4')

aFunction(function() {

  //console.log('pt5')
  console.log('this one');
});
//console.log('pt6')
