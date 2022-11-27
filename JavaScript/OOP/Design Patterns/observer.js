class Observable {
	constructor() {
		this.observers = [];
	}

	subscribe(fn) {
		this.observers.push(fn);
	}

	unsubscribe(fn) {
		this.observers = this.observers.filter((observer) => observer !== fn);
	}

	fire(message) {
		this.observers.forEach((fn) => fn(message));
	}
}

class Books extends Observable {
	constructor(items) {
		super();
		this.items = items;
	}

	fire(fn) {
		this.observers.forEach((fn) => fn(this.items));
	}

	deleteABook(name) {
		this.items = this.items.filter((item) => item.name !== name);
		this.fire();
	}
}

const items = [
	{
		name: "JS",
		type: "tech",
	},
	{
		name: "TS",
		type: "tech",
	},
];

const books = new Books(items);
books.subscribe((message) => {
	console.log("Books' items has been changed:", message);
});

const fn2 = (message) => {
	console.log("Books' items has been changed: ( Second Subscriber )", message);
};
books.subscribe(fn2);

books.deleteABook("JS");

books.unsubscribe(fn2);

books.deleteABook("TS");
