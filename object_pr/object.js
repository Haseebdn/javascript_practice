//================== Objects ==================

const user = {
  name: "Ali",
  age: "20",
  city: "Karachi",
};
console.log(user);

// =========================== Accessing object properties

const me = {
  name: "Ahmed",
  age: 25,
  "residential city": "Lahore", //                 use double quotes for multi-word keys
};
console.log(me);
// console.log(me.name);                     //    dot notation multi-word keys with spaces not allowed
// console.log(me["residential city"]);      //    bracket notation for multi-word keys with spaces
me.isadmin = true; //                              adding new property for multi-word keys use bracket notation
me["residential city"] = "Islamabad"; //           updating property for multi-word keys use bracket notation
me["fav hobby"] = "driving";
console.log(me);
delete me.age; // deleting property
delete me["fav hobby"];
console.log(me);

//============================ Using variables as keys

let keyy = "email";
let ad = {};
ad[keyy] = "ahmed@example.com";
// set
ad["likes birds"] = "yes";

// get
console.log(ad);
// delete
// delete ad["likes birds"];
// console.log(ad);

// let key1 = prompt("What do you want to know about me?", "residential city");
// console.log(me[key1]);                       // get property using variable as key

// ============================ computed properties

let fruit =("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5,
};
console.log(bag);

// ============================ Property value shorthand


const name1 = "Ali";
const age1 = 30;
const keyc="city";

const person = {
  name1, // same as name1: name1
  age1,  // same as age1: age1
  keyc,
};
console.log(person);

//============ For instance, a number 0 becomes a string "0" when used as a property key:

let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
// alert( obj["0"] ); // test
// alert( obj[0] ); // test (same property)

// =========================== In operator

console.log("name1" in person);


// ======================== for...in loop
const user2 = {
  name: "ABC",
  age: 22,
  city: "Lahore"
};

for (let key in user2) 
  console.log(key + ": " + user2[key]);
  //console.log(key);
  // console.log(user2[key]);

  let codes = {
  49: "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) 
  console.log(code); //  does not respect creation order 1, 41, 44, 49


let codes1 = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes1) {
   console.log(code); // respect creation order 49, 41, 44, 1
}

// ======================== Object references

let a = { name: "Ali" };
let b = a;  // a and b refer the same object
b.name = "Ahmed"; // modify the object via b
console.log(a.name); // "Ahmed", change is visible via a

// ======================== Copying objects

//                       Spread operator {...}
let original = { name: "Original" };
let copy = {...original}; // new empty object
console.log(copy);
copy.name = "Copy"; // modify the copy
console.log(original.name); // "Original", original object is intact
console.log(copy.name); // "Copy"


let sain= {
  name: "John",
  age: 30,
  me:20
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in sain) {
  clone[key] = sain[key];
}
// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

console.log( sain ); // still John in the original object
console.log( clone); // Pete in the cloned object

//                  Object.assign

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let merged = Object.assign({}, obj1, obj2);
merged.a=5;
console.log(obj1);
console.log(merged); // { a: 1, b: 3, c: 4 }  obj2 properties overwrite obj1 properties with the same key
// If there are more than two source objects, properties of later objects overwrite earlier ones.
//alert( merged.b == obj2.b ); 


//                             Nested objects

let usere = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone1 = Object.assign({}, usere);

alert( usere.sizes === clone1.sizes ); // true, same object

// user and clone share sizes
usere.sizes.width = 60;    // change a property from one place
//console.log(clone1.sizes.width); // 60, get the result from the other one



//                  structuredClone

let userd = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let cloned = structuredClone(userd);

alert( userd.sizes === cloned.sizes ); // false, different objects

// user and clone are totally unrelated now
userd.sizes.width = 60;    // change a property from one place
//alert(cloned.sizes.width); // 50, not related
// It also supports circular references, 


// =========================== Garbage Collection

// Garbage collection is an automatic memory management process in JavaScript that 
// removes objects from memory when they are no longer reachable or needed.

let userh = { name: "Haseeb" };
let admin = userh;

userh = null;   // still reachable via admin
//➡️ Object is not deleted because admin still references it.

admin = null;  // now unreachable
//➡️ Object becomes garbage and is removed.

// =========================== this keyword

// Access the object’s own properties
const car = {
  brand: "Toyota",
  showBrand() {
    console.log(this.brand);
  }
};
car.showBrand(); // Toyota

// Work with the object dynamically
let userz = {
  name: "ali"
};

function showName() {
  console.log(this.name);
}

userz.how = showName;
userz.how(); // ali

// ============================ Constructor and new operator

function Eser(name, age) {
  this.name = name;
  this.age = age;
  this.isAdmin = false;
}

let userw = new Eser("Jack", 25);

console.log(userw.name); // Jack
console.log(userw.age); // 25
console.log(userw.isAdmin); // false