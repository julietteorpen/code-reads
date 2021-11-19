function find(arg1){
  let newArg = arg1.sort((a, b) => a.value - b.value)
  return newArg.filter(arg => arg.name.length <= 4)
}
/
/
//
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

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Habiba', value: 37 },
  { name: 'Sofia', value: 45 },
  { name: 'Rute', value: -12 },
  { name: 'Maria', value: 13 },
  { name: 'Joe', value: 37 }
]

console.log(find(items))
