// ================================= Array Practices =================================

// used to store ordered data collection

// syntax
let arr = new Array();
let arr1 = [];

let fruits = ["Apple", "Banana", "Mango"];

//console.log(fruits); // ["Apple", "Banana", "Mango"]

// Accessing array elements

// We can get an element by its number in square brackets:
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango

// Modifying array elements

fruits[1] = "Orange";
console.log(fruits[1]);

// ================================ Array Methods =================================

// 1. push() - adds an element to the end of the array

//arr.push("elements",...);
fruits.push("berry", "Strawberry");
console.log(fruits); // ["Apple", "Orange", "Mango", "berry", "Strawberry"]

// 2. pop() - removes the last element from the array

//arr.pop();
fruits.pop();
console.log(fruits); // ["Apple", "Orange", "Mango"]

// 3. shift() - removes the first element from the array

//arr.shift();
fruits.shift();
console.log(fruits); // ["Orange", "Mango"]

// 4. unshift() - adds an element to the beginning of the array

//arr.unshift("elements",...);
fruits.unshift("Pineapple");
console.log(fruits); // ["Pineapple", "Orange", "Mango"]

// 5. Array.isArray()    - checks if the variable is an array

//Array.isArray(arr);
console.log(Array.isArray(fruits));

// 6. length - returns the number of elements in the array

//arr.length;
console.log(fruits.length); // 3 length can be manually changed
//fruits.length = 1;
//console.log(fruits); // ["Pineapple"]

// 7. Array toString() - converts an array to a string

//arr.toString();
let strFruits = fruits.toString();
console.log(strFruits); // Pineapple,Orange,Mango

// 8. Array at() - returns the element at the specified index

//arr.at(index);
console.log(fruits.at(2)); // Orange

// 9. Array concat() - merges two or more arrays

//arr.concat(arr2, arr3,...);
let vegetables = ["Carrot", "Potato"];
let food = vegetables.concat(fruits);
console.log(food); // ["Carrot", "Potato", "Pineapple", "Orange", "Mango"]

// 10. Array join() - joins all elements of an array into a string

//arr.join("_,- etc");
let joinedFruits = vegetables.join(" - ");
console.log(joinedFruits); // Carrot - Potato

// 11. Array slice() - returns a shallow copy of a portion of an array

// arr.slice(start, end);
let citrus = fruits.slice(1, 3);
console.log(citrus); // ["Orange", "Mango"]
// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, and up to (but not including) the end argument.

// 12. Array splice() - adds/removes items to/from an array

// arr.splice(start, deleteCount, item1, item2,...);
fruits.splice(1, 0, "Grapes", "Kiwi");
console.log(fruits); // ["Pineapple", "Grapes", "Kiwi", "Orange", "Mango"]

// The first parameter (1) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Grapes", "Kiwi") define the new elements to be added.
// fruits.splice(1,1);
// console.log(fruits);

// 13. Array delete() - deletes an element from an array

// delete arr[index];
delete fruits[1];
console.log(fruits); // ["Pineapple", empty, "Kiwi", "Orange", "Mango"]

// Note: Using delete leaves undefined holes in the array. To remove an element without leaving a hole, use splice() instead.

// 14. Array toSpliced() - returns a new array with elements removed or replaced

// arr.toSpliced(start, deleteCount, item1, item2,...);
let newFruits = fruits.toSpliced(1, 2, "Watermelon");
console.log(newFruits); // ["Pineapple", "Watermelon", "Orange", "Mango"]
console.log(fruits); // ["Pineapple", empty, "Kiwi", "Orange", "Mango"]
// The original array remains unchanged.

// 15. Array copyWithin() - copies elements within an array

// arr.copyWithin(target, start, end);
fruits.copyWithin(1, 3, 5);
console.log(fruits); // ["Pineapple", "Orange", "Mango", "Orange", "Mango"]
// The first parameter (1) is the target index to copy to.
// The second parameter (3) is the start index to copy from.
// The third parameter (5) is the end index to copy from (not included).

// 16. Array flat() - flattens nested arrays

// arr.flat(depth);
let nestedArr = [1, 2, [3, 4], [5, [6,[7] ]]];
let flatArr = nestedArr.flat(2);
console.log(flatArr); // [1, 2, 3, 4, 5, 6, [7]]
// The parameter (2) indicates the depth level to flatten.

// 17. Array indexOf() - returns the index of the first occurrence of an element in an array

// arr.indexOf(element);
let index = fruits.indexOf("Mango");
console.log(index); // 4
// If the element is not found, it returns -1.

// 18. Array lastIndexOf() - returns the index of the last occurrence of an element in an array

// arr.lastIndexOf(element);
fruits.push("Orange");
let lastIndex = fruits.lastIndexOf("Orange");
console.log(lastIndex); // 5
// If the element is not found, it returns -1.

// 19. Array Includes() - checks if an array contains a certain element

// arr.includes(element);
let hasMango = fruits.includes("Mango");
console.log(hasMango); // true
let hasBanana = fruits.includes("Banana");
console.log(hasBanana); // false
// returns true if the array contains the element, otherwise false.

// 20. Array find() - returns the value of the first element that passes a test

// arr.find(function(element) { ... });
let numbers = [10, 20, 40, 45, 50];
let foundNumber = numbers.find(function (num) {
  return num > 35;
});
console.log(foundNumber); // 40
// returns the first element that is greater than 35
// If no elements pass the test, it returns undefined.

// 21. Array findIndex() - returns the index of the first element that passes a test

// arr.findIndex(function(element) { ... });
let foundIndex = numbers.findIndex(function (num) {
  return num > 35;
});
console.log(foundIndex); // 2
// returns the index of the first element that is greater than 35
// If no elements pass the test, it returns -1.

// 22. Array filter() - returns a new array with elements that pass a test

// arr.filter(function(element) { ... });
let filteredNumbers = numbers.filter(function (num) {
  return num > 25;
});
console.log(filteredNumbers); // [40, 45, 50]
// returns a new array with elements greater than 25

// 23. Array map() - creates a new array with the results of calling a function on every element

// arr.map(function(element) { ... });
let doubledNumbers = numbers.map(function (num) {
  return num * 2;
});
console.log(doubledNumbers); // [20, 40, 80, 90, 100]
// returns a new array with each element doubled

// 24. Array reduce() - reduces the array to a single value by executing a reducer function

// arr.reduce(function(accumulator, currentValue) { ... }, initialValue);
let sum = numbers.reduce(function (total, num) {
  return total + num;
}, 0);
console.log(sum); // 165
// returns the sum of all elements in the array

// 25. Array sort() - sorts the elements of an array

// arr.sort(function(a, b) { ... });
let unsortedNumbers = [50, 10, 40, 20, 30];
unsortedNumbers.sort(function (a, b) {
  //   b - a for descending order
  return a - b;
});
console.log(unsortedNumbers); // [10, 20, 30, 40, 50]
// sorts the array in ascending order
// Note: By default, sort() converts elements to strings and sorts them lexicographically.
// To sort numbers correctly, a compare function is needed.

// 26. Array reverse() - reverses the order of the elements in an array

// arr.reverse();
unsortedNumbers.reverse();
console.log(unsortedNumbers); // [50, 40, 30, 20, 10]
// reverses the order of elements in the array  

// 27. Array split() - splits a string into an array of substrings

// arr.split("_,- etc");
let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(" ");
console.log(words); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
// splits the string at each space character and returns an array of substrings
// If no separator is provided, it returns an array with the original string as the only element.

// 28. Array forEach() - executes a provided function once for each array element

// arr.forEach(function(element, index) { ... });
numbers.forEach(function (num, index) {
  console.log("Index " + index + ": " + num);
});
// prints each element and its index in the array
// Note: forEach() does not return a new array; it simply executes the function for each element.

// 29. Array fill() - fills all the elements of an array with a static value

// arr.fill(value, start, end);
let fillArr = new Array(5);
fillArr.fill(0);
console.log(fillArr); // [0, 0, 0, 0, 0]
// fills the entire array with the value 0
// You can also specify a start and end index to fill a portion of the array.
fillArr.fill(1, 1, 4);
console.log(fillArr); // [0, 1, 1, 1, 0]
// fills the array from index 1 to index 4 (not included) with the value 1

// 30. Array every() - tests whether all elements in the array pass a test

// arr.every(function(element) { ... });
let allAbove5 = numbers.every(function (num) {
  return num > 5;
});
console.log(allAbove5); // true
// returns true if all elements are greater than 5, otherwise false
// If the array is empty, it returns true.

// 31. Array some() - tests whether at least one element in the array passes a test

// arr.some(function(element) { ... });
let someAbove45 = numbers.some(function (num) {
  return num > 45;
});
console.log(someAbove45); // true
// returns true if at least one element is greater than 45, otherwise false
// If the array is empty, it returns false. 

// ================================= End of Array Practices =================================    




