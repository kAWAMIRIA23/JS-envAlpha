//defining a function

/*
//method 1: function declaration
function greet(name){
    console.log(`Hello, ${name}!`);
}

//method 2: function expression
let greet = function(name){
    console.log(`Hello, ${name}!`);
}
*/

//method 3: arrow functions
let greet = (name) => {
    console.log(`Hello, ${name}!`);
}

//calling a function
greet('Carlus');

function add(a, b, c){
    return a + b + c;
}
let sum = add(5, 6, 7);
console.log(sum);

//function scope
function myfunc(){
    let word = 'Carlus Innocent';
    console.log(word);
}
myfunc();

//console.log(word);


//default parameters
function greet1(name = 'Guest'){
    console.log(`Hello ${name}!`);
}
greet1();
greet1('Carlus');

//rest parameters
function sum1(...numbers){
    console.log(numbers);
    return numbers.reduce((total, num) => total + num); //1 : 3 : 6 : 10
}
console.log(sum1(1, 2, 3, 4));

//anoymous functions

//IIFE

//Higher Order Functions

