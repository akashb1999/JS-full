//let you have a function of 2 paramiters and calculate the value of (ab**2 + b ** 3 - a ** 5) / (a + b) and return it.
// console.log("--Q1--");

// function calculate(a, b) {
//     return (a * b ** 2 + b ** 3 - a ** 5) / (a + b);
// }
// console.log(calculate(2, -1));
console.log("-------------------------------------------------");
console.log("-------------------------------------------------");

//make a function named of calculation and it will receave two numbers and then find out addition , substraction , multification, division and reminder of those results. with a table
// console.log("--Q2--");
// function calculation(a, b) {
//     console.log("Addition: " + (a + b));
//     console.log("Substraction: " + (a - b));
//     console.log("Multification: " + (a * b));
//     console.log("Division: " + (a / b));
//     console.log("Reminder: " + (a % b));
// }
// calculation(12, 8);
// console.log("----------------");
// calculation(-20, 7);
console.log("-------------------------------------------------");
console.log("-------------------------------------------------");

// //make function which will calculate the value of (a**2 + 3ab**3 + a + b) / (a**4 - b)
// console.log("--Q3--");
// function calculate(a, b) {
//     return (a ** 2 + 3 * a * b ** 3 + a + b) / (a ** 4 - b);
// }
// console.log(calculate(1, -1));
// console.log("-------------------------------------------------");
console.log("-------------------------------------------------");

//write a function of elibility of addmision for a profetional course based on the following criteria : either marks in maths >= 65 , marks in physics >= 55 and marks in chemistry >= 50 or ,total in maths in physics >= 140 and total in three subject >= 190 
console.log("--Q4--");
function Eligibility(maths, physics, chemistry) {
    if (maths >= 65 && physics >= 55 && chemistry >= 50) {
        return console.log("Eligible (Passed marks criteria)");
    } else if ((maths + physics) >= 140 && (maths + physics + chemistry) >= 190) {
        return console.log("Eligible (Passed total marks criteria)");
    } else {
        return console.log("Not Eligible Hobe na addmision ..tumi jao...jottto soobb");
    }
}
Eligibility(65, 55, 50);
Eligibility(20, 55, 10);

console.log("-----using ternary operator-----");
function admission(maths, physics, chemistry) {
    return (
        (maths >= 65 && physics >= 55 && chemistry >= 50) ||
        (maths + physics >= 140 && maths + physics + chemistry >= 190)
    )
    ? "Eligible (Passed total marks criteria)" : "Not Eligible Hobe na addmision ..tumi jao...jottto soobb";
}
console.log(admission(20, 13, 55));
console.log(admission(100, 50, 50));  

// console.log("-------------------------------------------------");
// console.log("-------------------------------------------------");
// console.log("--Q5--");
// //find number of days in given month. ex- month 2, year 2023, then 28 days
// function daysInMonth(month, year) {
//     return new Date(year, month, 0).getDate();
// }  
// console.log(daysInMonth(2, 2012));
// console.log("-------------------------------------------------");
// console.log("-------------------------------------------------");
// console.log("--Q6--");

// //school notice regarding addmision in class-XI for choosing stream of a student according marks percentage obtained in english , maths and science in class X where, english, maths and science >= 80% = pure science,, english and science >= 80% , maths >=60% = bio science ,, english, maths, science >=60% = commerse {percentage = (total marks obtained / total marks) * 100}

// function stream(maths, english, science) {
//     let totalMarks = maths + english + science;
//     let percentage = (totalMarks / 300) * 100;
//     if (percentage >= 80 && english >= 80 && science >= 80) {
//         return console.log("Pure Science");
//     } else if (percentage >= 60 && english >= 60 && science >= 60) {
//         return console.log("Commerce");
//     } else {
//         return console.log("Bio Science");
//     }
// }
// stream(80, 80, 80);
// stream(60, 60, 60);
// stream(50, 50, 50);

// console.log("-------------------------------------------------");
// console.log("-------------------------------------------------");
// console.log("--Q7--");
// //write a programe to check whether a charecter is alphabet , digit , or spesial charector

// function checkCharacter(character) {
//     if (character >= "A" && character <= "Z" || character >= "a" && character <= "z") {
//         return console.log("Alphabet");
//     } else if (character >= "0" && character <= "9999999999") {
//         return console.log("Digit");
//     } else {
//         return console.log("Spesial Charector");
//     }
// }
// checkCharacter("A");
// checkCharacter("-");
// checkCharacter("1");

// console.log("-------------------------------------------------");
// console.log("-------------------------------------------------");
// console.log("--Q9--");
// //write a programe to take input for angle measurement and check whether triangle is valid or not
// function Triangle(angle1, angle2, angle3) {
//     if (angle1 + angle2 + angle3 === 180) {
//         return console.log("Valid Triangle");
//     } else {
//         return console.log("Invalid Triangle");
//     }
// }
// Triangle(60, 60, 60);
// Triangle(60, 60, 180);
// console.log("-------------------------------------------------");
// console.log("-------------------------------------------------");
// console.log("--Q14--");
// //check whether two arrays are equal or not with for loop
// function checkArrays(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return console.log("Arrays are not equal");
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return console.log("Arrays are not equal");
//         }
//     }
//     return console.log("Arrays are equal");
// }
// checkArrays([1, 2, 3], [1, 2, 3]);
// checkArrays([1, 2, 3], [1, 2, 4]);
// console.log("-------------------------------------------------");
// console.log("--Q16--");
// //convert array of words to camelCase // hello, world, js,rocks => helloWorldJsRocks 
// function camelCase(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join("");
// }
// console.log(camelCase(["hello", "world", "js", "rocks"]));