function validateEmail(InputText) {
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailFormat.test(InputText);
} 

function fieldsNotNullNorEmpty(InputText1, InputText2, InputText3) {
    return !("/s".test(InputText1) || "/s".test(InputText2) || "/s".test(InputText3)
            || InputText1==="" || InputText2==="" || InputText3==="");
}

function validateFormSubmission(Email, Name) {
    alert("Validating");
    if ((!validateEmail(Email))) {
        alert("Invalid email address format!");
    } else {
        alert(`Message sent! We'll get in touch with you soon, ${Name}!`);
    }
}

function updateButtonStatus(){
    console.log("Update button status");
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if(fieldsNotNullNorEmpty(name, email, message)) {
        enableButton()
    } else {
        disableButton()
    }
}

function enableButton(){
    document.getElementById('submit-button').disabled = false;
}

function disableButton(){
    document.getElementById('submit-button').disabled = true;
}