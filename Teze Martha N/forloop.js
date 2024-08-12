//for Loop Exercises
 
	//Print Even Numbers from 1 to 20
	//1.Write a for loop that prints all the even numbers between 1 and 20.
	console.log("Even Numbers")
	for(i=1; i<=20; i++){
		if (i % 2=== 0){
			console.log(i);
	
		}
	} 
	//Calculate the Factorial of a Number
	//2.Write a for loop that calculates the factorial of a given number n.
	let n=7;
	let factorial=1;

	for( let i=1; i<=n; i++){
		factorial *= i;

	}
	console.log(`The factorial of ${n} is ${factorial}`)
	
	//Reverse a String
	//3.Write a for loop that reverses a given string.
	let str="Was it a cat i saw";
	let reversedStr ="";

	for(let i= str.length-1; i>=0; i--){
		reversedStr += str[i];
	}
	console.log(reversedStr);


	//Sum of Array Elements
	//4.Write a for loop that calculates the sum of all elements in an array.
	
	/*5.	Print a Multiplication Table
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