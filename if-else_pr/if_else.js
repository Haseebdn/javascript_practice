// ==================================== IF

// used to run code only if the condition is true
// used only when you want to show multiple true conditions

// syntax

// if (condition) {
// code runs if condition is true
// }

// Example

/*let age= prompt("Enter your age")

if (age>=18){
alert("you are eligible to vote");
}

if (age<18){
alert("you are not eligible to vote");
}

if (age>=25){
prompt("are you married?")
}*/

// ================================= IF-ELSE

// used when probability of both true and false
// used only when there are two conditions (true and false) and output should be one

// syntax

/*
if (condition) {
  // runs if true
} else {
  // runs if false
}
*/

// Example
/*
let sign=prompt("Enter Your Age")

if (sign>=18) {
alert("You are adult"); 
} else{
    alert("You are not registered");
}
*/
// =========================================
/*
const user_name= "haseeb";
const password="12345";
let a=prompt("Enter user name");
let b=Number(prompt("Enter Password"));

if (a==user_name && b==password){
  alert("you are logged in");
  } else{
    alert("Sorry! Your attempt is unsuccessful")
}
*/
// =========================================

// =========================================

// let choices = ["rock", "paper", "scissor"];

// let userinput = Number(prompt("Enter a number from 0 to 2"));
// let computer_output = Math.floor(Math.random() * 3);

// if (userinput < 0 || userinput > 2 || isNaN(userinput)) {
//   alert("Invalid input! Please enter 0, 1, or 2.");
// } else {
//   alert("You choose: " + choices[userinput]);
//   alert("Computer choose: " + choices[computer_output]);

//   if (userinput === computer_output) {
//     alert("It's a draw");
//   } else if (
//     (userinput === 0 && computer_output === 2) ||
//     (userinput === 1 && computer_output === 0) ||
//     (userinput === 2 && computer_output === 1)
//   ) {
//     alert("You win");
//   } else {
//     alert("You lose");
//   }
// }

// =========================================

// =========================================
// let a=Number(prompt("Enter your Income"));

// let tax= a*(2.5/100);
// alert("Your tax :" + tax);

// let payedtax =Number(prompt("Enter Payed Tax"));
// if(payedtax==tax){
// alert("Your tax is fully paid");
// }
// else if(payedtax<tax){
//   alert("Tax to be payed :"+(tax-payedtax));
// }else{
//   alert("Invalid Input");
// }
// =========================================

// =========================================

// console.log(Math.floor(Math.random()*10)+1);

// let units = prompt("Enter total consumed units");

// let unitprice = 30;

// let bill7 = units * (7 / 100) * unitprice;
// let bill43 = units * (43 / 100) * unitprice;
// let bill50 = units * (50 / 100) * unitprice;
// let baseprice = units * unitprice;

// if (units < 0 || isNaN(units)) {
//   alert("Invalid Input");
// } else {
//   alert("Your base electricity bill : " + baseprice + " Rs");
//   let tax = bill43 * (3 / 100) + bill50 * (5 / 100);
//   alert("Total tax on your bill : " + tax.toFixed(2) + " Rs");
//   let bill = bill7 + bill43 + bill50 + tax;
//   alert("Your total bill : " + bill + " Rs");
// }
// =========================================
