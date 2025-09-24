//functions

function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));

const plus = function(a, b) {
    return a + b;
}
let result1 = plus(10, 10);
console.log(result1);

//nested functions
function msg(firstName){
    function hey(){
        console.log("hey " + firstName);
        function hello(){
            console.log ("Hello " + firstName );
        }
        return hello ();
    }
    hey ();
}
return msg ("Akash");

//arrow functions

let multiply = (a, b) => a * b;
console.log(multiply(10, 10));

//find the largest three numbers

function largest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(largest(1, 2, 3));

//with arrow function with two numbers

// let largest = (num1, num2) => (num1 > num2) ? num1 : num2;
// console.log(largest(10, 20));

//Create multiplication table using loop. 
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " * " + i + " = " + (num * i));
    }
}
multiplicationTable(5);

// Sum of numbers from 1 to N.
function sumUpTo(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumUpTo(10));

//closure function

function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    }
}
let counter = createCounter();
counter();
counter();
counter();

//factorial function

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));