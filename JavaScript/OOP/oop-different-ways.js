//Factory Function
function book(title) {
    return {
        title,
    }
}

//Constructor Function
function Book(title) {
    this.title = title;
}

//Constructor Class
class Book2 {
    constructor(title) {
        this.title = title;
    }
}

console.log(book('factory function')); // {title: factory function}, work cuz it's regular function not constructor
console.log(Book('constructor function')); //undefined, not properly work without `new` keyword
console.log(Book2('constructor class')); //Type error, wihtout `new` keyword

//Construcotr function via `new` keyword inside
function Book3(title) {
    this.title = title;
    if(!new.target) return new Book3(title);
}
console.log(Book3('constructor function via new'));