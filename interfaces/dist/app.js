"use strict";
// Work like a custom type
// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }
// custom type is more flexible than interface
// Classes can implement interfaces
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let add;
add = (n1, n2) => {
    return n1 + n2;
};
let user1;
user1 = new Person("Nikhil");
// user1.name = "Test";
console.log(user1);
