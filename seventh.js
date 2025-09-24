//String
let a = new String("Hello");
console.log(a);

let b = "Hello";
console.log(typeof b);

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

//incule
let str = "Hello";
console.log(str.includes("l"));

//indexOf
let str1 = "Hello";
console.log(str1.indexOf("l"));

//trim
let str2 = "   Hello   ";
console.log(str2.trim());


//write a function to cheack a string is empty or fill with a number
function isEmpty(str) {
    if (str == "") {
        console.log("string is empty");
    } else {
        console.log("string is not empty");
    }
}
isEmpty("123");
//write a function to cheack a string has any empty space or not
function hasSpace(str) {
    if (str.includes(" ")) {
        console.log("string has space");
    } else {
        console.log("string has no space");
    }
}
hasSpace("123");


//write a function to cheack a string has any empty space or not using trim
function isEmpty(str){
    if(str === str.trim(" ")){
        console.log("Has no empty space !!!");
    }else{
        console.log("has empty space!!");
    }
}
isEmpty("123 ");

//charat
let str3 = "Hello";
console.log(str3.charAt(0));

//slice
let str4 = "Hello";
console.log(str4.slice(0, 2));

//replace and replaceAll
let str5 = "Hello";
console.log(str5.replace("l", "L"));
console.log(str5.replaceAll("l", "L"));

//write a function to find a domail in a string
function findDomain(str) {
    let domain = str.slice(str.indexOf("@") + 1);
    console.log(domain);
}
findDomain("8jg0F@example.com");

//write a function to find all vowels in a string without length
function findVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    console.log(count);
}    
findVowels("Hello");


//write a function to find all vowels in a string without length
function findVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(count);
}
findVowels("Hello");

