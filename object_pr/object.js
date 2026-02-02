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

//dot notation

console.log(me.name); //only for single word keys

//bracket notation for multi-word keys with spaces

console.log(me["residential city"]);

//  adding single word key

me.isadmin = true; //

// updating and adding property for multi-word keys use bracket notation

me["residential city"] = "Islamabad"; //
me["fav hobby"] = "driving";
console.log(me);

// Deleting properties

delete me.age; 
delete me["fav hobby"];
console.log(me);


// ================================ Object Methods =============================

// 1. ----------------------- Object.keys() -------------------

// returns an array of a given object's own property names, in the same order.

// object.keys(obj);

const user1 = {
  name: "Ali",
  age: 20,
  city: "Karachi",
};

console.log(Object.keys(user1)); // ["name", "age", "city"]

// ----------------------- Object.keys() -------------------

// 2. ----------------------- Object.values() -------------------

// returns an array of a given object's own enumerable property values, in the same order. 

// object.values(obj);

const user2= {
  name: "Ahmed",
  age: 25,
  city: "Lahore",
};
console.log(Object.values(user2)); // ["Ahmed", 25, "Lahore"]

// ----------------------- Object.values() -------------------

// 3. ----------------------- Object.entries() -------------------

// returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order.

// object.entries(obj);

const user3  = {
  name: "Hammad",
  age: 30,
  city: "Islamabad",
};
console.log(Object.entries(user3)); // [["name", "Hammad"], ["age", 30], ["city", "Islamabad"]]

// ----------------------- Object.entries() -------------------

//4. ----------------------- Object.assign() -------------------

// used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.

// Object.assign(target, ...sources);

const target = { a: 1, b: 2 };
const source = { d: 4, c: 5 };

const returnedTarget = Object.assign(target, source,);

console.log(returnedTarget); // { a: 1, b: 2, c: 5, d: 4 }

// ----------------------- Object.assign() -------------------

//5. ----------------------- Spread {...} -------------------

// object spread copies properties from one object to another

// let newObj = { ...obj1, ...obj2 };

const objA = { a: 1, b: 2 };
const objB = { c: 3, d: 4 };

const objC = { ...objA, ...objB };
console.log(objC); // { a: 1, b: 2, c: 3, d: 4 }

// ----------------------- Spread {...} -------------------

//6. ----------------------- hasOwnProperty() -------------------

// method returns a boolean indicating whether the object has the specified property as its own property.

// obj.hasOwnProperty(prop);

const marks = {
  math: 90,
  physics: 85,
  chemistry: 88,
};

console.log(marks.hasOwnProperty("math")); // true
console.log(marks.hasOwnProperty("biology")); // false

// ----------------------- hasOwnProperty() -------------------

//7. ----------------------- Object.freeze() -------------------

// method freezes an object. A frozen object can no longer be changed

// Object.freeze(obj);

const my_car = {
  brand: "Toyota",
  model: "Camry",
};

Object.freeze(my_car);
my_car.year = 2020; // This will not be added because the object is frozen
console.log(my_car);

//console.log(Object.isFrozen(my_car)); // (true,false) check if object is frozen


// ----------------------- Object.freeze() -------------------

//8. ----------------------- Object.seal() ---------------------

// method seals an object, preventing new properties from being added to it 

// Object.seal();

const my_bike = {
  brand: "Honda",
  model: "CBR",
};

Object.seal(my_bike);
my_bike.year = 2020; // This will not be added because the object is sealed
console.log(my_bike);

log(Object.isSealed(my_bike)); // (true,false) check if object is sealed

// ----------------------- Object.seal() -------------------

//9. ----------------------- Object.create() -------------------

// method creates a new object, using an existing object as the prototype of the newly created object.

// Object.create(proto, [propertiesObject]);

const personProto = {
  greet() {
    console.log("Hello!");
  },
};
const person1 = Object.create(personProto);
person1.name = "Ali";
person1.greet(); // Hello!

// ----------------------- Object.create() -------------------

//10. ----------------------- Object.is() -------------------

// method determines whether two values are the same value.

// Object.is(value1, value2);

console.log(Object.is("foo", "foo")); // true
console.log(Object.is(1,1)); // true

// ----------------------- Object.is() -------------------

//11. ----------------------- Object.defineProperty() -------------------

// method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

// Object.defineProperty(obj, prop, descriptor);

const objD = {};
Object.defineProperty(objD, "property1", {
  value: 42,
  writable: false,
});
console.log(objD.property1); // 42

// ----------------------- Object.defineProperty() -------------------

//12. ----------------------- Object.defineProperties() -------------------

// method defines multiple new or modifies existing properties directly on an object, returning the object.

// Object.defineProperties(obj, props);

Object.defineProperties(user, {
  id: { value: 1 },
  role: { value: "admin" }
});

// ----------------------- Object.defineProperties() -------------------

//13. ----------------------- getOwnPropertyDescriptors() -------------------

// method returns all own property descriptors of a given object.

// Object.getOwnPropertyDescriptors(obj);

const objE = {
  property1: 42,
  property2: "Hello",
};

Object.defineProperty(objE, "property1", {
  value: 42,
  writable: false,
})

console.log(Object.getOwnPropertyDescriptors(objE));

// ----------------------- getOwnPropertyDescriptors() -------------------

//14. ----------------------- Object.getPrototypeOf() -------------------

// method returns the prototype (i.e. the internal [[Prototype]] property) of the specified object.

// Object.getPrototypeOf(obj);

const proto = {
  greet() {
    console.log("Hello!");
  } 
};
const objF = Object.create(proto);
console.log(Object.getPrototypeOf(objF) === proto); // true

// ----------------------- Object.getPrototypeOf() -------------------

//15. ----------------------- toString() -------------------

// method returns a string representing the object.

// obj.toString();

const objG = {
  name: "Ali",
  age: 25,
};
console.log(objG.toString()); // [object Object]

// ----------------------- toString() -------------------

//16. ----------------------- valueOf() -------------------

// method returns the primitive value of the specified object.

// obj.valueOf();

const objH = {
  name: "Ahmed",
  age: 30,
};
console.log(objH.valueOf()); // { name: 'Ahmed', age: 30 }

// ----------------------- valueOf() -------------------

//17. ----------------------- propertyIsEnumerable() -------------------

// method returns a boolean value indicating whether the specified property is enumerable.

// obj.propertyIsEnumerable(prop);

const objI = {
  name: "Ali",
  age: 30,
};
console.log(objI.propertyIsEnumerable("name")); // true


// ----------------------- propertyIsEnumerable() -------------------

//18. ----------------------- Object.getOwnPropertyNames() -------------------

// Returns all property names, including non-enumerable ones.

// Object.getOwnPropertyNames(obj);

const objJ = {};
Object.defineProperty(objJ, "nonEnumerableProp", {
  value: 42,
  enumerable: false,
});
objJ.enumerableProp = "Hello";

console.log(Object.getOwnPropertyNames(objJ)); // ["nonEnumerableProp", "enumerableProp"]

// ----------------------- Object.getOwnPropertyNames() -------------------

//19. ----------------------- Object.preventExtensions() -------------------

// Prevents new properties from being added to an object.

// Object.preventExtensions(obj);

const objK = {
  name: "Ali",
};
Object.preventExtensions(objK);
objK.age = 25;
console.log(objK); // { name: 'Ali' } age property is not added

console.log(Object.isExtensible(objK)); // false // check if object is extensible

// ----------------------- Object.preventExtensions() -------------------

// ================================ Object Methods =============================
