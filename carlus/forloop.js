/*
for (intitialize; condition; increment/decrement){
    code for working with
}

*/
let count = 1;
for (let i = 1; i <= 5; i++){
    console.log(count);
    count += 1; // count = count + 1
}

let letts = ['a', 'b', 'c', 'd'];

for (let i = 0; i < letts.length; i++){
    console.log(letts[i]);
}

let letters = ['a', 'b', 'c', 'd'];

for (let letter in letters){
    console.log(letter);
}


let person = {
    name: "Carlus",
    age: 21,
    city: "Nansana"
};

for (let key in person){
    console.log(key + ' : ' + person[key]); //key = name //key = age //key = city
}

for (let i = 1; i <= 10; i++){
    if (i === 6){
        break; // the loop stops wen i is 6
    }
    console.log(i);
}

console.log("Odd nums");
for (let i = 1; i <= 10; i++){
    if (i % 2 === 0){
        continue; // the loop skfor (let i = 1; i > 0; i++){
            console.log(i);ips
    }
    console.log(i);
}

/*
for (let i = 1; i > 0; i++){
    console.log(i);
}
*/
console.log("Using i--")
for (let i = 5; i >= 0; i--){
    console.log(i);
}
