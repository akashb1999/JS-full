//logical oparetors!...

let a = 10;
let b = 20;
let c = 30;


//(&&) and (||) operators
//&& returns  1+0 =  false
//|| returns  1+0= true

console.log(a < b); // true
console.log(a > b); // false
console.log(a && b); //(10 && 20) = 20 = true
console.log(a < b && b < c); // (10 < 20) && (20 < 30) = (1 + 1) = true
console.log(a > b || b < c); // (10 > 20) || (20 < 30) = (0 + 1) = true


// | Operator | Name        | Type    | Use Case                    | Example         | Result  |
// | -------- | ----------- | ------- | --------------------------- | --------------- | ------- |
// | `&&`     | Logical AND | Boolean | Logic checks, short-circuit | `true && false` | `false` |
// | `&`      | Bitwise AND | Numeric | Binary-level operations     | `5 & 3`         | `1`     |

// | `||`     | Logical OR  | Boolean | Logic checks, short-circuit | `true || false` | `true`  |
// | `|`      | Bitwise OR  | Numeric | Binary-level operations     | `5 | 3`         | `7`     |


//ternary oparators
//condition ? value_if_true : value_if_false;

let num = 4;
let result = (num % 2 == 0) ? "Even" : "Odd";
console.log(result); // even
//--------------------------------------------------------------
console.log("----------");

let marks = 35;
let status = (marks >= 40) ? "Pass" : "Fail";
console.log(status); // Fail



// | Operator | Name            | Compares     | Type Conversion? | Example     | Result |
// | -------- | --------------- | ------------ | ---------------- | ----------- | ------ |
// | `=`      | Assignment      | N/A          | N/A              | `let x = 5` | N/A    |
// | `==`     | Loose Equality  | Value        | ✅ Yes            | `5 == "5"`  | true   |
// | `===`    | Strict Equality | Value & Type | ❌ No             | `5 === "5"` | false  |
// | `!=`     | Not Equal       | Value        | ✅ Yes            | `5 != "5"`  | false  |
// | `!==`    | Not Equal       | Value & Type | ✅ Yes            | `5 !== "5"` | true   |
// | `<`      | Less Than       | Value        | ✅ Yes            | `5 < "5"`   | false  |
// | `>`      | Greater Than    | Value        | ✅ Yes            | `5 > "5"`   | false  |
// | `<=`     | Less Than Equal | Value        | ✅ Yes            | `5 <= "5"`  | true   |
// | `>=`     | Greater Than    | Value        | ✅ Yes            | `5 >= "5"`  | true   |



//Write a program to calculate the area and perimeter of a rectangle. const length = 10; const width = 5;
const length = 10;
const width = 5;

const area = length * width;
const perimeter = 2 * (length + width);

console.log("Area:", area);
console.log("Perimeter:", perimeter);


//Increment a number by 10 using assignment operator.
let x = 5;
x += 10;
console.log(x); // 15

//Find remainder when 17 is divided by 3
let y = 17 % 3;
console.log(y); // 2

////Calculate 2 to the power of 5
let z = 2 ** 5;
console.log(z); // 32


// Option 1: Use an array to store multiple values
let day = 2;

let dayResult = (day === 1) ? "Start of the week" : 
			(day === 2) ? "Second Day" : 
			(day === 3) ? "Mid Week" : 
			(day === 4) ? "Almost Weekend" : 
			(day === 5) ? "Almost Weekend" : 
			(day === 6) ? "Almost Weekend" : 
			(day === 7) ? "End of the week" : 
			"Invalid day";
console.log(dayResult);



//marks 90 and above - "A", marks 80 and above - "B", marks 70 and above - "C", marks 60 and above - "D", default - fail.
let your_marks = 10;

let marksResult = (your_marks >= 90) ? "A" : 
            (your_marks >= 80) ? "B" : 
            (your_marks >= 70) ? "C" : 
            (your_marks >= 60) ? "D" : 
            "Fail";
console.log(marksResult);

//marks 90 and above - "A", marks 80 and above - "B", marks 70 and above - "C", marks 60 and above - "D", default - fail.
let your_marks1 = 10;

let marksResult1 = (your_marks1 >= 90) ? "A" : 
			(your_marks1 >= 80) ? "B" : 
			(your_marks1 >= 70) ? "C" : 
			(your_marks1 >= 60) ? "D" : 
			"Fail";
console.log(marksResult1);

//make calender of passing month
let month = 2;
let monthResult = (month === 1) ? "January" : 
			(month === 2) ? "February" : 
			(month === 3) ? "March" : 
			(month === 4) ? "April" : 
			(month === 5) ? "May" : 
			(month === 6) ? "June" : 
			(month === 7) ? "July" : 
			(month === 8) ? "August" : 
			(month === 9) ? "September" : 
			(month === 10) ? "October" : 
			(month === 11) ? "November" : 
			(month === 12) ? "December" : 
			"Invalid month";
console.log(monthResult);
