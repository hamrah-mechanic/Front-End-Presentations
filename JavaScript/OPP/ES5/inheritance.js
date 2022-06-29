function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

/*************************************************************/
//inheritance
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

//instantiate object
const mag1 = new Magazine('mag1', 'sanaz mahmoudi', '2012', 'fab');
console.log(mag1);
// console.log(mag1.getSummary2()); //typeError: is not function

/*************************************************************/
//inheritance prototypes
Magazine.prototype = Object.create(Book.prototype);
const mag2 = new Magazine('mag2', 'sanaz mahmoudi', '2014', 'jan');
console.log(mag2, mag2.getSummary());

/*************************************************************/
//use Magazine Construstor
Magazine.prototype.constructor = Magazine;
console.log(mag2);