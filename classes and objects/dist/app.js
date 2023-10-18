"use strict";
class Department {
    // Omiting field declaration in constructor
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        // Id is readonly
        // this.id = "d2";
        this.employees.push(employee);
    }
    printEmployeeInfromation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
//  readonly private id: string;
//   private name: string;
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT department - ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error("No report found");
        }
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
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
//# sourceMappingURL=app.js.map