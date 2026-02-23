// console.log(elem) shows the element DOM tree.
// console.dir(elem) shows the element as a DOM object, good to explore its properties.

// ============================= classes
//==================== Node (Base Class)

// Node is the base class of all DOM nodes.
// All other node types inherit from Node

// =================== Document

// Represents the entire HTML document.

// =================== Element

// Represents HTML tags.

// It provides element-level navigation like nextElementSibling, children and searching methods like getElementsByTagName, querySelector

// =================== CharacterData

//  an “abstract” class, inherited by:

// Text – the class corresponding to a text inside elements, e.g. Hello in <p>Hello</p>.
// Comment – the class for comments. They are not shown, but each comment becomes a member of DOM.

// =================================================

// HTMLInputElement – this class provides input-specific properties,
// HTMLElement – it provides common HTML element methods (and getters/setters),
// Element – provides generic element methods,
// Node – provides common DOM node properties,
// EventTarget – gives the support for events (to be covered),

// =================================================

// ============================================== Node properties

// ============================ nodeType

// way to get the “type” of a DOM node.

// elem.nodeType == 1 for element nodes,
// elem.nodeType == 3 for text nodes,
// elem.nodeType == 9 for the document object,

// let elem = document;
// console.log(elem.nodeType);

// let elem = document.body.firstChild;
// console.log(elem.nodeType);

// let elem = document.body.firstElementChild;
// console.log(elem.nodeType);

// ============================ nodeName and tagName

// The tagName property exists only for Element nodes.
// The nodeName is defined for any Node:
//  1.for elements it means the same as tagName.
//  2.for other node types (text, comment, etc.) it has a string with the node type.

// console.log(document.body.firstChild.tagName); // undefined (not an element)
// console.log(document.body.firstChild.nodeName);
// console.log(document.body.firstElementChild.nodeName);

// ============================ Contents

// ============== innerHTML

// The innerHTML property allows to get the HTML inside the element as a string
// The innerHTML property is only valid for element nodes

// console.log(document.body.innerHTML);              // read the current contents
// document.body.innerHTML = "The new BODY!";           // replace it

// If innerHTML inserts a <script> tag into the document – it becomes a part of HTML, but doesn’t execute.

// elem.innerHTML += "..."

// let hell =document.body;
// let hell =document.body.querySelector("#no");
// hell.innerHTML+= "<h3>hey there!</h3> "
// hell.innerHTML= "<h3> there!</h3> "

// ============== outerHTML

//The outerHTML property contains the full HTML of the element. That’s like innerHTML plus the element itself.

// console.log(document.body.outerHTML);
// let div = document.querySelector('#no');
// div.outerHTML = '<p>A new element</p>';

// So what happened in div.outerHTML=... is:

// div was removed from the document.
// Another piece of HTML <p>A new element</p> was inserted in its place.
// div still has its old value. The new HTML wasn’t saved to any variable.

// ============================== nodeValue/data: text node content

// The innerHTML property is only valid for element nodes.
// Other node types, such as text nodes, have their counterpart: nodeValue and data properties

//  ===== text node

// let text = document.body.firstChild;
// console.log(text.data);

// let comment = text.nextSibling;
// console.log(comment.data);

// ===== text content

// let cont = document.body.querySelector("#no");
// console.log(cont.textContent);

// cont.innerHTML = "<i>innerhtml<i>"
// cont.textContent = "<i>innerhtml<i>"

// With innerHTML we’ll have it inserted “as HTML”, with all HTML tags.
// With textContent we’ll have it inserted “as text”, all symbols are treated literally.

// =============================== hidden

// specifies whether the element is visible or not

// let cont = document.body.querySelector("#no");
// cont.hidden = true;
// setInterval(() => cont.hidden = !cont.hidden, 1000);
