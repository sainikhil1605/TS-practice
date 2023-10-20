"use strict";
// Array is a generic type
// const names: Array<string> = ["Max", "Anna"];
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hi");
//   }, 2000);
// });
// promise.then((data) => {
//   data.split(" ");
// });
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
const mergedObj = merge({ firstName: "Max" }, { age: 30 });
const mergedObj2 = merge({ firstName: "Max", hobbies: ["Sports"] }, { age: 30 });
function countAndPrint(element) {
    let descriptionText = "Got no value.";
    if (element.length == 1) {
        descriptionText = "Got 1 elements.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, "hi"];
}
console.log(countAndPrint("Hi there!"));
console.log(countAndPrint(["Sports", "Cooking"]));
console.log(countAndPrint([]));
// console.log(countAndPrint(10)); !Error number doesnt have length property
function extractAndConvert(obj, key) {
    return "Value" + obj[key];
}
console.log(extractAndConvert({ name: "Max" }, "name"));
// extractAndConvert({ name: "Max" }, "age"); !Error age doesnt exist
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        //   if (this.data.indexOf(item) === -1) {
        //     return;
        //   }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
// textStorage.addItem(100) !Error only strings
const objectStorage = new DataStorage();
objectStorage.addItem({ name: "Max" });
objectStorage.addItem({ name: "Manu" });
// ...
objectStorage.removeItem({ name: "Max" });
console.log(objectStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ["Max", "Anna"];
// names.push("Manu");
const nameobj = { name: "Max", age: 30 };
// nameobj.age = 29;
