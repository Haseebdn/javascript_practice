// ==================================== Walking the DOM

// console.log(document.documentElement);    // returns HTML node

// console.log(document.body);    // returns body node

// console.log(document.head);    // returns head node

// console.log(document.title);   // returns string title

// if we write or add Js before body tag then body node will be null because we accessed document.body before body tag

// ==================================== Children

// direct as well as nested elements of an element are called children

// direct children are called child nodes for example <head> and <body> are child nodes of <html>

// elements having common parent element are called siblings for example <head> and <body> are siblings of each other

// all nested elements are called descendent nodes for example descendent nodes of <html> are <head>,<meta>,<title>,<body>,<h1>,<script>

// ================================= Accessing childrens

// space before and after tag counted as child node 
// comments are also counted as child

// console.log(document.body.childNodes);    // accessing all children returns nodelist not array

// console.log(document.body.childNodes[1]);    // accessing child by index no.

// console.log(document.body.firstChild);    // accessing first child

// console.log(document.body.lastChild);    // accessing last child

// console.log(document.body.hasChildNodes());  // tells element has childnode or empty in form of true and false



