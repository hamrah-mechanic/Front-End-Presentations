//Object literal
const symbol = Symbol('sym1');
const book1 = {
    "main title": 'book1',
    "author-name": 'sanaz mahmoudi',
    "release_date": '2018',
    "": "empty property name",
    for: "reserved word",
    symbol: "symbol ES6",
    other_info: {
        publisher: "O'REILLY",
        sold: true
    },
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getNameByArrow: () => this.title
}
console.log(book1, book1.title, book1.getSummary(), book1.getNameByArrow());
console.log(Object.values(book1)); //values of properties and 'f' for methods
console.log(Object.keys(book1));
