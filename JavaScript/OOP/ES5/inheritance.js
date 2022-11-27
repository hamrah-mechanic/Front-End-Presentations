function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

/*************************************************************/
//Inheritance
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

//Instantiate object
const mag1 = new Magazine('mag1', 'sanaz mahmoudi', '2012', 'fab');
console.log(mag1);
// console.log(mag1.getSummary2()); //typeError: is not function

/*************************************************************/
//Inheritance prototypes
Magazine.prototype = Object.create(Book.prototype);
const mag2 = new Magazine('mag2', 'sanaz mahmoudi', '2014', 'jan');
console.log(mag2, mag2.getSummary());

/*************************************************************/
//Use Magazine Construstor
Magazine.prototype.constructor = Magazine;
console.log(mag2);