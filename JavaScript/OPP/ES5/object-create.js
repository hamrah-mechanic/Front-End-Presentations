//Object of protos
const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getYear: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    },
    revised: function (newYear) {
        this.year = newYear;
        this.revised = true;
    }
}

//way1
const book3 = Object.create(bookProtos);
book3.title = 'book 3';
book3.author = 'sanaz mahmoudi';
book3.year = '2020';
console.log(book3, book3.getSummary());

//way2
const book4 = Object.create(bookProtos, {
    title: { value: 'book 4' },
    author: { value: 'sanaz mahmoudi' },
    year: { value: '2010' }
});
console.log(book4, book4.getYear());

//way3
const book5 = new Book('book 5', 'sanaz mahmoudi', '2016');
book5.prototype = Object.create(bookProtos);
// console.log(book5);
