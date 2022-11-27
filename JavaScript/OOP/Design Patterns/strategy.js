class CryptoExchange {
	constructor(name, fee) {
		this.name = name;
		this.fee = fee;
	}
	calculate(price) {
		return this.fee * price - price;
	}
}

const binance = new CryptoExchange("Binance", 1.2);
const coinex = new CryptoExchange("Coinex", 1.1);
const kucoin = new CryptoExchange("Kucoin", 1.5);

class OrderExecuter {
	setStrategy(strategy) {
		this.strategy = strategy;
	}
	calculate(price) {
		return this.strategy.calculate(price);
	}
}

const orderExecuter = new OrderExecuter();
const price = 1200;

orderExecuter.setStrategy(binance);
console.log(`Fee for ${price} in ${orderExecuter.strategy.name} is ${orderExecuter.calculate(price)}`);

orderExecuter.setStrategy(coinex);
console.log(`Fee for ${price} in ${orderExecuter.strategy.name} is ${orderExecuter.calculate(price)}`);

orderExecuter.setStrategy(kucoin);
console.log(`Fee for ${price} in ${orderExecuter.strategy.name} is ${orderExecuter.calculate(price)}`);
