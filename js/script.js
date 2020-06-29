function validateEmail(InputText) {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (InputText.match(emailFormat)) {
        return true;
    }
    else {
        return false;
    }
} 

function textNotNull(InputText) {
    if (InputText==="") {
        return false;
    } else {
        return true;
    }
}

function validateFormSubmission(Email, Name, Message) {
    alert("Validating");
    if ((!validateEmail(Email))) {
        alert("Invalid email adress format!");
    } else if (!(textNotNull(Name) && textNotNull(Message))) {
        alert("All fields must be filled in.");
    } else {
        alert(`Message sent! We'll get in touch with you soon, ${Name}!`);
    }
}

function updateButtonStatus(){
    console.log("Update button status");
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if(!(name=="" || email=="" || message=="")) {
        enableButton()
        console.log("enable");

    } else {
        disableButton()
        console.log("disable");

    }
}

function enableButton(){
    document.getElementById('submit-button').disabled = false;
}

function disableButton(){
    document.getElementById('submit-button').disabled = true;
}