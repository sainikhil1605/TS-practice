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

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

const mergedObj = merge({ firstName: "Max" }, { age: 30 });
const mergedObj2 = merge(
  { firstName: "Max", hobbies: ["Sports"] },
  { age: 30 }
);
// console.log(mergedObj.)
// Typescript doesnt know if mergedObj has a name property
// mergedObj.name;
interface Lengthy {
  length: number;
}
function countAndPrint<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value.";
  if (element.length == 1) {
    descriptionText = "Got 1 elements.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, "hi"];
}

console.log(countAndPrint("Hi there!"));
console.log(countAndPrint(["Sports", "Cooking"]));
console.log(countAndPrint([]));
// console.log(countAndPrint(10)); !Error number doesnt have length property

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value" + obj[key];
}
console.log(extractAndConvert({ name: "Max" }, "name"));
// extractAndConvert({ name: "Max" }, "age"); !Error age doesnt exist

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    //   if (this.data.indexOf(item) === -1) {
    //     return;
    //   }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
// textStorage.addItem(100) !Error only strings

const objectStorage = new DataStorage<object>();
objectStorage.addItem({ name: "Max" });
objectStorage.addItem({ name: "Manu" });
// ...
objectStorage.removeItem({ name: "Max" });
console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}
const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu");
const nameobj: Readonly<object> = { name: "Max", age: 30 };
// nameobj.age = 29;
