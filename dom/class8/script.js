// ============================== focus and blur

// The focus event is called on focusing, and blur – when the element loses the focus


// The blur handler checks if the field has an email entered, and if not – shows an error.
// The focus handler hides the error message (on blur it will be checked again)

// uemail.onblur = () => {
//     if (!uemail.value.includes('@')) {
//         uemail.classList.add("invalid");
//         error.innerHTML = "Please enter valid input";
//     }
// };

// uemail.onfocus = () => {
//     if (uemail.classList.contains("invalid")) {
//         uemail.classList.remove("invalid");
//         error.innerHTML = "";
//     }
// };


// ============================= Methods focus/blur

// elem.focus() and elem.blur()

// uemail.addEventListener ('blur',()=>{
// if (!uemail.value.includes('@')) {
//         uemail.classList.add('me');
//         // uemail.focus();            // make the visitor unable to leave the input if the value is invalid
//         uemail.classList.remove('me');
//     }
// })


// We can add tabindex from JavaScript by using the elem.tabIndex property. That has the same effect.

// ============================= Delegation: focusin/focusout

// Events focus and blur do not bubble.

//  <form onfocus="this.className='focused'">   // we can’t put onfocus on the <form> to highlight it, like this in tag 


// focus/blur do not bubble up, but propagate down on the capturing phase.

// userinfo.addEventListener("focus", () => userinfo.classList.add('focused'), true);
// userinfo.addEventListener("blur", () => userinfo.classList.remove('focused'), true);

// focusin and focusout events – exactly the same as focus/blur, but they bubble

// userinfo.addEventListener("focusin", () => userinfo.classList.add('focused'));
// userinfo.addEventListener("focusout", () => userinfo.classList.remove('focused'));

// ============================= Events: change, input, cut, copy, paste

// =========== Event: change

// The change event triggers when the element has finished changing

// uname.addEventListener('change',function(){
//     console.log(this.value);
// })

// also used as attribute     onchange="alert(this.value)"

// =========== Event: input

// The input event triggers every time after a value is modified by the user

// inputt.addEventListener('input', function () {
//     result.innerHTML = inputt.value;
// });

// =========== Events: cut, copy, paste

// These events occur on cutting/copying/pasting a value
// inside cut and copy event handlers a call to event.clipboardData.getData(...) returns an empty string
// document.getSelection() for cut and copy selected text

// inputt.onpaste = function (event) {
//     alert("Paste: " + event.clipboardData.getData('text/plain'));
//     event.preventDefault();
// };

// inputt.oncopy = function (event) {
//     alert(event.type + " - " + document.getSelection());
//     event.preventDefault();      // prevents browser default behaviour of copy paste 
// };

// also

// inputt.addEventListener('paste', function (event) {
//     console.log("Pasted:", event.clipboardData.getData('text/plain'));
// });

// inputt.addEventListener('copy', function (event) {
//     console.log("Copied:", document.getSelection().toString());
// });

// inputt.addEventListener('cut', function (event) {
//     console.log("Cut:", document.getSelection().toString());
// });


// ================================== Forms: event and method submit

// form.submit()
  