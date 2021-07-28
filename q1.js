const arr = [9,2,3,2,6,6];

function  findFirstUnique(arr){ 
  return arr.find(function(x){
  return arr.indexOf(x) === arr.lastIndexOf(x);
  
  }   )
  }
//   var arr = [9,2,3,2,6,6];
console.log( findFirstUnique(arr));