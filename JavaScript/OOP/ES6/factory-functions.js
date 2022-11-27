//A simple Javascript class
function range(from, to) {
    //create methods as prototypes
    let r = Object.create(range.methods);
    r.from = from;
    r.to = to;
    return r;
}

range.methods = {
    includes(x) {
        return this.from <= x && this.to >= x;
    },
    *[Symbol.iterator]() {
        for (let i = Math.ceil(this.from); i <= this.to; i++) yield i;
    }
}

let r = range(1, 3);
console.log(r);
console.log(r.includes(2));
console.log([...r]);

/*************************************************************/
//Another example
function book(title, author, year) {
    console.log(new.target); //undefined -> not invoked by `new` keyword
    //create methods as prototypes
    let b = Object.create(book.methods);
    b.title = title;
    b.author = author;
    b.year = year;
    return b;
}

book.methods = {
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

let b = book('book 1', 'sanaz mahmoudi', 2010);
console.log(b);
console.log(b.getSummary());