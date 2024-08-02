//Filter Out odd Numbers from an Array
//we user the method of filter()

function filteredOdds (myArray){
  return myArray.filter(number => number % 2 === 0); 
}
console.log(filteredOdds([4, 19, 15, 6, 10, 21, 13, 9]));

//a function to check if a string is palindrome

function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed
}

console.log(palindrome("madam"));

