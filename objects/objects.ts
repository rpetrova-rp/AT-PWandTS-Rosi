//Objects types with type aliases
type Role = {
  role: "manager" | "founder";
};
type Permissions = {
  permissions: "admin" | "user";
};
type User = Role & Permissions;

const user: User = {
  role: "founder",
  permissions: "admin",
};
console.log("useObjects", user);

//Objects types with Interface

interface Animal {
  species: string;
  breed?: string;
  age: number;
  weight?: number;
  name: string;
}

const animal: Animal = {
  species: "dog",
  age: 5,
  name: "Tom",
  breed: "Frenchie",
  weight: 3,
};
console.log("animal", animal);

interface Cars {
  color: string;
  wheels: number;
  transmission: "manual" | "automatic";
  fueltype: "diesel" | "gasoline";
  startEngine: () => string;
}

const car: Cars = {
  color: "white",
  wheels: 4,
  transmission: "manual",
  fueltype: "diesel",
  startEngine: function () {
    return "Start the engine";
  },
};
// get object keys

const keys = Object.keys(car);
console.log("keys", keys);
//get object values
const values = Object.values(car);
console.log("values", values);

//object two objects in one

const colorObj = {
  color: "black",
};
const backgroundObj = {
  background: "white",
};
const assignedObj = Object.assign({}, colorObj, backgroundObj);
console.log("assgnedObj", assignedObj);

//const carStarEngine = car.transmission;
//console.log("car", car.startEngine());
export {};
