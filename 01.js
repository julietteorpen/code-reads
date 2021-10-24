function find(arg){
      let num = 0;
  for(let i =0; i<arg.length; i++) {
    if (arg[i] > num){
      num = arg[i];
    } else {
      return num;
    }
  }
  return num;
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
console.log(find([3,4,5,6]))
//
