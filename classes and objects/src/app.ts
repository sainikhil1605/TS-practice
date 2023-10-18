abstract class Department {
  //  readonly private id: string;
  //   private name: string;
  static fiscalYear = 2020;
  protected employees: string[] = [];
  // Omiting field declaration in constructor
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }
  static createEmployee(name: string) {
    return { name: name };
  }
  addEmployee(employee: string) {
    // Id is readonly
    // this.id = "d2";
    this.employees.push(employee);
  }
  printEmployeeInfromation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  abstract describe(this: Department): void;
}
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
  describe(): void {
    console.log("IT department - ID: " + this.id);
  }
}
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No report found");
    }
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
  describe(): void {
    console.log("Accounting department - ID: " + this.id);
  }
}

const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");

console.log(it);
const accounting = new AccountingDepartment("d1", []);
// accounting.id = "d2";
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
// Should not be supported
// accounting.employees[2] = "Anna";
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");
accounting.addEmployee("Manu");
// accounting.describe();
accounting.printEmployeeInfromation();

// const accountCopy = { describe: accounting.describe };
// console.log(accounting);
// accounting.describe();
// accountCopy.describe();
