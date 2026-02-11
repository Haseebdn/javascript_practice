// ======================== Loops ======================

// Loops are a way to repeat the same code multiple times

// =========================== While Loop

// While the condition is truthy, the code from the loop body is executed
// It is used when condition is known but number of iteration is known

// Syntax

/*
while (condition) {
    code
    }
    */

/*
let i = 2;
while (i<=20) {
    console.log(i);
    i+=2;
}
*/

// let password = "";

// while (password !== "1234") {
//   password = prompt("Enter your password");
// }

// =========================== While Loop

// =========================== Do-While loop

// The condition check can be moved below the loop body using the do..while syntax.
// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
// This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy

// Syntax

//  do {
//  loop body
// } while (condition);

/*
let i = 0;
do {
    alert( i );
    i+=1;
    } while (i <= 3);
    
    let e = 0;
do {
    alert( e );
    e+=3;
} while (e < 3);
 */

// =========================== Do-While loop

// =========================== For loop

// it is used when start,condition and step is known
// also iteration number known

// Syntax

// for (begin; condition; step) {
//   // ... loop body ...
// }

// for(let i=1; i<20; i+=2){
//     console.log(i);
// }

// ==================== Continue and break statements in loops

// ======================= break

// used to break loop

// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Sum: ' + sum );

// ======================= continue

// placed from where current iteration break
// used to move on next iteration

// for (let i = 0; i < 10; i++) {

//   // if true, skip the remaining part of the body
//   if (i % 2 == 0) continue;

//   alert(i); // 1, then 3, 5, 7, 9
// }

// No break/continue to the right side of ‘?’



// let num = Math.floor(Math.random() * 100) + 1;
// console.log(num);

// let i = 1;
// do {
//   let n = +prompt("Enter Your Number from 1 to 100");

//   if (n > num) {
//     alert("Your number is greater than original number");
//   } else if (n < num) {
//     alert("Your number is less than original number");
//   } else if (n == num) {
//     alert("You have guessed the number");
//     break;
//   }

//   let retry = 10 - i;

//   if (retry >= 1 && retry < 10) {
//     alert("Your remaining tries are : " + retry);
//   } else {
//     alert("Your available tries are finished");
//   }

//   i++;
// } while (i <= 10);
