// ========================== HTML Attributes

// In HTML, tags may have attributes. When the browser parses the HTML to create DOM objects for tags, it recognizes standard attributes and creates DOM properties from them.

// So when an element has id or another standard attribute, the corresponding property gets created. But that doesn’t happen if the attribute is non-standard.

// let div = document.querySelector("#container");
// console.log(div.id);        // standard attribute give id name

// let div1 = document.querySelector("#container");
// console.log(div1.check);    // non standard attribute return undefined

// ========================= Methods

// ========================= elem.hasAttribute(name) 

//  checks for existence.

// let div1 = document.querySelector("#container");

// console.log(div1.hasAttribute("check"));     // true
// console.log(div1.hasAttribute("something"));   // false
 
// ======================== elem.getAttribute(name) 

//  gets the value.

// let div1 = document.querySelector("#container");

//  console.log(div1.getAttribute("check"));  // value    non-standard

// ======================== elem.setAttribute(name, value) 

//  sets the value.

// let div1 = document.querySelector("#container");

//  console.log(div1.setAttribute("check", "public"));     // value of check changed to public

// console.log(document.body);

// ======================== elem.removeAttribute(name)

//  removes the attribute.

// let div1 = document.querySelector("#container");

//  div1.removeAttribute("check");     // check attribute removed
// console.log(document.body);

// ======================= elem.attributes

// a collection of all attributes

// let div1 = document.querySelector("#container");

// console.log(div1.attributes);

// =========================================== data set(data-*)

// custom HTML attributes used to store extra information inside HTML elements.

// let div1 = document.querySelector("#container");

// console.log(div1.dataset);     // return collection of dataset
// console.log(div1.dataset.myInfo);       // returns value of dataset 





