


//Array into generator
function* makeGenLoop(arr) {
for (const item of arr) {
yield item;
}
}
const myGen = makeGenLoop([0, 3, 7, 2, 5]);
console.log(myGen.next());


//Making an object iterable using generator
const myObj = {
name: 'Stanley',
Job: 'Web Dev',
age: 28
}
myObj[Symbol.iterator] = function* () {
for (const prop in this) {
yield this[prop];
}
}
console.log([...myObj]); // > ["Stanley", "Web Dev", 28]
for (const val of myObj) {
console.log(val)
}


// an infinite id maker
function* idMaker() {
var index = 0;
while (true)
yield index++;
}
var gen = idMaker();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3


//going through a bunch of iterators
function* sequence(...iterables) {
for(let iterable of iterables) {
for(let item of iterable) {
yield item;}
}
}
[...sequence("abc",[2])]
//result : ["a","b","c",2,3,5,7]
//and same code using *yeild keyword
function* sequence(...iterables) {
for(let iterable of iterables) {yield* iterable;}
}
console.log([...sequence("abc",[2])])
