// let vs const
let number: number = 5;
number = 10;
console.log("10");

const message: string = "Welcome";

// String
let welcomeMessage: string = "Hello, Rosi!";
let test: string = "Rosi";

let welcomeMessageLength = welcomeMessage.length;
console.log("welcomeMessageLength", welcomeMessageLength);

// String interpolation
let welcomeMessageDetails: string = `My welcome message length is ${welcomeMessageLength}`;
let userWelcomeMessage: string = `Welcome, ${test}`;
console.log(welcomeMessageLength);

// Number
let firstNumber: number = 5;
let secondNumber: number = 10;

//Number math operations
let add: number = secondNumber + firstNumber;
let substract: number = secondNumber - firstNumber;
let multiply: number = secondNumber * firstNumber;
let divide: number = secondNumber / firstNumber;

// Boolean (true/false)

let isGreater: boolean = firstNumber > secondNumber;
let isLower: boolean = firstNumber < secondNumber;
let isEqual: boolean = firstNumber === secondNumber;
let isGreaterOrEqual: boolean = firstNumber >= secondNumber;
let isLowerOrEqual: boolean = firstNumber <= secondNumber;

let areNumberaEqualTo: boolean = 5 === firstNumber && 10 === secondNumber;
let isAnynumberEqualTo: boolean = 6 === firstNumber || 10 === secondNumber;

//Any
let stringValue: any = "Hello";
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10, 20, 30];

console.log("isGreater", isGreater);
console.log("isLower", isLower);
console.log("isEqual", isEqual);
console.log("isGreaterOrEqual", isGreaterOrEqual);
console.log("areNumberEqualTo", areNumberaEqualTo);
console.log("isAnyNumberEqualTo", isAnynumberEqualTo);

// Ternary operator
const isPositiveNum: string =
  5 > 0 ? "The numebr is positive" : "The numenr is negative";
console.log(typeof isPositiveNum);

const age: number = 50;
const myName: string = "Rosi";

const personDescription =
  age < 40
    ? `${myName} is younger then 40. He is ${age} year old.`
    : `${myName} is older than 40. He is ${age} year old.`;

const personName = `His name is "${myName}"`;

console.log("personName", personName);

// If Else statement

if (age < 40) {
  console.log("Age are lower then 40");
} else {
  console.log("Age are greater then 40");
}

const num: number = 50;

if (num <= 10) {
  console.log("The numebr is lower or equal o 10");
} else if (num > 80) {
  console.log("The numebr is greater than 80 and less than 100.");
} else if (num >= 100) {
  console.log("The number is greater than 100.");
} else {
  console.log("The numebr is betwen 10 and 100.");
}

// Type Arrays
type PersonInfoType = string | number;

const personNameInf: PersonInfoType = "Rosi";
const personAgeInf: PersonInfoType = 42;

//предефинирани параметри
type Status = "approved" | "rejected" | "pending" | "fullfiled";
const currentStatus: Status = "fullfiled";

type PersonData = {
  name: string;
  lastName: string;
  age: number;
  city?: string;
};

//function displayPersonDate({ age, lastName, name, city }: PersonData) {
 // if (city) {
  //  return `${name} ${lastName} from ${city}`;
 // }
  //return `${name} ${lastName} is ${age} years old.`;
//}
//displayPersonDate(42, "Rosi", "Petrova");


