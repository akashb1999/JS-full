//filter nethod

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr1 = arr.filter((haha) => haha % 2 == 0);
console.log(arr1);

//reduce method
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr3 = arr2.reduce((a, b) => a + b);
console.log(arr3);


//longest word using reduce
let arr4 = ["apple", "banana", "orange", "Akash Bhattacharyya", "you"];
let arr5 = arr4.reduce((a, b) => a.length > b.length ? a : b);
console.log(arr5);

console.log(capitalFirstWord("hello world js"));//using find reduce
console.log("-------using all ")
function capitalFirstWord(str) {
    return str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalFirstWord("hello world js"));
//map is used to get one by one in an array!



//Creating an array and copying its items to another array, and displaying the copied items. wit
let courses = ["HTML", "CSS", "JavaScript", "React"];
let newArray = [];
for (let i = 0; i < courses.length; i++) {
    newArray[i] = courses[i];
}
console.log(newArray);

//Creating an array and copying its items to another array, and displaying the copied items. without usuing loop
let courses1 = ["HTML", "CSS", "JavaScript", "React"];
let newArray1 =[]
// let newArray1 = [...courses1];
courses1.forEach(item => newArray1.push(item));
console.log(newArray1);

//get the first number > 10 
let nums = [1, 2, 9, 11, 13, 5, 14];
let firstNum = nums.find(num => num > 10);
console.log(firstNum);


//Remove duplicate elements from the array.  let items = [1, 2, 2, 3, 4, 4]; // [1, 2, 3, 4]
let items = [1, 2, 2, 3, 4, 4];
let uniqueItems = items.filter((value, index) => items.indexOf(value) === index);
console.log(uniqueItems);


//Find common elements between arr1 and arr2.  let arr1 = [1, 2, 3];  let arr2 = [2, 3, 4]; 
let arr1 = [1, 2, 3];  
let arr2 = [2, 3, 4];
let commonElements = arr1.filter(item => arr2.includes(item));
console.log(commonElements);

//1. Filter even numbers and find their sum. using filter map reduce
let nums1 = [1, 2, 3, 4, 5, 6];
let sum1 = nums1.filter(num => num % 2 == 0)
.reduce((acc, sec) => acc + sec);
console.log(sum1);

//2. Combine two arrays element-wise. 
let a = [1, 2, 3]; 
let b = ['a', 'b', 'c'];
let c = a.map((num, num2) => [num, b[num2]]);
console.log(c);

//3. Find first Longest Word in a Sentence
function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longestWord = words.reduce((a, b) => a.length > b.length ? a : b);
    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumps"));


//3. Find first Longest Word in a Sentence
function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumps"));