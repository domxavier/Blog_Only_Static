function submission() {
    try{
        if(validateForm() === false) {
            throw {

            }
        }
    } catch (ex) {
        //window.alert("Please do not leave any fields blank")
    }
}


function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}

function validateForm() {
    var name = document.getElementById("name").value;
    var telnum = document.getElementById("telnum").value;
    var email = document.getElementById("emailid").value;
    var message = document.getElementById("message").value;

    var nameErr = numberErr = emailErr = messageErr = true;

    // Validate Post Title
    if (name === "") {
        printError("nameErr", "Please provide a name");
    } else { 
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email === "") {
        printError("emailErr", "Please enter an email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate Mobile Number
    if(telnum == "") {
        printError("numberErr", "Please enter a telephone number");
    } else {
        // Regular expression for basic email validation
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(phoneno.test(telnum) === false) {
            printError("numberErr", "Please enter a valid telephone number")
        } else {
            printError("numberErr", "");
            numberErr = false;
        }
    }
    
    // Validate Content
    if(message === "") {
        printError("messageErr", "Please provide us with some information to help you better")
    } else {
        printError("messageErr", "");
        messageErr = false;
    }

    if(nameErr || emailErr || numberErr || messageErr) {
        return false;
    } else {
        document.getElementById("name").value = '';
        document.getElementById("telnum").value = '';
        document.getElementById("emailid").value = '';
        document.getElementById("message").value = '';
        window.alert("Your message has been sent!")
    }

}