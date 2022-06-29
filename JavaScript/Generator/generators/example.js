

// function* oneDigitPrimes() { 
//   yield 3;
//   yield 5;
//   yield 7;
//   }
//   let primes = oneDigitPrimes();
//   console.log(primes.next())
//   console.log(primes.next())
//   console.log(primes.next())
//   console.log(primes.next())
//   console.log(primes.next())
//   console.log(primes.next())


/*
// Here is the first example (looping arrays using generators to pause and resume):
function* makeGenLoop(arr) {
  for (const item of arr) {
    yield item;
  }
}

const myGen = makeGenLoop([0, 3, 7, 2, 5]);
console.log(myGen.next());
// Here is the infinitely looping array:
function* makeGenLoop(arr) {
  for (let i = 0;; i++) {
  if (i === arr.length) i = 0;
    yield arr[i];
  }
}

const myGen = makeGenLoop([0, 3, 7, 2, 5]);
console.log(myGen.next());
// Here is how to make an iterable from an object:
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
// and using a similar method, you can convert objects to Maps, which can become super useful in some instances:

const myObj = {
  name: 'Stanley', 
  Job: 'Web Dev', 
  age: 28
}

myObj[Symbol.iterator] = function* () {
  for (const prop in this) {
    yield [prop, this[prop]];
  }
} 

const objectMap = new Map(myObj);
console.log(objectMap.get('name')); // > "Stanley"
*/

// function* fibonacciSequence() {
//   let x = 0, y = 1;
//   for(;;) {
//   yield y;
//   [x, y] = [y, x+y]; // Note: destructuring assignment
//   }
//   }
//   function fibonacci(n) {
//     for(let f of fibonacciSequence()) {
//     if (n-- <= 0) return f;
//     }
//     }
//   fibonacci(20)

let array = [3];
console.dir(array)
//https://itnext.io/a-quick-practical-use-case-for-es6-generators-building-an-infinitely-repeating-array-49d74f555666
//https://exploringjs.com/es6/ch_generators.html#_use-case-simpler-asynchronous-code
//https://dev.to/rfornal/javascript-enjoys-your-tears-4el
//https://github.com/sidvishnoi/respec-github-apis/blob/main/issue-commentors.ts

//implement an iterator
function words(s) {
  var r = /\s+|$/g;
  // Match one or more spaces or end
  r.lastIndex = s.match(/[^ ]/).index; // Start matchin  at first nonspace
  return {
  // Return aniterable iterator object
  [Symbol.iterator]() {
  // This makes usiterable
  return this;
  },
  next() {
  // This makes us an iterator
  let start = r.lastIndex;
  // Resume where the last match ended
  if (start < s.length) {
  // If we're notdone
  let match = r.exec(s);
  // Match the next word boundary
  if (match) {
  // If we found one, return the word
  return { value: s.substring(start,
  match.index) };
  }
  }
  return { done: true };
  // Otherwise, say that we're done
  }
  };
  }
  [...words(" abc defghi! ")]