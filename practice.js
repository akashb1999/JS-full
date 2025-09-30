//print all odd number 1 to 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

//print 1 to 50

for (let i = 1; i <= 50; i++) {
    console.log(i);
}

for (let a = 20; a <= 100; a++){
    console.log(a);
}

//Check if a number is divisible by 2, 3, or both

let i = 6;{
    if (i % 2 == 0 && i % 3 == 0) {
        console.log("Divisible by 2 and 3");
    } else if (i % 2 == 0) {
        console.log("Divisible by 2");
    } else if (i % 3 == 0) {
        console.log("Divisible by 3");
    } else {
        console.log("Not divisible by 2 or 3");
    }
}

//Find the largest of three numbers

let g = 10;
let h = 20;
let j = 30;

if (g > h && g > j) {
    console.log("a is the largest number");
} else if (h > g && h > j) {
    console.log("b is the largest number");
} else {
    console.log("c is the largest number");
}

//Print numbers divisible by 3 and 5 from 1 to 100

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
}

//Print numbers divisible by 3 and 5 from 1 to 100 with do while loop

let x = 1;
do {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
    i++;
} while (i <= 100);

//make a programe with switch case to calculate numbers

let num1 = 10;
let num2 = 20;
let operator = "+";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        console.log("Invalid operator");
        break;
}

//Sum of first N natural numbers.
//let n = 5, 1+2+3+4+5

let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);

console.log("Factorial of a number")
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));

//palidrome
// let str = "123";
// let rev = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
// }
// if (str == rev) {
//     console.log("palindrome");
// } else {
//     console.log("not palindrome");
// }


let str = "121";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}
if (str == rev) {
    console.log("is Palidrome");
}else{
    console.log("nope");
}
console.log("------------------");
//fibochi series
let d = 0;
let e = 1;
let f;
for (let i = 1; i <= 10; i++) {
    console.log(d);
    f = d + e;
    d = e;
    e = f;
}


console.log("Fibonacci Series");
let x2 = 0;
let y2 = 1;
let z2;
for (let i = 1; i <= 10; i++){
    console.log(x2);
    z2 = x2 + y2;
    x2 = y2;
    y2 = z2;
}

console.log("Countdown using while loop");
function countdown(n) {
    while (n > 0) {
        console.log(n);
        n--;
    }
    console.log("Done!");
}
countdown(20);

console.log("Countdown using for loop");
function countdown2(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
    console.log("Done!");
}
countdown2(20);


function createHelloWorld() {
    return function(...args) {
        return "Hello World";
    };
}
const F = createHelloWorld();

console.log(F()); // "Hello World"
console.log(F({}, null, 42)); // "Hello World"
console.log(F("anything", 123, true, undefined)); // "Hello World"

//write a function to get a atring as a argument , and cheack whether it is a upper case or lower case

function checkCase(str) {
    if (str === str.toUpperCase()) {
        console.log("upper case");
    } else if (str === str.toLowerCase()) {
        console.log("lower case");
    } else {
        console.log("mixed case");
    }
}
console.log(checkCase("akash"));
//write a function to get a atring as a argument , and cheack whether it is a upper case or lower case using for loop   
function checkCase(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            console.log("upper case");
        } else if (str[i] === str[i].toLowerCase()) {
            console.log("lower case");
        } else {
            console.log("mixed case");
        }
    }
}
console.log(checkCase("akash"));

console.log("-------------------------")
console.log("-------------------------")
//1. Filter even numbers and find their sum.
let nums1 = [1, 2, 3, 4, 5, 6];
let sum1 = nums1.filter(num => num % 2 == 0)
.reduce((a, b) => a + b);
console.log(sum1);

//2. Combine two arrays element-wise. 
let a = [1, 2, 3]; 
let b = ['a', 'b', 'c'];
let c = a.map((num, index) => [num, b[index]]);
console.log(c);

//3. Find first Longest Word in a Sentence
function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longestWord = words.reduce((a, b) => a.length > b.length ? a : b);
    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumps"));

//4. Get Words with Length > 4
const sentence = "This is an awesome opportunity to learn";
const words = sentence.split(" ");
const filteredWords = words.filter(word => word.length == 4);
console.log(filteredWords);

//5. Convert Array of Words to CamelCase
const word = ["hello", "world", "js", "rocks"];
function toBoroHater(words) {
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join("");
}
console.log(toBoroHater(word));


let str2 = "hello world js";
console.log(str2.split(" ").map((word, index) => word[0].toUpperCase() + word.slice(1)).join(""));


function borohater(str2){
    // let str3 = str2.split(" ").reduce((acc, curr) => acc +(curr[0].toUpperCase()+ curr.slice(1)));
    // return str3[0].toLowerCase() + str2.slice(1);
    let str3 = str2.split (" ").reduce((acc, curr) => acc + (curr[0].toUpperCase() + curr.slice(1)));
    return str3[0].toLowerCase() + str3.slice(1);
}
console.log(borohater("Hello world js"));

// now only capitalize only the J using only map

function lastCamelCase(str){     
    let word = str.toLowerCase().split(" ");    
    return word.map((value, index)=> index=== word.length - 1 ? value[0].toUpperCase() + value.slice(1) : value ).join("") } 
    console.log(lastCamelCase("Hello world js"));

//pick a random value 10 to 50
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(random(10, 50));




// exam

