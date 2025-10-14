//Q1
let a = 5;
let b = 10;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);
console.log('-------------------');

//Q2
let num = 4;
let PTwo = (num & (num - 1)) == 0;
console.log(PTwo);
console.log('-------------------');

//Q3
let num1 = 5;
let i = 1;
while (i <= 10) {
    // console.log(num1 + " * " + i + " = " + (num1 * i));
    console.log(`${num1} * ${i} = ${num1 * i}`);
    i++;
}
console.log('-------------------');

//Q5
let num2 = 123;
let sum = 0;
while (num2 > 0) {
    sum += num2 % 10;
    num2 = Math.floor(num2 / 10);
}
console.log(sum);
console.log('-------------------');

//Q7
let str = "RAR";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}
if (str == rev) {
    console.log("is Palidrome");
} else {
    console.log("nope");
}
console.log('-------------------');

//Q8
let str1 = "akash";
let middle = str1.length / 2;
console.log(str1.slice(middle - 1, middle + 2));
console.log(str1.substring(middle - 1, middle + 2));
console.log('-------------------');

//Q9
let str2 = "akash is a good boy";
let word = "good";
let count = 0;
let words = str2.split(" ");
for (let i = 0; i < words.length; i++) {
    if (words[i] == word) {
        count++;
    }
}
console.log(count);
console.log('-------------------');

//Q10
let phone = "9876543210";
let masked =  "******" + phone.slice(-4);
console.log(masked);
console.log('-------------------');

//Q11
let sentence = "bla bla blaaaaaaaaaaaaaaaaaaaa bla blaaaa bla";
let words1 = sentence.split(" ");
let lWord = words1.reduce((a, b) => a.length > b.length ? a : b);
console.log(lWord);
console.log('-------------------');

//Q12
let str3 = "akash";
let first = str3[0];
let last = str3[str3.length - 1];
if (first == last) {
    console.log("ekdom eki");
} else {
    console.log("nahh! eki noi");
}
console.log('-------------------');

//Q13
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let largest = arr.reduce((a, b) => a > b ? a : b);
let smallest = arr.reduce((a, b) => a < b ? a : b);
console.log("boro holo:", largest);
console.log("chhoto holo:", smallest);
console.log('-------------------');

//Q14
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let element = 5;
let index = arr1.indexOf(element);
console.log(index);
console.log('-------------------');

//Q15
let arr2 = ['Apple', 'Banana', 'Mango', 'Orange'];
let str4 = arr2.join(",");
console.log(str4);
console.log('-------------------');

//Q16 (got helped by google about the "Set" constructor)
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let arr4 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let arr5 = [...new Set([...arr3, ...arr4])];
console.log(arr5);
console.log('-------------------');

//Q21
let employees = [
    { name: "Akash", salary: 50000 },
    { name: "Bikash", salary: 60000 },
    { name: "Rokash", salary: 40000 },
    { name: "Prokash", salary: 70000 }
];
let filteredEmployees = employees.filter(employee => employee.salary >= 50000);
console.log(filteredEmployees);
console.log('-------------------');

//Q29 
class BankAccount {
    #balance = 0;
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        this.#balance -= amount;
    }
    getBalance() {
        return this.#balance;
    }
}
const account = new BankAccount();
account.deposit(1000);
account.withdraw(500);
console.log(account.getBalance());
console.log('-------------------');

//find the smalest word of "i Love js"
let str5 = "i Love js";
let words2 = str5.split(" ");
let smallestWord = words2.reduce((a, b) => a.length < b.length ? a : b);
console.log(smallestWord);
console.log('-------------------');
//find the words wich is started with l
let str6 = "i Love js";
let words3 = str6.split(" ");
let lWords = words3.filter(word => word.startsWith("l"));
console.log(lWords);
console.log('-------------------');
// find the words with 4 digits
let str7 = "i Love js";
let words4 = str7.split(" ");
let fourDigits = words4.filter(word => word.length == 4);
console.log(fourDigits);
console.log('-------------------');
