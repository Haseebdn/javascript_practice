// ======================================== Forms

// console.log(document.forms);   //   return  collection of all forms

// console.log(document.forms.info);    // return form with  given name

// console.log(document.forms[0]);    // return form on given index

let forms = document.forms[0]

// console.log(forms.elements);          // return collection of form elements

// console.log(forms.elements.uname);       // // return form element with  given name

// let nme= forms.elements.male.value;

// console.log(nme);

let nme= forms.elements.gender;

// console.log(nme[1].value);               // returns value of accesed element

// let fieldset = forms.elements.userFields;    // access fieldset
// console.log(fieldset); 

// form[index/name]                // access element

// console.log(forms[1]);
// console.log(forms['gender']);       //   returns collection of elements of given name
