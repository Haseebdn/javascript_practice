// ======================================== Forms

// console.log(document.forms);   //   return  collection of all forms

// console.log(document.forms.info);    // return form with  given name

// console.log(document.forms[0]);    // return form on given index

// let forms = document.forms[0]

// console.log(forms.elements);          // return collection of form elements

// console.log(forms.elements.uname);       // // return form element with  given name

// let nme= forms.elements.male.value;

// console.log(nme);

// let nme= forms.elements.gender;

// console.log(nme[1].value);               // returns value of accesed element

// let fieldset = forms.elements.userFields;    // access fieldset
// console.log(fieldset); 

// form[index/name]                // access element

// console.log(forms[1]);              //   returns element of given index
// console.log(forms['gender']);       //   returns collection of elements of given name

// back reference
// let user =userinfo.uname;
// console.log(user.form);

//   select.options[0].selected = true;      // all three used for same  
//   select.selectedIndex = 1;
//   select.value = "banana";

// add new option to select

// let newOption = new Option("Classic", "classic",false,false);
//   genres.append(newOption);



let upassword = document.querySelector("#upswd");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function() {

    if (upassword.type === "password") {
        upassword.type = "text";
        btn.textContent = "Hide";
    } else {
        upassword.type = "password";
        btn.textContent = "Show";
    }
});