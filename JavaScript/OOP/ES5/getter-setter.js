//Getter/Setter in object literal
const person = {
    firstName: 'Sanaz',
    lastName: 'Mahmoudi',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(newValue) {
        this.firstName = newValue.split(" ")[0];
        this.lastName = newValue.split(" ")[1];
    }
}

console.log(person.fullName);
person.fullName = 'Mohammd Balkhani';
console.log(person);