// creating array
let fruits = ['Apple', 'Banana', 'Orange'];

let numbers = new Array(1, 2, 3, 4, 5, 6);

console.log(fruits[0]);
console.log(fruits[2]);

//modifying elements
fruits[1] = 'Mango';

console.log(fruits);

//array length
console.log(fruits.length);

//common array methods
//push()
fruits.push('Banana');
console.log(fruits);

//pop()
let lastFruit = fruits.pop();
console.log(fruits);
console.log(lastFruit);

/* Try Out
//slice()

//splice()
let animals = ['Dog', 'Cow', 'Goat', 'Hen']
//removing
let remItem = animals.splice(2);
console.log(animals);
console.log(remItem);
*/

//unshift()
fruits.unshift('Banana');
console.log(fruits);

//shift()
let shifted = fruits.shift();
console.log(fruits);
console.log(shifted); 

//indexOf()

//join()

//concat()

//reverse()

//sort()

//looping through arrays
//for loop
let animals = ['Dog', 'Cow', 'Goat', 'Hen']
for (let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}


//for....of loop
for (let animal of animals){
    console.log(animal);
}



//forEach() method
animals.forEach(
    function(anima_l){
        console.log(anima_l);
    }
)


let m_d_a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(m_d_a[2][2]);
console.log(m_d_a[1][1]);