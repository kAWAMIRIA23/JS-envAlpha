// literal or new object()
//creating object
const age2 = 22

const person = {
    name: 'Carlus innocent',
    gender: 'Male',
    age: 21,
    adress: {
        town: 'Nansana',
        district: 'Wakiso',
        zipcode: 2024
    },
    greet: function() {
        console.log(`Hello, this is my first st.....`);
        console.log(`Hello, this is my second sta..... ${this.name} ${age2}`);
        console.log(`this is line one
this is line two
this is line three`)
    console.log('this is line one\nthis is line two\nthis is line three')
        console.log('Hello, this is my second sta.....' + this.name + age2);
    },
    name2: this.name
}

const person2 = new Object();
person2.firstName = 'John';
person2.car = 'My car';
person2.lastName = 'Bosco';
person2.isTeacher = true;
person2.name = 'ACI';
person2.adress = {
    city: 'Muyenga',
    zipcode: 2023
}

console.log(person2.adress.city)

//accesing object prop.... |dot-notation & bracket notation|
console.log(person.name)
console.log(person.adress.zipcode)
person.greet()

console.log(person['name'])
console.log(person['adress']['zipcode'])

const required = 'name'
console.log(person[required])
///console.log(person.required)

//modifying object properties
person.age = 17
console.log(person.age)

//adding new properties

//deleting prop....
console.log(person2.car)

delete person2.car

console.log(person2.car)

//methods

person.greet()

//iterating x = [1, 2, 3, 4, 5, 6]
const person3 = {
    fN: 'Carlus',
    lN: 'Innocent',
    age: 21,
    occupation: 'Developer'
}

//for...in Loop
for (let key in person3){
    console.log(`Key: ${key} | value: ${person3[key]}`)
}

//.sqrt= calculates square root
//example
//let numbers = 81;
let squareRoot = Math.sqrt(81);
console.log(squareRoot);
//let floatNumber =  49.5;
let floatSquareRoot = Math.sqrt(49.5);
console.log(floatSquareRoot);
let negativeSquareRoot = Math.sqrt(-81);
//let negativeSquareRoot = -81;
console.log(negativeSquareRoot);