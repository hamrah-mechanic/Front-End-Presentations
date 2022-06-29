function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
//instantiate an Object
const book2 = new Book('book 2', 'sanaz mahmoudi', '2017');

/*************************************************************/
//create prototype - ES5
Book.prototype.getSummary2 = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}
console.log(book2, book2.getSummary2());

Book.prototype.getYear = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}
console.log(book2.getYear());

Book.prototype.revised = function (newYear) {
    this.year = newYear;
    this.revised = true;
}
console.log(book2);
book2.revised(2019);
console.log(book2);
console.log(Object.keys(book2));