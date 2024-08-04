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
 console.log(tendo.slice("0,5"));
 console.log(tendo.slice("-1,-4"));

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

//for Loop Exercises

	/*Print Even Numbers from 1 to 20
	Write a for loop that prints all the even numbers between 1 and 20.
	//Calculate the Factorial of a Number
	Write a for loop that calculates the factorial of a given number n.
	//Reverse a String
	•	Write a for loop that reverses a given string.
	4.	Sum of Array Elements
	•	Write a for loop that calculates the sum of all elements in an array.
	5.	Print a Multiplication Table
	•	Write a for loop that prints the multiplication table of a given number n.
	6.	Count the Number of Vowels in a String
	•	Write a for loop that counts the number of vowels in a given string.
	7.	Find the Maximum Element in an Array
	•	Write a for loop that finds the maximum element in an array.
	8.	Create an Array of Square Numbers
	•	Write a for loop that creates a new array containing the squares of numbers from 1 to 10.
	9.	Count Down from 10 to 1
	•	Write a for loop that counts down from 10 to 1 and prints each number.
	10.	Check for Prime Numbers
	•	Write a for loop that checks if a given number n is prime.*/