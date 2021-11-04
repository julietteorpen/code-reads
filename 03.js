function find(arg){
  let result = [];
if (arg.every(el => el % 2 === 0)){
  arg.forEach(i => result.push(i));
} else if (arg.some(el => el % 2 === 0)) {
  result = arg.filter(el => el % 2=== 0)
}
return result;
}
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
console.log(find([2,4,6]))
