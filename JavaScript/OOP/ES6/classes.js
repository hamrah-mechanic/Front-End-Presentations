//Classes - ES6
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

    get bookName() {
        return `${this.title}`;
    }
    
    set bookName(newTitle) {
        this.title = newTitle;
    }
}

//Instantiate object
const book7 = new Book('book7', 'sanaz', '2013');
console.log(book7, book7.getSummary(), book7.getYear(), book7.revised('2018'));
console.log(Object.keys(book7));

//Static
console.log(Book.topBooks());

//Getter/Setter
console.log(book7.bookName);
book7.bookName = 'book7**';
console.log(book7);

/*************************************************************/
//Without Constructor
class Book2 {
    title = 'book 8';
    author = 'sanaz mahmoudi';
    year = 2010;
}

const book8 = new Book2();
console.log(book8);