// Functions

function greet(): void {
  console.log("Hello to functions!");
}
greet();
function multiplyNums(numberOne: number, numberTwo: number): number {
  return numberTwo * numberOne;
}

multiplyNums(2, 5);

function displayGreeting(
  firstName: string,
  lastName: string,
  age: number
): string {
  return `Hello, Mr${lastName}, ${firstName}.You ae ${age} years old.}`;
}
const greeting: string = displayGreeting("Rosi", ",Petrova", 42);
console.log(greeting);
// First parameter can not  be an optional parameter
function dispalyPetInfo(name: string, animal: string, age?: number): string {
  return `${name} is ${animal} ${age ? `is  ${age} years old.` : ""}`;
}
//console.log(dispalyPetInfo("Spike", "dog"));
//console.log(dispalyPetInfo("Spike", "dog", 5));

function substractNumber(firstNum: number = 10, secondNum: number = 5): number {
  return firstNum - secondNum;
}

console.log(substractNumber(20));
