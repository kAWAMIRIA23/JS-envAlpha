console.log("Hello,World!");
//strings
//startsWith
let text = "This boy is tall.";
console.log(text.startsWith("This"));
console.log(text.startsWith("tall"));

 //endswith
 let text2 = "Today is a great day!";
 console.log(text2.endsWith("day!"));
 console.log(text2.endsWith("great"));

 //substring
 let blue= "This is a dog!";
 console.log(blue.substring(0,4));
 console.log(blue.substring(9));
 console.log(blue.substring(7,5))

 //slice
 let tendo="This is another dog.";
 console.log(tendo.slice(0,5));
 console.log(tendo.slice(-1,-4));

 //split
 let daddy= "I am a parent.";
 let arr= daddy.split(" ");
 console.log(arr);

 //trim
 let mummy= "   I love Germany   ";
 console.log(mummy.trim());

 let mum ="  sirika ko  ";
 console.log(mum.trim());

//replace
let kisa= "Hello Joshua!";
let newKisa = kisa.replace("Joshua!","Mbalule");
console.log(newKisa);

//replaceAll
let dog= "I am a dog dog."
let newDog = dog.replaceAll("dog","person");
console.log(newDog);

