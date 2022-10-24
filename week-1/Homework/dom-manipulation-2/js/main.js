// - **Jumbotron** background color to `#588fbd`
//**Donate a bike** button background color to `#ffa500`
//**Volunteer** button background color to `black` and text color to `white`


//select elements
const jumbotronElement=document.querySelector('.jumbotron');
const donateAbikeButton=document.querySelector('.btn-primary.btn-lrg');
const volunteerButton=document.querySelector('.btn-secondary');

//select blue button
const blueButton= document.querySelector("#blueBtn");

blueButton.addEventListener("click", (e)=> {
    
    jumbotronElement.style.backgroundColor = "#588fbd";
    donateAbikeButton.style.backgroundColor= "#ffa500";
    volunteerButton.style.backgroundColor= "black"
    volunteerButton.style.color= "white"
    
});

//- When clicking **orange** it should change:
//- **Jumbotron** background color to `#f0ad4e`
//- **Donate a bike** button background color to `#5751fd`
//- **Volunteer** button background color to `#31b0d5` and text color to `white`

//select orange button
const orangeButton= document.querySelector("#orangeBtn");
orangeButton.addEventListener("click", (e)=> {
    
    jumbotronElement.style.backgroundColor = "#f0ad4e";
    donateAbikeButton.style.backgroundColor= "#5751fd";
    volunteerButton.style.backgroundColor= "#31b0d5"
    volunteerButton.style.color= "white"
});

//- When clicking **green** it should change:
// - **Jumbotron** background color to `#87ca8a`
//  - **Donate a bike** button background color to `black`
//  - **Volunteer** button background color to `#8c9c08`

//select green button

const greenButton=document.querySelector("#greenBtn");

greenButton.addEventListener("click", (e)=> {

    jumbotronElement.style.backgroundColor = "#87ca8a";
    donateAbikeButton.style.backgroundColor= "black";
    volunteerButton.style.backgroundColor= "#8c9c08"
});

// Part 2

//Just below the buttons, there's a form called **Register with us**.
//When the submit button is pressed, it should check that all the form fields are valid:
//- The **Your name**, **Email** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
//- For the **Email** field also check if it contains the `@` character
// 

//select fields
const emailInputField= document.querySelector("#exampleInputEmail1");
const nameInputField= document.querySelector("#example-text-input");
const describeInputField= document.querySelector("#exampleTextarea");
//const formElement=document.querySelector(".form-control");

//submit button

const submitButton= document.querySelector("button[type='submit']");
submitButton.addEventListener("click",checkInputFieldisValid);
        
   
   function checkInputFieldisValid(event) {

    event.preventDefault();

    if (emailInputField.value.length === 0 || !emailInputField.value.includes("@")){
        emailInputField.style.backgroundColor="red" ;
    }

    if (nameInputField.value.length === 0){
        nameInputField.style.backgroundColor="red";

    }
    
    if (describeInputField.value.length === 0) {
        describeInputField.style.backgroundColor= "red";
    
    }else{
        alert("Thank you for filling out the form!");

        emailInputField.value="";
        nameInputField.value="";
        describeInputField.value="";

    }
};

