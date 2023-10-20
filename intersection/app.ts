type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// Gives the intersection of the two types
const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
const result = add("Max", "Schwarz");
// res
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  //   Type Guard
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

class Car {
  drive() {
    console.log("Driving a car...");
  }
}
class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // Check if the vehicle is a truck
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

interface Bird {
  // Discriminated Unions
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  // Discriminated Unions
  type: "horse";
  runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // Doesnt work
  //   if (animal instanceof Horse) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving with speed" + speed);
}
// moveAnimal({ type: "bird", runningSpeed: 10 }); !Errror
moveAnimal({ type: "bird", flyingSpeed: 10 });

const paragraph = document.querySelector("p");
// const paragraph = document.getElementById("message-output");
// const userInput = <HTMLInputElement>document.getElementById("user-input");

// const userInput = document.getElementById("user-input")! as HTMLInputElement;
const userInput = document.getElementById("user-input");
if (userInput) {
  (userInput as HTMLInputElement).value = "Hi";
}
// userInput.value = "Hi";

interface ErrorContainer {
  // {email: 'Not a valid email', username: 'Must start with a character'}
  [prop: string]: string;
  //   id: string;
  //   age: number; !Error Can only take string
}
const errorBag: ErrorContainer = {
  email: "Not a valid email",
};

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};
console.log(fetchedUserData?.job?.title);

const userInput1 = null;
const storedData = userInput1 ?? "DEFAULT";
