// Exercise 3: Class Inheritance

class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Animal sound";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}

// Testing

const dog = new Dog("Buddy");

console.log(dog.makeSound());