class Counter {
	static instance;
	static getInstance() {
		if (!Counter.instance) Counter.instance = new Counter();
		return Counter.instance;
	}

	counter = 0;
	getCount() {
		return this.counter;
	}

	increment() {
		this.counter = this.counter + 1;
		return this.counter;
	}
}

//Usage
const CounterInstance = Counter.getInstance();
const CounterInstance2 = Counter.getInstance();
CounterInstance === CounterInstance2 // true


//Works with new
class Counter {
	static instance;
	constructor(x) {
		this.x = x;
		if (!Counter.instance) Counter.instance = this;
		return Counter.instance;
	}

	counter = 0;
	getCount() {
		return this.counter;
	}

	increment() {
		this.counter = this.counter + 1;
		return this.counter;
	}
}

//Usage
const CounterInstance = new Counter();
const CounterInstance2 = new Counter();
CounterInstance === CounterInstance2 // true
