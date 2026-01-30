// ================== VAR =====================
// "use strict";

// global scope

var a = 1;
console.log(a);

// redeclaration

var b = 2;
var b = "m";
console.log(b);               // var can be redeclared

// Block scope

{
    var c = 3;
}
console.log(c);              // var Ignores block

// function scope

var d = 2;
function test() {
    d = 4;
    console.log(d);
}
test();                     // var respect function 

// hoisting behavior

console.log(e);
var e = 5;                  // initialize variable as undefined on hoisting

// hoisting inside function

function hoist() {
    console.log(f);
    var f = 6;
}
hoist();                   // initialize variable as undefined on hoisting in function

// shadowing

var g = 7;
function shadow() {
    var g = 8;
    console.log(g);

}
shadow();
console.log(g);           // var allows function level shadowing not block level

// implicit global risk

function risk() {
h=9;
}
risk();
console.log(h);          // implicit global risk occurs when a variable assigned without var,let and const in non strict mode it prints globally not in function





