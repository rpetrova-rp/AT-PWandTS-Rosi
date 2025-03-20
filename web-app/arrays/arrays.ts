// Arrays
let numbersArray: number[] = [1, 2, 3, 4];

let stringAndNumArr: (number | string)[] = ["Rosi", "Ivan", 1, "3"];

let fruits: string[] = ["apple", "bananas", "pear", "peach", "grape"];
let firstEl: string = fruits[1];
let secondEl: string = fruits[3];

fruits.push("mango");

numbersArray.pop();
fruits.shift();
numbersArray.unshift(5);

let multiplyNumber = numbersArray.map((element: number) => element * 2);

let multiplySpecialNumbers = numbersArray.map((element: number) => {
  if (element > 2) {
    return element * 2;
  } else {
    return element;
  }
});

let filterNumsArray = numbersArray.filter((element) => element > 2);

console.log("filterNumsArray", filterNumsArray);
