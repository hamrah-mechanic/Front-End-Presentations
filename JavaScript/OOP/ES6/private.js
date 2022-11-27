class ClassWithPrivateField {
    #privateField;
  
    constructor() {
      this.#privateField = 42;
      delete this.#privateField; // Syntax error
      this.#undeclaredField = 444; // Syntax error
    }

    get private () {
        return this.#privateField;
    }
  }
  
  const instance = new ClassWithPrivateField();
  console.log(instance.#privateField); // Syntax error
  instance.#privateField === 42; // Syntax error

  // ACCESS to private field
  console.log(instance.private);