//array constructer
let arr = new Array(1, 2, 3, 4, 5);
console.log(arr);

//array updatation
arr [3] = 10;
console.log(arr);

//modified array
let arr1 = new Array(1, 2, 3, 4, 5);
arr1[0] = 10;
console.log(arr1);

//array length
let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2.length);

//using for-in loop
let arr4 = new Array(1, 2, 3, 4, 5);
for (let i in arr4) {
    console.log(arr4[i]);
}
//print the last string using split
let str = "hello world, hii";
console.log(str.split(",")[1]);
// console.log(splitalpha[splitalpha.length - 1]);
// console.log(splitalpha);


//push
let arr3 = [1, 2, 3, 4, 5];
arr3.push(6);
console.log(arr3);

//pop
let arr5 = [1, 2, 3, 4, 5];
arr5.pop();
console.log(arr5);

//unshift
let arr6 = [1, 2, 3, 4, 5];
arr6.unshift(0);
console.log(arr6);

//shift
let arr7 = [1, 2, 3, 4, 5];
arr7.shift();
console.log(arr7);

//toString
let arr8 = [1, 2, 3, 4, 5];
let str1 = arr8.toString();
console.log(str1);

//join
let arr9 = [1, 2, 3, 4, 5];
let str2 = arr9.join(" ");
console.log(str2);

//reverse
let arr10 = [1, 2, 3, 4, 5];
arr10.reverse();
console.log(arr10);

//reverse the string of Hello
// const str3 = "Hello";
// console.log(str3.split("").reverse());
const reverseword = (str) =>{
    return str.split("").reverse().join('');
}
console.log(reverseword("Hello"));
console.log('-------------------');

//slice
let arr11 = [1, 2, 3, 4, 5];
let arr12 = arr11.slice(1, 4);
console.log(arr12);

//splice
let arr13 = [1, 2, 3, 4, 5];
arr13.splice(0, 2);
console.log(arr13);

console.log("-----------")
//defference between slice and splice
let arr14 = [1, 2, 3, 4, 5];
let arr15 = arr14.slice(1, 4);
console.log(arr14)
console.log(arr15);
console.log('splice');

let arr16 = arr14.splice(1, 3);
console.log(arr16)
console.log(arr16);

console.log('-------------------');

//for each method
console.log("forEach");
const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number1.forEach((num, index) =>
{
    if (num % 2 === 0) {
        console.log(index, num);
    }
}
);
console.log('-------------------');
//map method
console.log("map");
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//return only values
const even = number.map((num, index) =>
{
    if (num % 2 === 0) {
        console.log(index, num);
    }
});
console.log('-------------------');

