/*
JavaScript Practice Exercise

Objective: Create a small program that simulates a simple user registration system using the concepts you've learned.

Instructions:
1. Create Variables:
   - Create variables to store the following information:
     - A user's first name (string).
     - A user's last name (string).
     - A user's age (number).
     - Whether the user is a student (boolean).

2. Create and Manipulate Arrays:
   - Create an array called hobbies to store the user’s hobbies. Add at least three hobbies to this array.
   - Use a method to add another hobby to the end of the array.
   - Use a method to remove the first hobby from the array.
   - Print out the number of hobbies the user has.

3. Create and Access Objects:
   - Create an object called user that stores the user's first name, last name, age, and student status.
   - Add the hobbies array as a property of the user object.
   - Access and print the user’s full name (first and last name combined).
   - Access and print whether the user is a student.
   - Print out all the user's hobbies using the user object.

4. Create Functions:
   - Create a function called greetUser that takes the user object as a parameter and prints a greeting message like: "Hello, [first name] [last name]!".
   - Create a function called isAdult that takes the user’s age as a parameter and returns true if the user is 18 or older, and false otherwise.
   - Use the isAdult function to check if the user is an adult and print a corresponding message.

5. Conditional Statements:
   - Inside the greetUser function, add a conditional statement that checks if the user is a student. If they are, include "Welcome, student!" in the greeting message.

6. Loops:
   - Write a loop that iterates through the hobbies array and prints each hobby individually.

Extra Challenge (Optional):
- Modify the greetUser function to include the user's age in the greeting.
- Create a do...while loop that asks the user if they want to add another hobby to their list. Keep asking until they answer "no"
*/

//craeting variables
/*
   - Create variables to store the following information:
     - A user's first name (string).
     - A user's last name (string).
     - A user's age (number).
     - Whether the user is a student (boolean).
*/
let firstName = 'Carlus';
let lastName = 'Innocent';
let age = 21;
let isAStudent = true;

//2. Create and Manipulate Arrays:
/*
   - Create an array called hobbies to store the user’s hobbies. Add at least three hobbies to this array.
   - Use a method to add another hobby to the end of the array.
   - Use a method to remove the first hobby from the array.
   - Print out the number of hobbies the user has.
*/
let hobbies = ['swiming', 'dancing', 'eating', 'crying'];
hobbies.push('running');
hobbies.shift();
console.log(hobbies.length);

//3. Create and Access Objects:
/*   - Create an object called user that stores the user's first name, last name, age, and student status.
   - Add the hobbies array as a property of the user object.
   - Access and print the user’s full name (first and last name combined).
   - Access and print whether the user is a student.
   - Print out all the user's hobbies using the user object.
*/
let user = {
    firstName:firstName,
    lastName:lastName,
    age:age,
    isAStudent:isAStudent
};
user.hobbies = hobbies;
console.log(`${user.firstName} ${user.lastName}`);
console.log(`Is user a student: ${user.isAStudent}`);
console.log(user.hobbies);

//4. Create Functions:
/*   - Create a function called greetUser that takes the user object as a parameter and prints a greeting message like: "Hello, [first name] [last name]!".
   - Create a function called isAdult that takes the user’s age as a parameter and returns true if the user is 18 or older, and false otherwise.
   - Use the isAdult function to check if the user is an adult and print a corresponding message.
*/
function greetUser(user){
    console.log(`Hello, ${user.firstName} ${user.lastName}!
        Your age is ${user.age}`);
    if (user.isAStudent){
        console.log("Welcome, student!");
    }
}

function isAdult(user){
    if (user.age >= 18){
        return true;
    }
    else{
        return false;
    }
}
console.log(`Is the user Adult: ${isAdult(user)}`);

//5. Conditional Statements:
/*   - Inside the greetUser function, add a conditional statement that checks if the user is a student. If they are, include "Welcome, student!" in the greeting message.*/

//6. Loops:
/*   - Write a loop that iterates through the hobbies array and prints each hobby individually.*/
for (let hobby of user.hobbies){
    console.log(hobby);
}

//Extra Challenge (Optional):
/*- Modify the greetUser function to include the user's age in the greeting.
- Create a do...while loop that asks the user if they want to add another hobby to their list. Keep asking until they answer "no"
*/