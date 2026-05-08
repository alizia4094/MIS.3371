/*
    Name: Zia A Ali
    Date Created: 4/1/2026
    Date Modified: 5/8/2026
    Purpose: JS file for HW 4
*/

const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function () {
    output.innerHTML = this.value;};

function validateFstname() {
    fstname = document.getElementById("fstname")
    fstnamevalue = fstname.value.trim()
    var namePattern = /[a-zA-Z']{1,30}/;
    document.getElementById("fstname-error").innerHTML = "";
    
    if (fstnamevalue == "") {
        document.getElementById("fstname-error").innerHTML = "First name is required"
        return false;
    }
    
    if (!fstnamevalue.match(namePattern)){
            document.getElementById("fstname-error").innerHTML = "Please use only letters and apostrophes"
        return false;
    } 

    if (fstnamevalue.length > 30) {
        document.getElementById("fstname-error").innerHTML = "First name needs to be 30 characters or less"
        return false;

    } 
    
    return true;
}


function validateMiddleinitial() {
    middleinitial = document.getElementById("middleinitial")
    middleinitialvalue = middleinitial.value.trim()
    var namePattern = /[a-zA-Z']{0,1}/;

    document.getElementById("middleinitial-error").innerHTML = "";
    
    if (middleinitialvalue == "") {
        document.getElementById("middleinitial-error").innerHTML = "Middle initial is required";
        return false;
    } 

    if (!middleinitialvalue.match(namePattern)){
            document.getElementById("middleinitial-error").innerHTML = "Please use only lettrrs";
        return false;
    } 
    
    if (middleinitialvalue.length > 1) {
        document.getElementById("middleinitial-error").innerHTML = "Middle initial needs to be 1 character or less";
        return false;
    } 
    return true;
}

function validateLstname() {
    lstname = document.getElementById("lstname")
    lstnamevalue = lstname.value.trim()
    var namePattern = /[a-zA-Z']{1,30}/;

    document.getElementById("lstname-error").innerHTML = "";

    if (lstnamevalue == "") {
        document.getElementById("lstname-error").innerHTML = "Last name is required"
        return false;
    } 

    if (!lstnamevalue.match(namePattern)){
            document.getElementById("lstname-error").innerHTML = "Please use only lettrrs and apostrophes"
        return false;
    } 
    if (lstnamevalue.length > 30) {
        document.getElementById("lstname-error").innerHTML = "Last name needs to be 30 characters or less"
        return false;
    } 
    
        return true;
    
}

function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date is in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date can't be 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

function validateSocialsecurity() {
   const socialsecurity = document.getElementById("socialsecurity").value;
   const socialsecurityR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

   document.getElementById("socialsecurity-error").innerHTML = "";

    if (socialsecurity == "") {
        document.getElementById("socialsecurity-error").innerHTML = "Social Security is required"
        return false;
    } 

   if (!socialsecurityR.test(socialsecurity)) {
        document.getElementById("socialsecurity-error").innerHTML = "Enter a Valid Social Security Number"
   } 
    return true;
}

function validateCity() {
    city = document.getElementById("city").value.trim();

    if (city == "") {
        document.getElementById("no-city").innerHTML = "Please input City name";
        return false;
    } else {
        document.getElementById("no-city").innerHTML = "";
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
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
        document.getElementById("email-error").innerHTML = "Required, please input Email Adderess";
        dob.value = "";
        return false;
    } else if (!email.match(emailR)){
        document.getElementById("email-error").innerHTML = "Enter Valid email address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = ""
        return true;
    }
}
function validateEmail2() {
    email1 = document.getElementById("email").value;
    email2 = document.getElementById("email2").value;

    document.getElementById("email2-error").innerHTML = "";


    if (!email1.match(email2)){
        document.getElementById("email2-error").innerHTML = "Confirm Email should match Email Address";
        return false;
    }
    return true;
    
}
function validatePhone() {

   const phone = document.getElementById("phone").value.trim();
   const phoneR = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    document.getElementById("phone-error").innerHTML = "";

   if (phone == ""){
    document.getElementById("phone-error").innerHTML = "Phone Number is require"
    return false;
   }

   if (!phoneR.test(phone)) {
        document.getElementById("phone-error").innerHTML = "Enter a valid Phone number"
        return false;
   }
   return true;

}

function validateAddress1() {

   const address1 = document.getElementById("address1").value.trim();

    document.getElementById("address-error").innerHTML = "";

   if (address1 == ""){
    document.getElementById("address-error").innerHTML = "Address1 is require"
    return false;
   }

   return true;

}

function validateUser() {
    user = document.getElementById("username").value.toLowerCase();
    document.getElementById("username").value = user;

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
    } else if (user.length < 5) {
        document.getElementById("username error").innerHTML = 
        "Username must be at least 5 characters";
        return false;
    } else if (user.length > 30) {
        document.getElementById("username error").innerHTML = 
        "Username needs to be less than 30 characters";
        return false;
    } else {
        document.getElementById("username error").innerHTML = "";
        return true;
    }
}
function validatePsword() {
    const pass = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    const errorMessage = [];
    if (!pass.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }
    if (!pass.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }
    if (!pass.match(/[0-9]/)) {
        errorMessage.push("Enter at least one Number");
    }
    if (!pass.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }
    if (pass == username || psword.includes(username)) {
        errorMessage.push("Password cannot contain first and last name");
    }

    
    const errorContainer = document.querySelector(".pass-message");
    errorContainer.innerHTML = errorMessage
    .map(msg => `<span>${msg}</span><br>`)
    .join("");
}
function confirmRpass() {
    pword1 = document.getElementById("password").value;
    pword2 = document.getElementById("rpass").value;

    if (pword2 === "") {
        document.getElementById("reenterpassword-error").innerHTML = "";
        return false;
    }

    // 3. Perform the comparison
    if (pword1 !== pword2) {
        document.getElementById("reenterpassword-error").innerHTML  = "Passwords don't match";
        document.getElementById("reenterpassword-error").style.color = "red";
        return false;
    } else {
        document.getElementById("reenterpassword-error").innerHTML  = "Passwords match";
        document.getElementById("reenterpassword-error").style.color = "green";
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


function showAlert() {
    var alertBox = document.getElementById("alert");
    var exitAlert = document.getElementById("exit-alert");
    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";};
}

function validateInfo() {
    let valid = true;

    if (!validateFstname()) {
        valid = false;
    }
    if (!validateMiddleinitial()) {
        valid = false;
    }
    if (!validateLstname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSocialsecurity()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZip()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validateEmail2()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUser()) {
        valid = false;
    }
    if (!validatePsword()) {
        valid = false;
    }
    if (!confirmRpass()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
 }

/*cookie javascript code */

function setCookie(name, cvalue, expireTime) {
    var day = new Date();
    day.setTime(day.getTime() + (expireTime * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getPatientCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

var inputs = [
    {id:"fstname", cookieName: "firstName"},
    {id:"middleinitial", cookieName: "middleInitial"},
    {id:"lstname", cookieName: "lastName"},
    {id:"dob", cookieName: "dateOfBirth"},
    {id:"socialsecurity", cookieName: "socialSecurity"},
    {id:"phone", cookieName: "phone"},
    {id:"address1", cookieName: "address1"},
    {id:"city", cookieName: "city"},
    {id:"state", cookieName: "state"},
    {id:"zip", cookieName: "zip"},
    {id:"email", cookieName: "email"},
    {id:"username", cookieName: "username"},
]

inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    var cookieValue = getPatientCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

var firstName = getPatientCookie("firstName");
if (firstName !== "") {
    document.getElementById("welcome-back").innerHTML = "Welcome back to Universal Medical, " + firstName + "!<br>";
    document.getElementById("welcome-new").innerHTML =
        "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new patient form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
} else {
    document.getElementById("welcome-new").innerHTML = "Welcome to Universal Medical New Patient, Please fill out the form!"
}

document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        deleteAllCookies();
        console.log("All cookies removed because 'Remember Me' is not checked.");
    } else {
        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
        });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});

function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) {
        deleteAllCookies();
    }
});

// Fetch API below: the code below was created by Gemini, using api keys from Zippopotamus, it uses the zip to autofill city and state

const zipInput = document.getElementById("zip");
const stateInput = document.getElementById("state");
const cityInput = document.getElementById("city");

zipInput.addEventListener("blur", function () {
    const zipCode = zipInput.value.trim();

    if (zipCode.length === 5 && /^\d+$/.test(zipCode)) {
        fetch(`https://api.zippopotam.us/us/${zipCode}`)
            .then(response => {
                if (!response.ok) throw new Error("Zip not found");
                return response.json();
            })
            .then(data => {
                const place = data.places[0];

                // Update City
                cityInput.value = place["place name"];
                
                // Update State Dropdown
                stateInput.value = place["state abbreviation"];

                // IMPORTANT: Manually tell the browser the state changed
                stateInput.dispatchEvent(new Event('change'));

                // Update Cookies
                setCookie("city", cityInput.value, 30);
                setCookie("state", stateInput.value, 30);
                
                console.log("Auto-populated:", cityInput.value, stateInput.value);
            })
            .catch(error => console.error("Error:", error));
    }
});

//local storage code
localStorage.setItem("fstname",document.getElementById("fstname").value);
document.getElementById("fstname").value = localStorage.getItem("fstname");

localStorage.setItem("lstname",document.getElementById("lstname").value);
document.getElementById("lstname").value = localStorage.getItem("lstname");

localStorage.setItem("address1",document.getElementById("address1").value);
document.getElementById("address1").value = localStorage.getItem("address1");

localStorage.setItem("city",document.getElementById("city").value);
document.getElementById("city").value = localStorage.getItem("city");

localStorage.setItem("state",document.getElementById("state").value);
document.getElementById("state").value = localStorage.getItem("state");

localStorage.setItem("zip",document.getElementById("zip").value);
document.getElementById(zip).value = localStorage.getItem("zip");

localStorage.setItem("email",document.getElementById("email").value);
document.getElementById("email").value = localStorage.getItem("email");

document.getElementById("new-user").addEventListener( "click", function () {
    localStorage.clear();
    inputs.forEach(function (input) {
     setCookie(input.cookieName, "", -1);
        });
        location.reload();
    })