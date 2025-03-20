// 1.Create an array of strings and add a new element at the end of the array. Log the result.
let singerName: string[] = ["Elvis", "Freddie Mercury", "Bob Dylan"];
singerName.push("Sting");
console.log("Add Sting", singerName);

// 2.Create an array of numbers and remove the first element from the array. Log the result.

let numbers: number[] = [11, 22, 33, 44, 55];
numbers.shift();
console.log("Remove the first number", numbers);

//3.Use the map method to create a new array and divide each number by 2  “num / 2”   from [1, 2, 3, 4, 5].  Log the result.

let myArray: number[] = [1, 2, 3, 4, 5];
let y = myArray.map((x) => x / 2);
console.log("Divide all numbers by 2", y);

//4.Use the filter method to create a new array containing only
//numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.

let mynewArray: number[] = [3, 7, 1, 9, 12, 4];
let z = mynewArray.filter((x) => x > 5);
console.log("numbers greater than 5 are:", z);

//5.Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5]
// in ascending order. Log the result.

let mynewArray1: number[] = [9, 3, 7, 2, 8, 5];
let order = mynewArray1.sort();
console.log("ascending order", order);

//6.	Use the slice method to extract the first three elements from
//['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.

let myfruits: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
let elements = myfruits.slice(0, 3);
console.log("extract the first three elements from", elements);

// 7.	Use the splice method to remove the second and third elements from
//  ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.

let myVehicles: string[] = ["car", "bike", "bus", "train", "boat"];
let elementVehicles = myVehicles.splice(1, 2);
console.log("remove the second and third elements", elementVehicles);

//8.Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them.
// Use if/else statement to find the largest number. Log the result.

//9.Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it and convert to centimeters. Log the result with default parameter and with passed parameter.

//10.Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. If height is not provided, assume the shape is a square.
