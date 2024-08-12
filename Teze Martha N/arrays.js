let cars =['benz','subaru','bmw','wish','noah']
//slice
console.log(cars.slice(1,3));

//splice
console.log(cars.splice(2,4));

//indexOf
let clothes=['shirt','skirt','trouser','vest']
console.log(clothes.indexOf('trouser'))

//sort- this is an easy way to sort but if you need them in descending order you'd need to use the localeCompare function
clothes.sort();
console.log(clothes);

//sort
let letters =['b','l','u','e']
letters.sort(function (a,b){
  return b.localeCompare(a);
})
console.log(letters)

//reverse
let numbers=['10','25','36','55','75','100']
numbers.sort(function(a,b){
  return b.localeCompare(a);
});
console.log(numbers)

//removing and adding
//adds index at the end of array
numbers.push('45');
console.log(numbers);

//unshift adds (can also remove)index at beginning of array
cars.unshift('harrier');
console.log(cars);

/*splice adds index at specific points of the array.
clothes.splice('scarf');
console.log(clothes);*/

//removes index from array
//pop adds index at the end of array
let removed = letters.pop();
console.log(letters);
console.log(removed);

//shift
//removes at the beginning
let accessories=['shades','earings','bracelet','necklace']
let removed2= accessories.shift();
console.log(accessories);
console.log(removed2);



//Assignment
//slice()

//splice()

//removing

//indexOf()

//join()

//concat()

//reverse()

//sort()