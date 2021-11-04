function transform (arg1,arg2) {
  let result = "";
  if (typeof arg1 === "object") {
  result = arg1.sort().reverse().join("")
  } 
  let times = arg2.reduceRight((acc,sum)=>acc-sum)
  return new Array(times).fill(result)
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
////
//
//
//
//
////
//
//
//
//
////
//
//
//
//
//
console.log(transform(["g","p","n","s","o","e"],[2,14,56,80]))
