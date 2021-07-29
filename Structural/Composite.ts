interface IEmployee {
  getName(): string;
  setSalary(salary: number): void;
  getSalary(): number;
}

class Developer implements IEmployee {
  protected salary: number;
  protected name: string;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  getName(): string {
    return this.name;
  }
  setSalary(salary: number) {
    this.salary = salary;
  }
  getSalary(): number {
    return this.salary;
  }
}

class Designer implements IEmployee {
  protected salary: number;
  protected name: string;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  getName(): string {
    return this.name;
  }
  setSalary(salary: number) {
    this.salary = salary;
  }
  getSalary(): number {
    return this.salary;
  }
}

class Organization {
  protected employees: Array<IEmployee> = [];
  addEmployee(employee: IEmployee) {
    this.employees.push(employee);
  }

  getNetSalaries() {
    let totalSalary = 0;
    this.employees.forEach(function (employee) {
      totalSalary += employee.getSalary();
    });
    return totalSalary;
  }
  //   getNetSalaries = () =>
  //     this.employees.reduce(
  //       (totalSalary, employee) => (totalSalary += employee.getSalary()),
  //       0
  //     );
}

export default function sampleComposite() {
  // Prepare the employees
  const john = new Developer("John Doe", 12000);
  const jane = new Designer("Jane", 10000);
  // Add them to organization
  let organization = new Organization();
  organization.addEmployee(john);
  organization.addEmployee(jane);
  console.log("Net salaries: " + organization.getNetSalaries());
}
