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

// =========================================== Modifying the document

// ======================== Creating an element

// document.createElement(tag)    // to create element

// let div = document.createElement('section');

// document.createTextNode(text)       // to create text node with text

// let textNode = document.createTextNode('Here I am');

// ======================= Insertion methods

// used to insert the created element in html

// ==================== node.append(...nodes or strings)

// append nodes or strings at the end of node

// let sec = document.createElement("section");
// sec.className = "me";
// sec.innerHTML = "<h2>this is me </h2>";
// let div = document.body.querySelector("#container");
// div.append(sec);
// document.body.append(sec);

// ==================== node.prepend(...nodes or strings)

// insert nodes or strings at the beginning of node

// let sec = document.createElement("section");
// sec.className = "me";
// sec.innerHTML = "<h2>this is me </h2>";
// document.body.prepend(sec);

// ==================== node.before(...nodes or strings)

//  insert nodes or strings before node

// let sec = document.createElement("section");
// sec.className = "me";
// sec.innerHTML = "<h2>this is me </h2>";
// let div = document.body.querySelector("#container");
// div.before(sec);

// ==================== node.after(...nodes or strings)

// insert nodes or strings after node

// let sec = document.createElement("section");
// sec.className = "me";
// sec.innerHTML = "<h2>this is me </h2>";
// let div = document.body.querySelector("#container");
// div.after(sec);

// ==================== node.replaceWith(...nodes or strings)

// replaces node with the given nodes or strings

// let sec = document.createElement("section");
// sec.className = "me";
// sec.innerHTML = "<h2>this is me </h2>";
// let div = document.body.querySelector("#container");
// div.replaceWith(sec);

// ========================================================== insertAdjacentHTML/Text/Element

// ========================== "beforebegin"

// insert html immediately before elem

// let div = document.body.querySelector("#container");
// div.insertAdjacentHTML('beforebegin','<h2>this is me </h2>');

// ========================== "afterbegin"

//  insert html into elem, at the beginning

// let div = document.body.querySelector("#container");
// div.insertAdjacentHTML('afterbegin','<h2>this is me </h2>');

// ========================== "beforeend"

// insert html into elem, at the end

// let div = document.body.querySelector("#container");
// div.insertAdjacentHTML('beforeend','<h2>this is me </h2>');

// ========================== "afterend"

//  insert html immediately after elem

// let div = document.body.querySelector("#container");
// div.insertAdjacentHTML('afterend','<h2>this is me </h2>');

// ====================================== node.remove()

// To remove a node

// let div = document.body.querySelector("#container");
// setTimeout(() => div.remove(), 1000);

// ===================================== Cloning nodes

// ========================== elem.cloneNode(true)

// creates a “deep” clone of the element – with all attributes and subelements

// let div = document.body.querySelector("#container");
// let div2 = div.cloneNode(true);
// div.after(div2);
// ========================== elem.cloneNode(false)

// the clone is made without child elements

// let div = document.body.querySelector("#container");
// let div2 = div.cloneNode(false);
// div.after(div2);

// ===================================== document.write

// ancient method to add html
// To append HTML to the page before it has finished loading 

// document.write('<b>Hello from JS</b>');

// ===================================== DocumentFragment()

