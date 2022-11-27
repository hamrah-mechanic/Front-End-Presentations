//Constructor - ES5
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//Instantiate an Object
const book2 = new Book('book 2', 'sanaz mahmoudi', '2017');
const book3 = new Book('book 3', 'sanaz mahmoudi', '2016');
console.log(book2, book2.title, book2.getSummary());