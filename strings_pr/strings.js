// =============================== Strings ===============================

const you ="hey";

//using backticks allows strings to span multiple lines

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList); // a list of guests, multiple lines

//in quotes or double quotes, we can use \n to create a new line

let guestList1 = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList1); // a multiline list of guests, same as above

// result will be the same in both cases


// =============================== string methods ===============================

// 1.======================= Length =======================

// returns the length of a string( number of characters.)

// string.length

let str = "Hello world!";
console.log(str.length); // 12

// spaces and punctuation are counted as characters

// ======================= Length =======================

// 2.======================= Changing case =======================

// toUpperCase() - returns the string converted to uppercase
// toLowerCase() - returns the string converted to lowercase

let car = "Lamborghini URUS";

console.log(car.toLowerCase()); // lamborghini urus
console.log(car.toUpperCase()); // LAMBORGHINI URUS

// ======================= Changing case =======================

// 3.======================= Includes() =======================

// checks if a string contains a specified value

// string.includes(searchValue)
let phrase = "The quick brown fox jumps over the lazy dog.";

console.log(phrase.includes("fox")); // true
console.log(phrase.includes("cat")); // false

// ======================= Includes() =======================

// 4.======================= Slice() =======================

// extracts a section of a string and returns it as a new string

// string.slice(startIndex, endIndex)

let message = "Hello, welcome to the world of JavaScript.";

console.log(message.slice(7, 14)); // welcome
console.log(message.slice(22)); // the world of JavaScript.
console.log(message.slice(-11)); // JavaScript.

// ======================= Slice() =======================

// 5.======================= substring() =======================

// returns the part of the string between the start and end indexes

// string.substring(startIndex, endIndex)

let text = "JavaScript is a versatile language.";

console.log(text.substring(0, 10)); // JavaScript
console.log(text.substring(16)); // versatile language.

// no negative indexes are allowed in substring()

// ======================= substring() =======================

// 6.======================= replace() =======================

// replaces a specified value with another value in a string

// string.replace(searchValue, newValue)

let hobby =  "his hobby is reading books.";

console.log(hobby.replace("books", "novels")); // his hobby is reading novels.

// only the first occurrence is replaced
//you can replace all occurences using replaceAll()

// ======================= replace() =======================

// 7.======================= trim() =======================

// removes whitespace from both ends of a string

// string.trim()

let world = "        People         ";
console.log(world);
console.log(world.trim()); // "People"

// can also use trimStart() and trimEnd() to remove whitespace from the start and end respectively

// ======================= trim() =======================

// 8.======================= split() =======================

// splits a string into an array of substrings based on a specified separator

// string.split(separator)

let fruits = "apple, banana, cherry, date";
let fruitArray = fruits.split(", ");
console.log(fruitArray); // ["apple", "banana", "cherry", "date"]

// ======================= split() =======================

// ====================== indexof() ===================== 

//  returns the index of the first occurrence of a specified value in a string

// string.indexOf(searchValue)

let sentence = "Find the index of the first occurrence of the word 'the'.";
console.log(sentence.indexOf("the")); // 5
console.log(sentence.lastIndexOf("the"));

// lastIndexOf() returns the index of the last occurrence 

// ===================== indexof() ======================

// ==================== at() ==================

// returns the character at the specified index

// string.at(index)

let alphabet = "ABCDEF";

console.log(alphabet.at(0)); // A
console.log(alphabet.at(-1)); // F

// negative index counts from the end of the string

// =================== at() ===================

// ==================== concat() ==================

// concatenates two or more strings and returns a new string

// string.concat(string2, string3, ...)
let mixed = fruits.concat("-", hobby);
console.log(mixed);// "apple, banana, cherry, date-his hobby is reading books."

// =================== concat() ===================

// ==================== charAt() ==================

// returns the character at the specified index

// string.charAt(index)

let colors = "Red, Green, Blue";

console.log(colors.charAt(5)); // G

// =================== charAt() ===================

// =================== charCodeAt() ==================

// returns the Unicode of the character at the specified index

// string.charCodeAt(index)

console.log(colors.charCodeAt(3));

// for same purpose,  codePointAt() can also be used
console.log(colors.codePointAt(3));

// ================== charCodeAt() ===================

// ==================== repeat() ==================

// returns a new string with a specified number of copies of the original string

// string.repeat(count)

console.log(world.repeat(3)); // "        People                 People                 People         "

// =================== repeat() ===================

// ==================== isWellFormed() ==================

// checks if a string is well-formed according to Unicode standard

// string.isWellFormed()

let num = "12345";
console.log(num.isWellFormed()); // true

// =================== isWellFormed() ===================

// ================ toWellFormed() ==================

// returns a well-formed string according to Unicode standard

// string.toWellFormed()

let malformed = "A\uD800BC"; // malformed string
console.log(malformed.toWellFormed()); // "A�BC"

// =============== toWellFormed() ===================

// =============== padStart() and padEnd() ==================

// pads the current string with another string until the resulting string reaches the given length

// string.padStart(targetLength, padString)
// string.padEnd(targetLength, padString)

let number = "5";
console.log(number.padStart(3, "0")); // "005"
console.log(number.padEnd(3, "0")); // "500"

// ============== padStart() and padEnd() ===================

// ==================== starwith() and endsWith() ==================

// checks if a string starts or ends with a specified value

// string.startsWith(searchValue)
// string.endsWith(searchValue)

console.log(sentence.startsWith("Find"));
console.log(sentence.endsWith("the'."));

// =================== starwith() and endsWith() ===================

// ================================================================
