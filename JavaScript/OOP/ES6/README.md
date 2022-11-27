# Classes

### Basic
As we told before, Javascript does not provide a class implementation per se (the `class` in ES6 is just a syntactical sugar or convenient syntax), so Javascript still remains **prototype-based**.<br />
Classes use prototype-based inheritance: if two objects inherit properties from the same prototype, then we say that those objects are `instances of` the same class.<br />
Some important things, that we should know about the `class` keyword: <br />
1) Class name is **optional**, you can treat it as a function without name. `let Book = class Book {}`
2) All code within the body of class declaration is implicity in **strict mode**, even if no `use strict` directive appears.
3) Unlike function declarations, class declarations are not **hoisted**.
4) if your class doesn't need to do any initialization, you can omit the `constructor` keyword.

```js
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
```

> **NOTE-1**
> A factory function can be defined as a regular function that creates an object and returns it. It is similar to constructor functions/class functions.
> ```js 
> function book(title, author, year) {
>   return {
>       title,
>       author,
>       year,
>       getSummary() {
>           console.log('a method as property');
>       }
>   }
> }
> ```

> **NOTE-2**
> Differences between `constructor function` and `factory function` are: <br />
> 1) there is a convention for constructors that begins with **capital letter** and factory function as a regular function begins with **lowercase letter**.
> 2) constructor initialized with the `new` keyword but you can call the factory function directly as a regular function.
> <div style="color:red;"><b>Tip: </b> `new.target` is an expression to realize that functions are invoked as a function with the `new` keyword or not.</div>


### Static Methods
Static methods are defined as properties of the constructor rather than properties of the prototype object. So for static methods, we don't need to instantiate and we can call it directly on the constructor.<br />
Although it makes no sense to use the `this` keyword in static methods.

```js
class Book {
    constructor() {...};
    static title = 'book title';
    static topBooks() {
        return 'top books';
    }
}
```


### Getter/Setter
As we mentioned getter/setter methods in <a href="../es5/getter-setter.js">opp-es5</a>, within a `class` body, you can define getter/setter methods just as you can in object literal.<br />
**NOTICE:** In general, all of the shorthand method definition syntaxes allowed in object literal, are also allowed in `class` bodies. such as `generator` or `Symbol.iterator`.

```js
class Book {
    constructor(title) {
        this.title = title;
    }
    get bookName() {
        return `book's name is ${this.title}`;
    }
    set bookName(newName) {
        this.name = newName;
    }
}
//bookName: (...) in console as getter/setter method
```


### Classes Without Constructors
With the new instance field syntax that is likely to be standardized, you could write instead of the inside constructor, and write without the constructor.

```js
class Book {
    title = 'book title';
    author = 'sanaz';
    year = 2010;
}
```

> **NOTE-3** 
> The field initialization code has moved out of the constructor but this code is still run as part of the `constructor` and the fields are initialized as part of the implicitly created `constructor`.
> The advantage of initializing your instance fields in this way is that this syntax allows you to put the initializers up at the top of `class` definition, making it clear to readers exactly what fields will hold the state of each instance.<br />
> It is better to style always to make the initial value explicit for all of your class fields and if they don't have an initial value, the initial value of the field will be `undefined`.
> This proposal is like an object literal, except commas. with equals and semicolons makes it clear that class bodies are not at all the same as an object literal.


### Private Fields
The private field begins with `#` (which is normally a legal character in Javascript identifier) and will be usable in the class body but will be invisible and inaccessible(immutable) to any code outside of the class body.

```js
class Book {
    #pageSize = 20;
    get #size() {
        return this.#pageSize;
    }
    set #size(newSize) {
        this.#pageSize = newSize;
    }
    log(newSize) {
        this.#size = newSize;
        console.log(this.#size);
    }
}
const book = new Book();
console.log(book.#pageSize) //syntaxError: private field
book.log(30); //30
```