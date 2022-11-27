# OBJECTS

### Basic
Objects are unordered named collections for properties and methods.
- Each property has a name and a value. (the state)
- Property names can be a string literal, Javascript identifier, reserved keywords, Symboles(ES6), and also an empty string allowed.
- Property values can be primitive values or object values.
- Methods are executable functions. (the behavior)
- Objects are known as string-value mapping or **hash**, **hashtable**, **dictionary** or **associative array**.
- Objects are mutable and manipulated by reference rather than value.
- For each property, you can define 6 properties:
    1. value
    2. configurable
    3. writable
    4. enumerable
    5. get
    6. set

> **NOTE-1**
> Everything in Javascript is an object, which means even primitive values (except **null** and **undefined**) have built-in methods and behave like an object.
> primitive value is not an actual object but once we call a method on it, Javascript behind the scenes adds a wrapper to it and you can actually create it as an object.

> **NOTE-2**
> **window** is the absolute parent object. basically, there is nothing above on it in DOM, so instead of using `window.property` or `window.method()`, we can directly call `property` or `method()`.


### Object Literal
In the simplest and most accessible form, you can create an object, a comma-separated list of colon-separated `name:value` pairs that are enclosed in curly braces.

```js
let book = {
    title: "Javascript",
    author: "Brenden Eich",
    date: 1993,
    getSummary: function () {
        return `${this.title} is written by ${this.author} in ${this.year}`;
    }
};
```

> **NOTE-3** 
> String literals can be delimited with backticks. But this is more than string literal syntax because these **template literals** can include arbitrary Javascript expressions.


### Constructor (ES5)
It's just a function, you can define it once and use it many times instead of creating many object literals.

```js 
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
         return `${this.title} is written by ${this.author} in ${this.year}`;
    }
}
const book = new Book('Javascript', 'Brenden Eich', 1993);
```
> **NOTE-4**
> The `new` keyword creates and initializes a new object. it must be followed by an invocation function called `constructor` and serve to initialize a newly created object.
> constructors serve as the public identity of a class.
> Javascript includes constructors for its built-in types, such as :
> `new Object()`, `new String()`, `new Date()`, or `new Custom_Construcor()`


### Prototypes
When we define prototypes for a constructor, that means we don't need this method for every instance of the object and it specifies in prototype properties `__proto__` or `Object.getPrototypeOf()`.
Also, you can't access to prototype as a key of an object.

```js
Book.prototype.getSummary = function() {
    return `${this.title} is written by ${this.author} in ${this.year}`;
}
```

> **NOTE-5** 
> Javascript does not provide a class implementation per se (the `class` in ES6 is just a syntactical sugar or convenient syntax), so Javascript still remains **prototype-based**.
> **Prototype** is an object that is associated with every function and object by default in JavaScript.
> Tath means Javascript has only one construct for inheritance and that is `objects`.
> Each object has a `prototype` to link and inherit some properties and methods from another object and the object prototype has a prototype of its own, and so on until an object is reached with `null` as its prototype.
> This linked series of prototype objects is known as a **prototype chain**.
> ` Book → Book.prototype → Object.prototype → null `
> ` Date → Date.prototype → Object.prototype → null `
> <div style="color:red;"><b>Tip: </b>Object.prototype is one of the rare objects that has no property and it doesn't inherit any properties.</div>


### Inheritance
- For inheritance, we just use `call()` methods. but this method is just for inheriting the keys and values of an object.
- For inheriting prototypes, we can use `Object.create()` method.

> **NOTE-6**
> There are 2 methods for creating objects, with the `new` keyword or `Object.create()`.
> As we told before, we use `Object.create()` for inheriting prototypes but it's also another method for creating objects.


### Getter/Setter
Javascript also supports accessor properties, which do not have a single value but instead have one or two accessor methods: `getter and/or setter`. <br />
Accessor properties can be defined in the object literal and introduced in ES5.

```js
const book = {
    name: 'javascript',
    get booKName() {
        return `book's name is ${bookName}`;
    },
    set bookName(newName) {
        this.name = newName;
    }
}
book.name // javascript
book.name = 'react';
book.name // react
```

> **NOTE-7** 
> <div style="color:red;"><b>Tips: </b></div><br />
> 1) We can call `get` methods as properties.<br />
> 2) Reassign `set` methods and you have an access to properties.<br />
> 3) By `get` and `set` methods you have access to properties for reading and writing. 