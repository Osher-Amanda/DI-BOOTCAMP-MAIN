// Exercise 2: Readonly Properties

class Product {
  readonly id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getProductInfo(): string {
    return `${this.name} - $${this.price}`;
  }
}

// Testing

const product = new Product(1, "Laptop", 1500);

console.log(product.getProductInfo());

// Uncommenting this line will produce a TypeScript error
// product.id = 2;