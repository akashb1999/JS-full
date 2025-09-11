// console.log("1st class");
// console.log("webskitters");
// console.log("Kolkata");

// 1st class
//Data types

// var a = 10; // number
// var b = "webskitters"; // string
// var c = true; // boolean
// console.log(a);
// console.log(b);
// console.log(c);

// {
//     var d = 20; // number
//     var e = "Kolkata"; // string
//     var f = false; // boolean
//     var a = 30; // number, re-declared
//     var b = "india"; // string, re-declared
//     var c = false; // boolean, re-declared
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
//     console.log(f);
//     {
//         var a = 100; // number, re-declared
//         var b = "webskitters-sec-5"; // string, re-declared
//         var c = true; // boolean, re-declared
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         {
//             var d = 200; // number, re-declared
//             var e = "Kolkata-sec-5"; // string, re-declared
//             var f = ["item1", "item2", "item3"]; // array, re-declared
//             console.log(d);
//             console.log(e);
//             console.log(f);
//         }
//     }
// }
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(a);
// console.log(b);
// console.log(c);

// console.table({a, b, c, d, e, f});

// let x = 10; // var, let, const
// let y = "webskitters";
// let z = true;
// console.log(x);
// console.log(y);
// console.log(z);
// {
//     let x = 20; // let, re-declared
//     let y = "Kolkata"; // let, re-declared
//     let z = false; // let, re-declared
//     console.log(x);
//     console.log(y);
//     console.log(z);
//     {
//         let x = 100; // let, re-declared
//         let y = "webskitters-sec-5"; // let, re-declared
//         let z = true; // let, re-declared
//         console.log(x);
//         console.log(y);
//         console.log(z);
//         {
//             let x = 200; // let, re-declared
//             let y = "Kolkata-sec-5"; // let, re-declared
//             let z = ["item1", "item2", "item3"]; // array, re-declared
//             console.log(x);
//             console.log(y);
//             console.log(z);
//         }
//     }
// }

// // TDZ = Temporary dead zone ->> Hoisting -->> Declare top of the scope.
// // TDZ is for LET and CONST variables.

// const p = 10; // const, cannot be re-declared
// const q = "webskitters"; // const, cannot be re-declared
// const r = true; // const, cannot be re-declared
// console.log(p);
// {
//     console.log(q); // const, cannot be re-declared
//     {
//         console.log(r);
//         const s = 20; // const, can be declared
//         const t = "Kolkata"; // const, can be declared
//         console.log(s); // const, cannot be re-declared
// console.log(t); // const, cannot be re-declared
//     }

// }

// {
//   var a = 10; // var, can be re-declared
//   let b = "webskitters"; // let, can be re-declared
//   const c = true; // const, can be re-declared
//   console.log(a); // var, can be re-declared
//   console.log(b); // let, can be re-declared
//   console.log(c); // const, can be re-declared
//   {
//     var a = 20; // var, can be re-declared
//     let b = "Kolkata"; // let, can be re-declared
//     const c = false; // const, can be re-declared
//     console.log(a); // var, can be re-declared
//     console.log(b); // let, can be re-declared
//     console.log(c); // const, can be re-declared
//     {
//       var a = 100; // var, can be re-declared
//       let b = "webskitters-sec-5"; // let, can be re-declared
//       const c = true; // const, can be re-declared
//       console.log(a); // var, can be re-declared
//       console.log(b); // let, can be re-declared
//       console.log(c); // const, can be re-declared
//       {
//         var a = 200; // var, can be re-declared
//         let b = "Kolkata-sec-5"; // let, can be re-declared
//         const c = ["item1", "item2", "item3"]; // array, can be re-declared
//         console.log(a); // var, can be re-declared
//         console.log(b); // let, can be re-declared
//         console.log(c); // const, can be re-declared
//       }
//     }
//   }
// }

// var a = 10;
// let b = 15;
// {
//   let a = 11;
//   var b = 12;
//   console.log(a);
//   console.log(b);
// }
// var => let (ok)
// let => var (not-ok)

// let a = 10;
// let b = 20;
// console.log(a,b);
// {
//   a = 30;
//   b = 40;
//   console.log(a,b);
// }
// console.log(a,b);

// var c = 10;
// var d = 20;
// {
//   let c = 30;
//   let d = 40;
//   {
//     var e = 50;
//     var f = 60;
//   }
// }
// console.log(c,d);
//   console.log(c,d);
//     console.log(e,f);

// var a = 50;
// b = 30;
// var c = 60;
// var d;
// e = "Akash"
// console.log (a , b , c, d);
// d = 60;
// console.log (typeof [a, b, c, e])




