class Book {
  constructor(items) {
    this.items = items;
  }

  changeAnItem(func) {
    func(this);
  }
}

const book = new Book([
  {
    name: "JS",
  },
  {
    name: "TS",
  },
]);

book.changeAnItem((obj) => {
  obj.items.forEach((_) => {
    _.name = _.name + " Book";
  });
});

console.log(book.items);

/*************************************************************/
//Another Example
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
  setSalary(newSalary) {
    this.salary = newSalary;
  }
  accept(visitorFunc) {
    visitorFunc(this);
  }
}

const employee = new Employee();
employee.setSalary(200);
console.log(employee.getSalary());

const extraSalary = (emp) => {
  emp.setSalary(emp.getSalary() * 2);
};

employee.accept(extraSalary);
console.log(employee.getSalary());
