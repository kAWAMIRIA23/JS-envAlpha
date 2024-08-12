//creating objects
//method one (using object literals)
let person = {
    firstName: "Carlus",
    lastName: "Innocent",
    age: 30,
    isStudent: true,
    greet: function(){
        console.log(`Hello, ${this.firstName}:`);
    }
};

//method two (new object syntax)
let personTwo = new Object();

personTwo.firstName = "Martha";
personTwo.lastName = "Teze";
personTwo.age = 21;
personTwo.isStudent = false;
personTwo.greet = function(){
    console.log(`Hello, ${this.firstName}:`);
};

//accessing properties
//method one (dot notation)
console.log(person.firstName);
console.log(personTwo.age);
console.log(person);
console.log(personTwo);

//method two (bracket notation)
console.log(person['firstName']);
console.log(personTwo['age']);

//afew cases
let property = "age";
console.log(person[property]);

//modifying object properties
person.age = 50;
personTwo['age'] = 40;
console.log(person.age);
console.log(personTwo.age);

//adding new properties
person.bestCor = "Black";
person.height = 10;
personTwo.bestCor = "White";
personTwo.height = 8;

console.log(person);
console.log(personTwo);

//delete properties from object
delete person.isStudent;
delete personTwo.height;

console.log(person);
console.log(personTwo);

person.greet();

//loopimg through (for...inloop)
for (let key in person){
    console.log(`${key} is ${person[key]}`);
}

/*
let property = "age";
console.log(person[property]);

key = firstname
firstname is carlus

for
do...while
while
for....inloop
*/

for (let property in personTwo){
    if (property === 'greet'){
        personTwo.greet();
    }
    else{
        console.log(`${property} is ${personTwo[property]}`);
    }
}

//existance of properties
let car = {
    brand:'Toyota',
    makeYear:2000,
    colour:'Black'
}

console.log('brand' in car);
console.log('year' in car);

//nested objects
let student = {
    name:{
        firstName:'Carlus',
        lastName:'Innocent'
    },
    dOb:12052003,
    indexNumber:'1555/001'
}

console.log(student.name.firstName);
console.log(student.name['lastName']);
console.log('Students name is, ${lastName}')
console.log(`Students name is; ${student.name.firstName} ${student.name.lastName}`)


//objects and functions
// returning an object from a function
function createPerson(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName
    };
}

let student1 = createPerson('Mukasa', 'Fred');
let student2 = createPerson('Aine', 'Carlus');
console.log(student1, student2);

//passing an object to a function
function printPerson(st){
    console.log(st.firstName + " " + st.lastName);
}

printPerson(student2);
printPerson(student1);
