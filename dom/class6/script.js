// ====================================== Events

// ======================== Event handlers

// To react on events we can assign a handler – a function that runs in case of an event.
// Handlers are a way to run JavaScript code in case of user actions

// ======================== HTML-attribute

// onclick="alert('Click!')"

// An HTML-attribute is not a convenient place to write a lot of code, so we’d better create a JavaScript function and call it there.

// function hell() {
// alert("i am nill");
// }

// ======================== DOM property

// We can assign a handler using a DOM property on<event>

// elem.onclick

// let me = document.querySelector('#me');
// me.onclick = function jell() {          // overwrites the existing handler in html
// alert("DOM property");                  // only this will be shown
// }

// ======================== Accessing the element: this

// The value of this inside a handler is the element. The one which has the handler on it

// onclick="alert(this.innerHTML)"    // html attribute

// Don’t use .setAttribute for handlers.
// We can set an existing function as a handler:

// function sayThanks() {
//   alert('Thanks!');
// }
// elem.onclick = sayThanks;

// right
// button.onclick = sayThanks;
// wrong
// button.onclick = sayThanks();

// ======================== addEventListener

// element.addEventListener(event, handler, [options]);
// To remove the handler, use removeEventListener

// let me = document.querySelector('#me');
// me.addEventListener( "click" , () => alert('Thanks!'));

// function handler() {
//   alert( 'Thank you!' );
// }

// me.addEventListener("click", handler);
// me.removeEventListener("click", handler);

// ======================== Event Object

// The event object is automatically created when an event occurs (like click, keypress, submit, etc.).
// It contains information about the event.

// let me = document.querySelector('#me');

// me.addEventListener("click", function(event) {
//   console.log(event);               // full event object
//   console.log(event.type);          // "click"
//   console.log(event.target);        // element that triggered event
//   console.log(event.currentTarget); //  Element handling the event
// });

// ======================== handleEvent() Method

// handleEvent() is a special method used when you pass an object (instead of a function) to addEventListener.
// If the object has a handleEvent() method, the browser automatically calls it when the event occurs

// let me = document.querySelector('#me');

// let handler = {
//   handleEvent(event) {
//     if (event.type === "click") {
//       console.log("Clicked");
//     }
//     if (event.type === "mouseover") {
//       console.log("Hovered");
//     }
//   }
// };

// me.addEventListener("click", handler);
// me.addEventListener("mouseover", handler);

// =========================================== Bubbling

// When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

// =========================================== event.target

// The most deeply nested element that caused the event is called a target element, accessible as event.target

// event.target – is the “target” element that initiated the event, it doesn’t change through the bubbling process.
// this – is the “current” element, the one that has a currently running handler on it

// container.addEventListener("click", function (event) {
//   console.log(event.target);
//   console.log(this);
// });

// =========================================== Stopping bubbling

// A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and then to document object, and some events even reach window, calling all handlers on the path.

// event.stopPropagation()

// =========================================== Event delegation

// Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation.

// The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

// let cont = document.querySelector("#color-container");
// let result = document.querySelector("#result");
// let selectedBox = null;

// cont.addEventListener("click", function (event) {
//   let target = event.target;
//   if (target.classList.contains("box")) {
//     if (selectedBox) {
//       selectedBox.classList.remove("border");
//     }
//     selectedBox = target;
//     selectedBox.classList.add("border");
//     result.textContent = "Selected : " + selectedBox.textContent;
//   }
// });
