let text1 = 'CARLUS';

let text2 = "INNOCENT";

let text3 = `ACI`;

console.log(`Hello, ${text3} and ${text2} or ${text1}`); 

//person
let age = 21;
let fName = "Martha";
let bestC = "Black";

let des = `Her age is ${age},
Her first name name is ${fName},
Her best Color is ${bestC}.`

console.log(des);

// length
let str = "Hello, World";
console.log(str.length);
//char
console.log(str[0]);
console.log(str[11]);
//concatination
let greeting = "Hello, ";
let name = "Martha";
let sec = "Innocent";
let greetingFull = greeting + name;
console.log(greetingFull);

let greetingFull2 = greeting.concat(name).concat(sec);
console.log(greetingFull2);

let upper = greetingFull2.toUpperCase();
console.log(upper);

let lower = greetingFull2.toLowerCase();
console.log(lower);

//includes()
let myString = "Hello, World";
let searchString = "World";

if (myString.includes(searchString)){
    console.log(`This string includes the word ${searchString}`);
}
else{
    console.log(`This string does not include the word ${searchString}`);
}

//startsWith()
//endsWith()
//substring()
//slice()
//split()
//trim()
//replace()
//replaceAll()


console.log("Hello, Carlos \nit a new line \nits a new line");


