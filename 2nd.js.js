//Aritmatic Oparetors!

// let a = 10;
// let b = 20;
// let sum = a + b;
// let sub = a - b;
// let mul = a * b;    
// let div = a / b;
// let mod = a % b;

// console.log(sum);
// console.log(sub);
// console.log(mul);
// console.log(div);
// console.log(mod);


//Concatinate
// let con = "hello";
// let con2 = "world";
// let con3 = con - con2;
// console.log(con3);

// let con4 = "10";
// let con5 = "20";
// console.log(con4 + con5); // 30
// console.log(con4 - con5); // -10


// 1.  let res = 2 + 3 * 4 / 2;  - console.log(res);
// 2. let x = 10 + "20" + 30;  - console.log(x);// 102030
// 3. console.log(2 + 3 * 4 ** 2);

//pre-post increment/decrement
let a = 10;
let b = a++;
console.log(a);
console.log(b);
console.log(m = b);
console.log("----------");


let c = 10;
let d = ++c;
console.log(c);//output 11
console.log(d);//output 11
console.log(n = d);
console.log("----------");
//--------------------------------------------------------------
let e = 10;
let f = e--;
console.log(e);//
console.log(f);
console.log(j = f);
console.log("----------");

let g = 10;
let h = --g;    
console.log(g);
console.log(h);
console.log(k = h);
console.log("----------");


//let x = 5;  console.log(x++, ++x);
//let a = 3;  let result = a++ * ++a;  console.log(result);



//Assaignment Operators
a = 10;
b = 20;
a += b; // a = a + b
console.log(a);

a -= b; // a = a - b
console.log(a);
a *= b; // a = a * b
console.log(a);
a /= b; // a = a / b
console.log(a);
a %= b; // a = a % b
console.log(a);


//let x = "10" - "5" + "2";  
// console.log(x);// here 10 is a string and 5 is too, the operator is - so 10-5 = 5, then 5+2 = 7, cause + operator is string concatenation.
//let n = 4;  n *= 5 + 2;  console.log(n); // here 2+2 is calculated first, then multiplied by 4,....5+2 is a other segment of code


// | Expression   | Result  | Explanation                       |
// | ------------ | ------- | --------------------------------- |
// | `"10" + "2"` | `"102"` | String concatenation              |
// | `"10" - "2"` | `8`     | Numeric coercion → subtraction    |
// | `"10" * "2"` | `20`    | Numeric coercion → multiplication |
// | `"10" / "2"` | `5`     | Numeric coercion → division       |
// | `"10" % "3"` | `1`     | Numeric coercion → modulo         |
