//if statement
console.log(6<5);
if (6<5){
    console.log("3 is lessthan 5");
}

let age = 20;
if (age < 18){
    console.log("Your minor");
}else{
    console.log("Your Adult!");
}


let score = 99;

if (score >= 90)
{
    console.log("grade A");
}
else if (score >= 80)
{
    console.log("grade B");
}
else if (score >= 70)
{
    console.log("grade C");
}else{
    console.log("grade F");
}

let day = 4;
let dayName;
console.log(dayName);

switch (day){
    case 0:
        dayName = "Sunday"
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thurday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
}

console.log(dayName);

// check if someone can drive
let age2 = 30;
let hasLicense = false;

// && - and
// || - or
// ! - not

if (age2 >= 18 && hasLicense){
    console.log("You can drive!");
}else{
    console.log("You can not drive!");
}

let age3 = 30;
let perm = true;

if (age3 >= 18 || perm){
    console.log("Attend");
}else{
    console.log("Do not Attend");
}

let isRaining = true;

if (!isRaining){
    console.log("go out");
}else{
    console.log("dont go");
}
