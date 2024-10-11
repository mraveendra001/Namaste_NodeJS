require("./Xyz.js") //importing a module Xyz into App.js using require 
// we can use require("./Xyz"); too without .js extension it will consider its .js itself
// require is always there just like Global
//console.log("Hello, World!");

//var a =34;
//var b=56;

//console.log(a+b); //90
//console.log(this); // {}
//console.log(globalThis==global) //true



//calculateSum(a,b); // here we can see that we hve imported the sum module, into App.js 
//but we cant use the function , methods , variables just bhy using require keyword from sum module
//modules are protected by default . they protect their variables , functions , methods
// so now to get calculateSum in App.js from Sum.js i meed to explicitly export it from Sum.js

//const calculateSum=require("./Sum.js"); // the exported calculate sum from Sum.js , will be returned in the require
//imported here

//const obj = require("./Sum.js");
// u can destructure also like this 
 const obj= require("./Sum.js");
 var a = 4;
var b = 5;
obj.calculateSum(a,b);
// //if destrucutred u can directly write calculateSum(a,b); and console.log(x);
console.log(obj.x) ;  // importing in cjs 
console.log(obj.z);
// import { calculateSum } from "./Sum.js";
// var a=4;
// var b=5;
// calculateSum(a,b);