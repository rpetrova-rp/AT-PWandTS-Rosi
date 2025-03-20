//  Exercise 1: Check if a number is even or odd
let newNumber: number = 6;
let isEven: boolean = newNumber % 2 !== 0 || newNumber % 2 == 1;
console.log("the number is even or odd", isEven);

// Exercise 2: Check if a string has more than 10 characters

let text: string = "HomeworkTypeScript";
let isLong: boolean = text.length > 10;
console.log("Has a string more than 10 characters", isLong);

// Exercise 3: Verify if a number is positive

let positriveNumber: number = 31;
let isPositive: boolean = positriveNumber > 0;
console.log("Is my number positive", isPositive);

//Exercise 4: Determine if a number is negative or zero

let numCheck: number = 29;
let isNotPositive: boolean = numCheck >= 0;
console.log("Is my number negative", isNotPositive);

//Exercise 5: Check if a string is empty

let newNessage: string = "Exercise5";
let isEmpty: boolean = newNessage.length === 0;
console.log("Is my string empty", isEmpty);

//Exercise 6: Determine if a number is within a range (10 to 100 inclusive)

let rangeNumber: number = 18;
let isInRange: boolean = rangeNumber >= 10 && rangeNumber <= 100;
console.log("correct range", isInRange);

//Exercise 7: Check if a number is either 0 or 100
let specialNumber: number = 54;
let isZeroOrHundred: boolean = specialNumber === 0 || specialNumber === 100;
console.log("either 0 or 100", isZeroOrHundred);

// Exercise 8: Verify if a boolean value is true
let flag: boolean = true;
let isTrue: boolean = flag === true;
console.log("Is boolean value is true", isTrue);

//Exercise 9: Check if a number is odd and greater than 50
let oddCheck: number = 1;
let isOddAndLarge: boolean = oddCheck % 2 !== 0 && oddCheck > 50;
console.log("Is my numebr odd and greater than 50", isOddAndLarge);

//Exercise 10: Determine if a string starts with the letter 'A'
let word: string = "Exercise10";
let startWithA: boolean = word >= `A` && word <= `A`;
console.log("Does my word start with A", startWithA);
