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

	dispatch(message) {
		this.observers.forEach((fn) => fn(message));
	}
}


const observable = new Observable();
const function1 = (message) => {
	console.log(message, "Function 1");
}
const function2 = (message) => {
	console.log(message, "Function 2");
}

observable.subscribe(function1);
observable.subscribe(function2);

observable.dispatch("Dispathing:");

observable.unsubscribe(function2);

observable.dispatch("Dispathing 2nd time:");