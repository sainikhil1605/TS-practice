"use strict";
const userName = "Nikhil";
// const add = (a: number, b: number) => {
//   return a + b;
// };
// console.log(add(2, 3));
// const add = (a: number, b: number) => a + b;
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
    console.log(event);
});
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
const person = {
    name: "Nikhil",
    age: 30,
};
const copiedPerson = Object.assign(Object.assign({}, person), { hobbies: [...hobbies] });
// const copiedPerson = person;
person.age = 31;
// copiedPerson.hobbies = [...hobbies];
console.log(copiedPerson);
const add = (...numbers) => {
    let res = 0;
    numbers.reduce((curResult, curValue) => {
        return (res = curResult + curValue);
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.6);
const [, b, c, ...d] = [1, 2, 4, 5];
const { name: firstName, age } = person;
//# sourceMappingURL=app.js.map