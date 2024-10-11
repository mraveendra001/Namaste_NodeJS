console.log("execute sum module");
var x = "variable x from sum.js imported into App.js";
// export function calculateSum(a,b){
//     const sum=a+b;
//     console.log(sum);
//} //exporting in mjs

//module.exports =calculateSum;

function calculateSum(a,b){
      const sum=a+b;
        console.log(sum);
    }

module.exports = {
    x:x,
    calculateSum:calculateSum,
}; // in App.js write obj i.e, obj.calculateSum(a,b);

// in js we can make use of shorthand operator and use like this too
// module.exports = {
//    x , calculateSum
// }; // this is exporting in cjs 

//demo for non stirct mode in cjs

z="hello world" ;
module.exports=z;