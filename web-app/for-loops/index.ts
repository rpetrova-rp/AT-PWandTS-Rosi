// for... of loop -връща стойностите.
let fruits: string[] = ["Apple", "Banana", "Peach", "Watermelon"];

//for ... of loop access only array values
for (let fruit of fruits) {
  console.log(`Fruit is ${fruit}`);
}

//for ...of over array of numbers

let numbers: number[] = [10, 20, 30, 40];
for (let number of numbers) {
  if (number > 20) {
    console.log(`number plus 5 is ${number + 5}`);
  } else {
    console.log(`${number} plus 5 is ${number + 5}`);
  }
}

// for ...string

let message: string = "Hello world!";
//let modifiedMessagge = welcomeMessage.replaceAll("t", "");
//console.log(modifiedMessagge);
//console.log(welcomeMessage);
for (let letter of message) {
  if (letter === "o") {
    console.log(letter.replace("o", "@"));
  } else {
    console.log(letter);
  }
}

//for ... in loop се изпозлва за обхождане на обекти, а не стойностите.
interface Student {
  name: string;
  lastName: string;
  age: number;
}
const student: Student = { name: "Rosi", lastName: "Petrova", age: 42 };
for (let key in student) {
  // accessing object value by passing object key as keyof student
  // (за да вземем стойноста на обекта)
  console.log(`${key} = ${student[key as keyof Student]}`);
}

//for ..in over arrey
let numsArr: number[] = [35, 25, 45, 50];
for (let index in numsArr) {
  // accessing array value by passing array index
  //console.log(`${index}=${numsArr[index]}`);
}
//for loop
for (let i = 0; i <= 5; i++) {
  //console.log(`index${i}`);
}
//for loop over arrey

let numbersArr: number[] = [35, 25, 45, 50, 35, 25, 45, 50, 45, 50];
//for loop incrementation
for (let i = 0; i < numbersArr.length; i++) {
  if (numbersArr[i] <= 25) {
    //console.log(numbersArr[i]);
  } else {
    console.log(numbersArr[i] / 2);
  }
}

//for loop decrementation

for (let i = 30; i >= 0; i--) {
  console.log(i);
}
export {};
