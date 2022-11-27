class Iterator {
    constructor(iterable){
        this.counter = -1;
        this.iterable = iterable;
    }
    hasNext(){
        return this.counter < this.iterable.length - 1;
    }
    next(){
        return this.iterable[++this.counter];
    }
}

const items = new Iterator([1,2,3]);

//Usage
// console.log(items, items.hasNext());
// console.log("Next Item:", items.next(), items.hasNext(), items.counter);
// console.log("Next Item:", items.next(), items.hasNext(), items.counter);
// console.log("Next Item:", items.next(), items.hasNext(), items.counter);

while(items.hasNext()) {
    console.log("Next Item:", items.next(), items.hasNext(), items.counter);
}