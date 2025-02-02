// var d=require('./index.js'); //importing index.js file

// console.log(d); //output: 10 (when we are exporting a single variable)

// console.log(d); //output: { a:10, b:20 } (when we are exporting multiple variables)


var {a,b}=require('./index.js'); //importing index.js file
console.log(a); //output: 10
console.log(b); //output: 20
console.log(a,b); //output: 10 20

