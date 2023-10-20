// Work like a custom type
// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }
// custom type is more flexible than interface
// Classes can implement interfaces

// let user1: Person;

// user1 = {
//   name: "Nikhil",
//   greet: (greet) => {
//     console.log("Hi, there!" + greet);
//   },
//   age: 30,
// };

// console.log(user1.greet("Hello"));
interface Named {
  readonly name?: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}
// type AddFn = (a: number, b: number) => number;
// const add: () => number = () => {
//   return 2;
// };
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
let user1: Greetable;
user1 = new Person("Nikhil");
// user1.name = "Test";
console.log(user1);
