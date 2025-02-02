function validateEmail() {
    // Get the email input value
    var email = document.getElementById('email').value;

    // Check if the email ends with '@gmail.com'
    if (email.endsWith('@gmail.com')) {
        alert("Valid email!");
    } else {
        alert("Invalid email! The email should end with @gmail.com.");
    }
}