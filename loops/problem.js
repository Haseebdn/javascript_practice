// ======================== Problem :1 =====================

// Write a program to print all multibles of given input number till given input number.

// let num = +prompt("Enter number to obtain table");
// let limit = +prompt("Enter table limit");
// let i = 1;
// while (i<=limit) {
//      console.log(num + "x" + i + "=" +(num*i));
//      i++
// }

// ======================== Problem :1 =====================

// ======================== Problem 2 =======================

// write a guess the number game. Will take input from user till user make properly guess the specific number. Will give hints to user after input if user enter lower number then can say "Hey! You number is greater than this" and if number entered is greater than guess number then can say "Your number is smaller than this". Should also count number of tries.

// input

let num = Math.floor(Math.random() * 100) + 1;
console.log(num);

let i = 1;
do {
  let n = +prompt("Enter Your Number from 1 to 100");

  if (n > num) {
    alert("Your number is greater than original number");
  } else if (n < num) {
    alert("Your number is less than original number");
  } else if (n == num) {
    alert("You have guessed the number");
    break;
  }

  let retry = 10 - i;

  if (retry >= 1 && retry < 10) {
    alert("Your remaining tries are : " + retry);
  } else {
    alert("Your tries are finished");
  }

  i++;
} while (i <= 10);

// ======================== Problem 2 ==========================

// ======================== Problem 3 ==========================

// Print bellow pattern in js by taking lines as input
//  *
//  **
//  ***
//  ****
//  *****

// let inp = +prompt("Enter lines of star print");
// let i = 1;
// let star = "*";
// while (i <=inp) {
//   console.log(star);
//   star+='*'
//   i++;;
// }

// console.log("*");
// console.log("**");
// console.log("***");
// console.log("****");
// console.log("*****");

// ======================== Problem 3 ==========================

// ======================== Problem 4 ==========================

//  write a program to take string input and count vowels in input string

// hello
// let inp =prompt("Enter alphabets to count vowels").toLowerCase();
// let count=0;
// let i=0;
// while(i<inp.length){
//     // vowel = inp[0];
//     let vowels=inp[i];
//     if(vowels==='a' || vowels==='e' || vowels==='i'  || vowels==='o'  || vowels==='u'){
//         count++
//     }
//     i++;
// }
// console.log('This word has vowels :'+ count);

// ======================== Problem 4 ==========================

// ======================== Problem 5 ==========================

// Write a program to print the factorial of input number
// n=5
// let n = +prompt("Enter number to get factorial");
// let fact = 1;
// let i = 1;
// while (i <= n) {
//   // fact = fact * i;
//   // fact =1* 1 = 1
//   // fact = 1* 2 = 2
//   // fact = 2 * 3 = 6
//   // fact = 6 * 4 = 24
//   // fact = 24 * 5 = 120
//   console.log(fact + "*" + i + " = " + fact * i);
//   fact = fact * i;
//   i++;
// }
// console.log(fact);

// ======================== Problem 5 ==========================

// ======================== Problem 6 ==========================

// write a program to guess the prime number

// let n=+prompt("Enter number to guess the prime number");
// let i=2;
// let prime=true;
// while (i<n) {
//     if(n%i ===0){
//         prime=false;
//         break;
//     }
//     i++
// }
// if (prime){
//     alert(n+" is prime number");
// }else{
//     alert(n+" is not prime number");
// }

// ======================== Problem 6 ==========================

// ======================== Problem 7 ==========================

//  write a program to print fibnocci series till input number

// let n = +prompt("Enter a number");
// let a = 0;
// let b = 1;
// while (a <= n) {
//   let c = a + b;
//   console.log(a);
//   a = b;
//   b = c;
// }

// ======================== Problem 7 ==========================

// ======================== Problem 8 ==========================

//  Print bellow pattern in js by taking lines as input
//   1
//   12
//   123
//   1234
//   12345

// let inpLines = +prompt("Enter number of lines to print ");

// let i=1;  //  to control rows

// let j=1;  // to control numbers

// let output="";

// while (i<=inpLines) {
// while (i>=j) {
//     output+=j;    // output(string)+j(number)=outputnumber
//     j++;
// }
// console.log(output);
//     i++;
// }

// ======================== Problem 8 ==========================

// ======================== Problem 9 ==========================

// Print bellow pattern in js by taking lines as input
//   *****
//    ****
//     ***
//      **
//       *

// let n =+prompt("Enter number of lines ");

// let i=0;

// while (i<n) {
//     let spaces=0;
//     let stars = n-i;
//     let output ="";

//     while (spaces<i) {
//         spaces++;
//         output+=" ";
//     }

//     while (stars>0) {
//         output+="*"
//         stars--;
//     }
//     console.log(output);
//     i++;

// }

// ======================== Problem 9 ==========================
