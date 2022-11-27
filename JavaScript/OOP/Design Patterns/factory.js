class HorrorBook {
	constructor(name) {
		this.name = name;
	}
}

class ScienceBook {
	constructor(name) {
		this.name = name;
	}
}

class BookFactory {
	createBook(name, type) {
        if(type == "science"){
            return new ScienceBook(name);
        }else {
            return new HorrorBook(name);
        }
    }
}

const bookFactory = new BookFactory();
bookFactory.createBook("JS", "science");



