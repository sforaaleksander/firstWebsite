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
    if ((!validateEmail(Email))) {
        alert("Invalid email adress format!");
    } else if (!(textNotNull(Name) && textNotNull(Message))) {
        alert("All fields must be filled in.");
    } else {
        alert(`Message sent! We'll get in touch with you soon, ${Name}!`);
    }
}