// ============================= Accessing Elements Through JS

// ================= getElementById()

// let containerDiv = document.getElementById("container");

// containerDiv.style.justifyContent = "center";

// containerDiv.style.width = "50%";

// containerDiv.lastElementChild.style.background = 'brown';

// ================ getElementBYClassName()

// let boxes = document.getElementsByClassName("box");

// console.log(boxes);    // returns as HTML collection

// boxes[1].style.background = "orange";

// [...boxes].forEach((element,key) => {          // to apply foreach() convert html collection to array using spread operator
//       console.log(element,key);
//      element.style.width = "20%";
//  });

// ================ getElementByTagName("")

// let nam =document.getElementById("container").getElementsByTagName("div");

// // nam[1].style.background = "aqua";

// [... nam].forEach((box,key)=>{
// box.style.textAlign ="start";
// });

// =============== querySelector("")

// let container = document.querySelector("#container");

// container.style.gap = "30px";

// let boxz = document.querySelector(".box");        // by class it only get first element with the given class

// boxz.style.background = "brown";

// ============== querySelectorAll()

// let boxz = document.querySelectorAll(".box");      //  for all elements with given class

// Array.from(boxz).forEach((box,key)=>{
//     box.style.background = "skyblue";
// })

// ============== querySelector(attributeName)

// let attribute = '[custom="box_3"]';

// let attributediv = document.querySelector(attribute);

// attributediv.style.background ="blue";

//============== elem.matches(css)

// to check if elem matches the given CSS selector.

// let id = document.getElementById("container");

// console.log(id.matches(".me"));   // returns true if css selector matches otherwise false

// ============ elem.closest(css)

// to look for the nearest ancestor that matches the given CSS-selector. The elem itself is also checked.

// let box = document.querySelector(".box");

// console.log(box.closest(".me"));

// ============ elemA.contains(elemB)

// to check an element inside other element

// let id = document.getElementById("container");
// let box = document.querySelector(".box");

// console.log(id.contains(box));      //  returns true if it contains element otherwise false

