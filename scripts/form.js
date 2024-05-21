let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
    let name = document.getElementById('contact-name').value;

    if(name.length == 0) {
        // tjekker længden af navnet
        nameError.innerHTML = 'Name is required';
        return false;
        // når der er en error returneres false og formen kan ikke sendes
    }
    if(!name.match(/^[a-zA-Z\s]*$/)) {	
        // tjekker om navnet kun indeholder bogstaver og mellemrum
        nameError.innerHTML = 'Name must contain only letters';
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
    // når der ikke er error returneres true og formen kan sendes
}