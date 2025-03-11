// Exercise One
// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string

interface Country {
  name: string;
  capital: string | "London";
  population: number;
  language: string;
}
// Step Two: Declare an object "country" with properties following "Country" interface

const firstcountry: Country = {
  name: "UK",
  capital: "London",
  language: "english",
  population: 69000000,
};
const secondcountry: Country = {
  name: "Italy",
  capital: "Rome",
  language: "italian",
  population: 59000000,
};

// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
//displays the details for it

function displayCountryDetails(countryObj: Country): string {
  return `The capital of ${countryObj.name} is ${countryObj.capital}.
   The official language is ${countryObj.language} and population of ${countryObj.population} people;`;
}
const detailsaboutUK = displayCountryDetails(firstcountry);
const detailsaboutItaly = displayCountryDetails(secondcountry);
console.log(detailsaboutUK, "\n ", detailsaboutItaly);
//console.log(country.population);

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number
interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

// Step Two: Declare an object with properties following interface "Student"
const studentOne: Student = {
  id: 1,
  name: "Rosi",
  age: 19,
  grade: 6,
};
const studentTwo: Student = {
  id: 2,
  name: "Ani",
  age: 2,
  grade: 3,
};
const studentThree: Student = {
  id: 3,
  name: "Dani",
  age: 5,
  grade: 5,
};

// Step Three: Declare array "students" with objects of type "Student"
let studentsArr: Student[] = [studentOne, studentTwo, studentThree];

// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result
function getStudents(students: Student[]): string[] {
  return students.map((student) => student.name);
}
const studentsNames = getStudents(studentsArr);
console.log("studentNames", studentsNames);

//

//Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending
