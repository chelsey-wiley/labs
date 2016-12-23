var stuff = [ 1, 2, 5, 33, 2,];

var filtered = stuff.filter(function(obj){
  if(obj>10){
    return true
  }
  else {
    return false
  }
});

console.log('filtered:', filtered)

// if you want it in the output array return true if not return false


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
