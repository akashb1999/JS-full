//for off loop!
const str = "Hello";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
console.log("----------------")
console.log("for off loop!")
    for(const char of str){
        console.log(char);
    }
//we'll use for of loop in string, and for in loop in array!
console.log("for in loop!")
const str1 = "Akash"
    for(index in str1){
        console.log(index , ":",str1[index]);//index is the index of the character
    }


//     | Loop       | Iterates Over | Use Case                               |
// | ---------- | ------------- | -------------------------------------- |
// | `for...in` | Index (keys)  | Arrays, strings (not ideal), objects   |
// | `for...of` | Values        | Arrays, strings (preferred for values) |

//Count number of uppercase and lowercase letters.  

const str2 = "Hello World!";
let uppercase = 0;
let lowercase = 0;
for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (char >= 'A' && char <= 'Z') {
        uppercase++;
    } else if (char >= 'a' && char <= 'z') {
        lowercase++;
    }
}
console.log("Uppercase:", uppercase);
console.log("Lowercase:", lowercase);

//Reverse a string using loop.

const str3 = "Hello World!";
let reversed = "";
for (let i = str3.length - 1; i >= 0; i--) {
    reversed += str3[i];
}
console.log(reversed);
//Reverse a string using loop usinf for of loop.

const str4 = "Hello World!";
let reversed1 = "";
for (const char of str4) {
    reversed1 = char + reversed1;
}
console.log(reversed1);