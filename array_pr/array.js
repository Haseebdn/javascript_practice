// ================================= Array Practices =================================

// used to store ordered data collection

// syntax
let arr = new Array();
let arr1 = [];

let fruits = ["Apple", "Banana", "Mango"];

// Accessing array elements

// We can get an element by its index number in square brackets:
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango

// Modifying array elements

fruits[1] = "Orange";
console.log(fruits[1]);

//adding new element

fruits[3] = "lemon";

console.log(fruits); // ["Apple", "Banana", "Mango","lemon"]

// ================================ Array Methods =================================

// 1.============== push() ====================

//  adds an element to the end of the array

//arr.push("elements",...);

fruits.push("berry", "Strawberry");
console.log(fruits); // ["Apple", "Orange", "Mango","lemon", "berry", "Strawberry"]

//  ============== push() ====================

//2. ============== pop() ====================

//  removes the last element from the array

//arr.pop();

let vegetables = ["Carrot", "Spinach", "Broccoli", "Tomato", "Potato"];
vegetables.pop();
console.log(vegetables); // ["Carrot", "Spinach", "Broccoli", "Tomato"]

//  ============== pop() ====================

// 3. ============== shift() ====================

// removes the first element from the array

//arr.shift();

let birds = ["Sparrow", "Eagle", "Parrot", "Pigeon"];
birds.shift();
console.log(birds); // ["Eagle", "Parrot", "Pigeon"]

//  ============== shift() ====================

// 4. ============== unshift() ====================

//  adds element to the start of the array

// arr.unshift("elements",...);

let tools = ["Hammer", "Screwdriver", "Wrench"];
tools.unshift("Drill", "Saw");
console.log(tools); // ["Drill", "Saw", "Hammer", "Screwdriver", "Wrench"]

//  ============== unshift() ====================

// 5. ============== Array.isArray() ====================

//  checks if the variable is an array

// Array.isArray(arr);

console.log(Array.isArray(fruits)); // true

console.log(Array.isArray(tools)); // true

//  ============== Array.isArray() ====================

// 6. ============== length ====================

//  returns the number of elements in the array

//arr.length;

console.log(fruits.length); // 6

vegetables.length = 3;
console.log(vegetables.length); // 3

//  ============== length ====================

// 7. ============= Array toString() =====================

//  converts an array to a string

// let newarr = arr.toString();

let animals = ["Lion", "Tiger", "Elephant", "Giraffe"];
let strAnimals = animals.toString();
console.log(strAnimals); // Lion,Tiger,Elephant,Giraffe

//  ============= Array toString() =====================

// 8. ============ Array at() ====================

// returns the element at the specified index

//arr.at(index);

console.log(animals.at(2)); // Elephant
console.log(animals.at(1)); // Tiger

//  ============ Array at() ====================

// 9. =============== Array concat() =================

//  merges two or more arrays

// let newarr = arr.concat(arr2, arr3,...);

let appliances = ["Refrigerator", "Microwave"];
let allItems = appliances.concat(vegetables);
console.log(allItems); // ["Refrigerator", "Microwave", "Carrot", "Spinach", "Broccoli",]

// 10. ============== Array join() =================

//  joins all elements of an array into a string

// let newarr = arr.join("_,- etc");

let joinedtools = tools.join(" _ ");
console.log(joinedtools); // Drill _ Saw _ Hammer _ Screwdriver _ Wrench

//  ============== Array join() =================

// 11. ============= Array slice() =================

//  returns a shallow copy of a portion of an array

// let newarr = arr.slice(start, end);

let electronics = ["TV", "Radio", "Laptop", "Tablet", "Smartphone"];
let appliedElectronics = electronics.slice(1, 3);
console.log(appliedElectronics); // ["Radio", "Laptop"]

// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, and up to (but not including) the end argument.
// If you omit the end argument, the slice() method will select all elements from the start argument to the end of the array.

//  ============= Array slice() =================

// 12. ============== Array splice() ==================

//  adds/removes items to/from an array

// arr.splice(start, deleteCount, item1, item2,...);

let unsortedNumbers = [30, 10, 40, 20, 50];
console.log(unsortedNumbers); // [30, 10, 40, 20, 50]
unsortedNumbers.splice(1, 2, 15, 25);
console.log(unsortedNumbers); // [30, 15, 25, 20, 50]
// unsortedNumbers.splice(0,2);
// console.log(unsortedNumbers);

// The first parameter (1) defines the position where new elements should be added (spliced in).
// The second parameter (2) defines how many elements should be removed.
// The rest of the parameters (15, 25) define the new elements to be added.

//  ============== Array splice() ==================

// 13. ============ Array delete() ================

//  deletes an element from an array

// delete arr[index];

let grades = ["A+", "B+", "C+", "D+", "E+"];
delete grades[2];
console.log(grades); // ["A+", "B+", empty, "D+", "E+"]

// Note: Using delete leaves undefined holes in the array. To remove an element without leaving a hole, use splice() instead.

//  ============ Array delete() ================

// 14. =============== Array toSpliced() =================

//  returns a new array with elements removed or replaced

// let newarr = arr.toSpliced(start, deleteCount, item1, item2,...);

let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
let newColors = colors.toSpliced(1, 2, "Orange", "Pink");
console.log(newColors);
console.log(colors);

// The original array remains unchanged.

// =============== Array toSpliced() =================

// 15. ============== Array copyWithin() =================

//  copies elements within an array

// arr.copyWithin(target, start, end);

let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
cities.copyWithin(1, 3, 5);
console.log(cities); // ["New York", "Houston", "Phoenix", "Houston", "Phoenix"]

// The first parameter (1) is the target index to copy to.
// The second parameter (3) is the start index to copy from.
// The third parameter (5) is the end index to copy from (not included).

//  ============== Array copyWithin() =================

// 16. =============== Array flat() ==================

//  flattens nested arrays

// let newarr = arr.flat(depth);

let nestedArr = [1, 2, [3, 4], [5, [6, [7]]]];
console.log(nestedArr);
let flatArr = nestedArr.flat(2);
console.log(flatArr); // [1, 2, 3, 4, 5, 6, [7]]

// The parameter (2) indicates the depth level to flatten.

//  =============== Array flat() ==================

// 17.================= Array indexOf() =================

//  returns the index of the first occurrence of an element in an array

// let index =arr.indexOf(element);

let index = cities.indexOf("Houston");
console.log(index); // 1

// If the element is not found, it returns -1.

// ================= Array indexOf() =================

// 18.================= Array lastIndexOf() =================

//  returns the index of the last occurrence of an element in an array

// arr.lastIndexOf(element);

let lastIndex = cities.lastIndexOf("Houston");
console.log(lastIndex); // 3

// If the element is not found, it returns -1.

// ================= Array lastIndexOf() =================

// 19.============== Array Includes() =================

//  checks if an array contains a certain element

// let newarr = arr.includes(element);

let cars = ["Toyota", "Honda", "Ford", "BMW"];
let hasBMW = cars.includes("BMW");
console.log(hasBMW); // true
let hasAudi = cars.includes("Audi");
console.log(hasAudi); // false

// returns true if the array contains the element, otherwise false.

// ============== Array Includes() =================

// 20.================ Array reverse() =================

//  reverses the order of the elements in an array

// arr.reverse();

cars.reverse();
console.log(cars); // ["BMW", "Ford", "Honda", "Toyota"]

// reverses the order of elements in the array

// ================= Array reverse() =================

// 21.=============== Array split() ==================

//  splits a string into an array of substrings

// let newarr = arr.split("_,- etc");

let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(" ");
console.log(words); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

// splits the string at each space character and returns an array of substrings
// If no separator is provided, it returns an array with the original string as the only element.

// 22.================ Array fill() =================

//  fills all the elements of an array with a static value

// arr.fill(value, start, end);

let fillArr = [5, 10, 15, 20, 25];
fillArr.fill(0);
console.log(fillArr); // [0, 0, 0, 0, 0]

// fills the entire array with the value 0
// You can also specify a start and end index to fill a portion of the array.

fillArr.fill(1, 0, 3);
console.log(fillArr); // [1, 1, 1, 0, 0]

// fills the array from index 0 to index 3 (not included) with the value 1

// ================= Array fill() =================

// ================================= End of Array Practices =================================
