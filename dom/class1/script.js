// ==================================== Walking the DOM

// console.log(document.documentElement);    // access HTML node

// console.log(document.body);    // access body node

// console.log(document.head);    // access head node

// console.log(document.title);   // access string title

// if we write or add Js before body tag then body node will be null because we accessed document.body before body tag

// ==================================== Children

// direct as well as nested elements of an element are called children

// direct children are called child nodes for example <head> and <body> are child nodes of <html>

// elements having common parent element are called siblings for example <head> and <body> are siblings of each other

// all nested elements are called descendent nodes for example descendent nodes of <html> are <head>,<meta>,<title>,<body>,<h1>,<script>

// ================================= Accessing childrens

// space before and after tag counted as child node 
// comments are also counted as child

// console.log(document.body.childNodes);        // accessing all children returns nodelist not array to iterate nodelist loops and array methods are used after converting it to array 

// console.log(document.body.childNodes[1]);    // accessing child by index no.

// console.log(document.body.firstChild);    // accessing first child

// console.log(document.body.lastChild);    // accessing last child

// console.log(document.body.hasChildNodes());  // tells element has childnode or empty in form of true and false

// =================================== Parent and siblings 


// console.log(document.body.parentNode);          // to access parent node  

// console.log(document.body.previousSibling);     // to access previous sibling node

// console.log(document.body.nextSibling);     // to access next sibling node

// ================================== Element-only navigation 

// to access only element of html (not text or comment node)

// console.log(document.body.parentElement);          // to access parent element

// console.log(document.body.children);   //  returns collection of elements

// console.log(document.body.firstElementChild);   // access first element child

// console.log(document.body.lastElementChild);   // access last element child

// console.log(document.body.previousElementSibling);     // to access previous sibling Element node

// console.log(document.body.nextElementSibling);     // to access next sibling Element node









