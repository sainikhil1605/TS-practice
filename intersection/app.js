"use strict";
var _a;
// Gives the intersection of the two types
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("Max", "Schwarz");
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log("Loading cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // Check if the vehicle is a truck
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
function moveAnimal(animal) {
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
    userInput.value = "Hi";
}
const errorBag = {
    email: "Not a valid email",
};
const fetchedUserData = {
    id: "u1",
    name: "Max",
    job: { title: "CEO", description: "My own company" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput1 = null;
const storedData = userInput1 !== null && userInput1 !== void 0 ? userInput1 : "DEFAULT";
