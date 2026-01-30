// ================== const ===============


//basic usage

const a = 1;
console.log(a);

// reassignment

const b = 2;
// b=3;                     // can't be reassigned

// redeclaration

const c = 4;
// const c=5;               // can't be redeclared

// block  scope

{
    const d = 6;

}
// console.log(d);            // respect block scope

/* missing initialization

const d;
d=7;
console.log(d); 

*/

/* tdz

console.log(e);

const e=8;                  enter tdz on hoisting
*/

// block shadowing

const f = 9;
{
    const f = 10;
    console.log(f);
}
console.log(f);             // shows block shadowing

// function scope

function test(){
    const g=11;
}
console.log(g);             // respect function scope