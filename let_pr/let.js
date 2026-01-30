// ======================= let =====================


// basic block scope

let a = 1;
console.log(a);

// isolation block

let b = "a";
{
    let b = 2;
}
console.log(b);           // respect block scope

// redeclaration

let c = 3;
//let c=4;                  // can't be redeclared in scope
console.log(c);

// reassignment

let d = 4;
d = 5;
console.log(d);                  // can be reassigned in scope or globally


// function scope + block

function test() {
    let g = 7;
    {
        let g = 8;
        console.log(g);

    }
    console.log(g);

}
test();                         // creates new variable in every scope and isolates it

// function before declaration or tdz in block

function demo() {
    console.log(h);
    let h=9;
}
demo();

// temporal dead zone

 console.log(f);

    let f = 6;                // enter tdz on hoisting (throw error)


