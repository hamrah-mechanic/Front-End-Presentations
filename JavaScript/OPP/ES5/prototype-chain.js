const F = function () {
    this.a = 1;
    this.b = 2;
};

F.prototype.someMethod = function () {
    console.log('some method defined as prototype');
}

const o = new F();

//deprecated access to prototypes
console.log(o.__proto__);

//new version accesss to prototypes
console.log(Object.getPrototypeOf(o));

//do not set the prototype F.prototype = { b: 3, c: 4 };
//this will break the prototype chain
F.prototype.b = 3;
F.prototype.c = 4;

//o.prototype -> {b: 3, c: 4}
//o.prototype.prototype -> Object.prototype -> null
console.log(Object.getPrototypeOf(o), o)

//o has 'b' property ? yes.
console.log(o.b); //2

//o has 'c' property ? no.
//o has 'c' property on o.[[Property]] ? yes.
//o inherit peroperties and methods from prototype.
console.log(o.c); //4


//o has 'd' property ? no.
//o has 'd' property on o.[[Prototype]] ? no.
//o has 'd' property on o.[[Prototype]].[[Prototype]](Object.prototype) ? no
//o has 'd' property on o.[[Prototype]].[[Prototype]]/[[Prototype]](null) ? no
console.log(o.d); //undefined