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
//console.log(letters.join(t))

//reverse
let numbers=['10','25','36','55','75','100']
numbers.sort(function(a,b){
  return b.localeCompare(a);
});
console.log(numbers)

//Assignment
//slice()

//splice()

//removing

//indexOf()

//join()

//concat()

//reverse()

//sort()