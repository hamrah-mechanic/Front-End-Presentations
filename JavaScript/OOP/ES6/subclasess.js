class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getYear() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revised(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBooks() {
        return 'top books';
    }
}

/*************************************************************/
//Subclasses - Inheritance Classes
//no need inhertance protos in classes ES6
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

//Instantiate object
const mag3 = new Magazine('mag3', 'sanaz mahmoudi', '2019', 'juli');
console.log(mag3, mag3.getSummary());