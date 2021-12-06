# JS methods to use:
*  .forEach - practice using!
*  .find()
*  slice with negative arguments 
*  .flat
*  .reduceRight
*   x in a - returns boolean - see empty slots lesson
*   for.... in - to iterate over keys
*   Object keys and for loops - e.g. `for (const key of Object.keys(obj))` 


# Other JS to practice/ use
* Getters and setters - e.g. 
`const user = {
  realName: 'Amir',
  get userName() { return this.realName; },
  set userName(newName) { this.realName = newName; },
};
user.userName = 'Betty';
[user.realName, user.userName];`
* Setter property returning undefined when read
* Generator functions 
* `function* numbersInRange(min, max) {
  for (let i=min; i<max; i++) {
    yield i;
  }
}`

## Examples that highlight potentail bugs
*   forEach and map and other array methods that skip empty slots


## Regex
* Use regex as a filter 
