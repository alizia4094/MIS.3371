/*
    Name: Zia A Ali
    Date Created: 3/1/2026
    Date Modified: 3/26/2026
    Purpose: JS file for HW 2
*/

const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function () {
    output.innerHTML = this.value;};

function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob error").innerHTML = "Date is in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob error").innerHTML = "Date can't be 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob error").innerHTML = "";
        return true;
    }
}

function validateSocialsecurity() {
   const socialsecurity = document.getElementById(socialsecurity).value;
   const socialsecurityR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

   if (!socialsecurityR.test(socialsecurity)) {
        document.getElementById("social security error").innerHTML = "Enter a Valid Social Security Number"
   } else {
        document.getElementById("socialsecurity error").innerHTML = "";
        return true;
   }
}
function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code needs to be atleast 5 charcters";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zip error").innerHTML = "";
    return true;
}
function validateEmail() {
    email = document.getElementById(email).value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
        document.getElementById("email error").innerHTML = "Required, please input Email Adderess";
        dob.value = "";
        return false;
    } else if (!email.match(emailR)){
        document.getElementById("email error").innerHTML = "Enter Valid email address";
        return false;
    } else {
        document.getElementById("email error").innerHTML = ""
        return true;
    }
}
function validateEmail2() {
    email = document.getElementById(email2).value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
        document.getElementById("email 2 error").innerHTML = "Required, please input Email Adderess";
        dob.value = "";
        return false;
    } else if (!email.match(emailR)){
        document.getElementById("email 2 error").innerHTML = "Enter Valid email address";
        return false;
    } else {
        document.getElementById("email 2 error").innerHTML = ""
        return true;
    }
}
function validatePhone() {
   const phone = document.getElementById(phone);

   if (phone.lenth !=10) {
        document.getElementById("phone error").innerHTML = "Enter a valid Phone number"
        return false;
   }
    const formatPhone = document.getElementById(phone error)= "Please enter phone number in correct format"
}
function validateUser() {
    user = document.getElementById("user").value.toLowerCase();
    document.getElementById("user").value = uid;

    if (user.length == 0) {
        document.getElementById("username error").innerHTML = 
        "User ID can't be blank";
        return false;
    }

    if (!isNaN(user.charAt(0))) {
        document.getElementById("username error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }
    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(user)) {
        document.getElementById("username error").innerHTML = 
        "Username can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("username error").innerHTML = 
        "Username must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("username error").innerHTML = 
        "Username needs to be less than 30 characters";
        return false;
    } else {
        document.getElementById("username error").innerHTML = "";
        return true;
    }
}
function validatePsword() {
    const pass = document.getElementById("psword").value;
    const username = document.getElementById("user").value;

    const errorMessage = [];
    if (!psword.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }
    if (!psword.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }
    if (!psword.match(/[0-9]/)) {
        errorMessage.push("Enter at least one Number");
    }
    if (!psword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }
    if (psword == user || psword.includes(user)) {
        errorMessage.push("Password cannot contain first and last name");
    }
    const errorContainer = document.querySelector(".pass message");
    errorContainer.innerHTML = errorMessage
    .map(msg => `<span>${msg}</span><br>`)
    .join("");
}
function confirmRpass() {
    psword = document.getElementById("psword").value;
    pword2 = document.getElementById("reenter password error").value;

    if (pword1 !== pword2) {
        document.getElementById("reenter password error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("reenter password error").innerHTML = 
        "Passwords match";
        return true;
    }
}
function reviewInput() {
    var formcontent = document.getElementById("review");
    var formoutput = "<table class='output'><tr><th colspan='2'>Review Your Information:</th></tr>";

    for (var i = 0; i < formcontent.elements.length; i++) {
        var el = formcontent.elements[i];
        var datatype = el.type;
        var name = el.name;
        var value = el.value;

        if (!name) continue;

        switch (datatype) {
            case "checkbox":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;

            case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "range":
                if (value !== "0") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "button":
            case "submit":
            case "reset":

                break;

            default:
                if (value !== "") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
        }
    }

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}