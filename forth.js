// //OOPS CONCEPT.

// let a = 10;
// if(a > 5){
//     console.log("a is greater than 5");
// }else{
//     console.log("a is less than 5");
// }

// //multiple if
// let b = 20;
// if (b > 10){
//     if (b > 15){
//         console.log("b is greater than 15");
//     }else{
//         console.log("b is less than 15");
//     }
//     console.log("b is greater than 10");
// }
// else{
//     console.log("b is less than 10");
// }

// //else if..
// let c = 30;
// if (c > 20){
//     console.log("c is greater than 20");
// }else if (c > 10){
//     console.log("c is greater than 10");
// }else{
//     console.log("c is less than 10");
// }
    

//student grades
let marks = 40;
if (marks > 96){
    console.log("off number");
}else if (marks >= 80){
    console.log("A");
}else if (marks >= 60){
    console.log("B");
}else if (marks >= 40){
    console.log("C");
}else{
    console.log("D");
}


//Check if a number is even or odd
let num = 10;
if (num % 2 == 0){
    console.log("Even");
}else{
    console.log("Odd");
}


//Find the largest of three numbers  let a = 10, b = 20, c = 15;
let a = 10;
let b = 20;
let c = 15;
if (a > b && a > c){
    console.log("a is the largest number");
}else if (b > a && b > c){
    console.log("b is the largest number");
}else{
    console.log("c is the largest number");
}

//cheack the day of the week using switch case
let day = 4;
switch (day) {
    case 1:
        console.log("Start of the week = Monday");
        break;
    case 2:
        console.log("Second Day");
        break;
    case 3:
        console.log("Mid Week");
        break;
    case 4:
        console.log("Almost Weekend");
        break;
    case 5:
        console.log("Almost Weekend");
        break;
    case 6:
        console.log("Almost Weekend");
        break;
    case 7:
        console.log("End of the week");
        break;
    default:
        console.log("Invalid day");
        break;
}

//----------------------

//for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//while loop
let i = 1;
while (i <= 20) {
    console.log(i);
    i++;
}

//do while loop
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 30);



//Print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Print even numbers from 1 to 20 using while loop
let k = 1;
while (k <= 20) {
    if (k % 2 == 0) {
        console.log(k);
    }
    k++;
}

////Print even numbers from 1 to 20 using do while loop
let l = 1;
do {
    if (l % 2 == 0) {
        console.log(l);
    }
    l++;
} while (l <= 20);



//Check if a number is positive, negative, or zero
let number = 10;
if (number > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
