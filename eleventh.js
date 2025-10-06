//spead operator

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

//Destruction of array
let arr4 = [1, 2, 3];
let [a, b, c] = arr4;
console.log(a, b, c);

//Number Methods
let n = new Number("10");
console.log(n);
//max & min value of a number
let num = Number.MAX_VALUE;
console.log(num);
let num1 = Number.MIN_VALUE;
console.log(num1);

//positive infinity
console.log(Number.POSITIVE_INFINITY);
//negative infinity
console.log(Number.NEGATIVE_INFINITY);

//maths in ceil and floor
console.log(Math.ceil(1.4));
console.log(Math.floor(1.4));

//round
console.log(Math.round(1.4));
console.log(Math.round(1.6));

//math.min nad max
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.max(1, 2, 3, 4, 5));

//sin and cos
console.log("Sin:" + Math.sin(-40));
console.log("cos:" + Math.cos(0));

//absolute value
console.log(Math.abs(-40));

//random number
console.log("random:" + Math.random());
//pick a random value 10 to 50 with a range of 5
// function random(min, max, range) {
//     let arr = [];
//     for (let i = 0; i < range; i++) {
//         const random =  Math.floor(Math.random() * (max - min) + min);
//     }
//     random.push(arr);
//     return arr;
// }
// console.log(random(10, 50, 5));

//date
let date = new Date();
console.log(date.toLocaleString());

// let today = new Date();
// console.log(today.toLocaleString());
// let today = new Date();
// console.log(`Year: ${today.getFullYear()}`);
// console.log(`Month: ${today.getMonth() + 1}`);
// console.log(`Date: ${today.getDate()}`);

//make a function to get day by given date
function getDayName(date) {
  console.log("---date", date);
  let datenew = new Date(date);
  console.log("---date new", datenew);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[datenew.getDay()];
}
console.log(getDayName("07/08/2025"));
