"use strict";
// find square root of a number
var _a;
// let double = (num:number) =>{
//         let dou = num * num ;
//         return dou
// }
// let num:number = +(prompt("enter your number") ?? "0")
// let result = double(num)
// console.log(result);
// find your number it is even or odd
let num = +((_a = prompt("enter your number")) !== null && _a !== void 0 ? _a : "0");
if (num % 2 === 0) {
    console.log("your number is even");
}
else if (num % 1 === 0) {
    console.log("your number is odd");
}
else {
    console.log("you dont give any number");
}
