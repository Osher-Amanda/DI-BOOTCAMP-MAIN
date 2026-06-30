// Exercise 1: Class with Access Modifiers

class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(
    name: string,
    salary: number,
    position: string,
    department: string
  ) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  public getEmployeeInfo(): string {
    return `${this.name} - ${this.position}`;
  }
}

// Testing

const employee = new Employee(
  "Osher Amanda Favel",
  50000,
  "Full Stack Developer",
  "IT"
);

console.log(employee.getEmployeeInfo());