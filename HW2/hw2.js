<DOCTYPE html>
<!--
    Program name: patient-form.html
    Author: Zia A Ali
    Date created: 2/27/2026
    Date last edited: 3/27/2026
    Version: 1.0
    Description: HW 2 HTML website with patient registration form
-->
<html lang= "en">
    <head>
        <link rel="stylesheet" href="hw2.css"> <!-- link to homework 2 css file-->
        <title>Universal Medical</title>
        <title h1>Patient Registration Form</title h1>
    </head>
</html>
    <body>
        <header>
        <table width="100%">
                <tr>
                    <td valign="top" align="center" width="30%">
                        <div class="image">
                            <img align="center" src="medicallogo.2jpg.jpg" alt="Universal Medical" width="75px"
                        </div>
                    </td>
                    <td>
                        <h2>Universal Medical</h2>
                    </td>
                    <td valign="bottom" align="right" width="30%">
                        <p>Today's Date: <span id="today"></span></p>
                    </tr>
                </tr>
        </header>
<hr>
<form action="hw2thankyou.html"></form>
        <div class="format">
            <table>
                <tr>
                    <th colspan="3">Patient Registration Form</th>
                </tr>
                <tr>
                    <tr>
                        <td><label for="fstname"> First Name</label></td>
                        <td>
                            <input type="text"
                                    name="fstname"
                                    id="fstname"
                                    maxlength="30"
                                    required
                                    title="Enter legal first name"
                                    pattern="[a-zA-Z']{1,30}"
                                    onblur="validatefstname()"
                                    placeholder="Enter your legal first name">
                                <span class="Error" id="fstname-error"></span>
                        </td>
                    </tr> 
                    <tr>   
                        <td><label for="middleinitial"> Middle Initial</label></td>
                        <td>
                            <input type="text"
                                    name="middleinitial"
                                    id="middleinitial"
                                    size="1"
                                    maxlength="1"
                                    required
                                    pattern="[a-zA-Z']{0,1}"
                                    onblur="validatemiddleinitial()"
                                    title="Enter your legal middle initial"
                                    placeholder="required"
                                    >
                                <span class="Error" id="middleinitial error"></span>
                        </td>
                    </tr>    
                    <td><label for="lstname">Last Name<label></td>
                    <td>
                        <input type="text"
                                name="lstname"
                                id="lstname"
                                maxlength="30"
                                required
                                pattern="[a-zA-Z']{1,30}"
                                onblur="validatelstname()"
                                title="Enter your legal last name"
                                placeholder="required"
                                >
                         <span class="Error" id="lstname error"></span>
                    </td>
                </tr>
                <tr>
                    <td><label for="dob">Date of Birth</label></td>
                    <td>
                        <input type="date"
                                id="dob"
                                name="date of birth"
                                required
                                onblur="validateDob()"
                                placeholder="mm/dd/yyyy"
                        >
                        <span class="Error" id="dob-error"></span>
                    </td>
                </tr>
                <tr>
                    <td><label for="gender">Gender</label></td>
                    <td>
                        <input type="radio" id="gender1" name="gender" value="Female">Female
                        <input type="radio" id="gender2" name="gender" value="Male">Male
                        <input type="radio" id="gender3" name="gender" value="Other">Other
                    </td>
                </tr>
                <tr>
                    <td><label for="socialsecurity">Social Security</label></td>
                    <td>
                        <input type="password"
                                id="socialsecurity"
                                name="socialsecurity"
                                maxlength="11"
                                minlength="9"
                                required
                                pattern="[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;"
                                onblur="validateSocialsecurity()"
                                placeholder="Enter social security here"
                        >
                        <span class="Error" id="socialsecurity-error"></span>
                    </td>
                    <tr>
                        <td><label for="phone">Phone Number</label></td>
                        <td>
                            <input type="text"
                                    id="phone"
                                    name="phone"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    maxlength="12"
                                    required
                                    title="Enter phone number here"
                                    onblur="validatePhone()"
                                    placeholder="000-000-0000"
                            >
                            <span class="Error" id="phone-error"></span>
                        </td>
                    </tr>
                </tr>
                 <tr>
                    <th colspan="3">Address</th>
                </tr>
                <tr>
                    <td><label for="address1">Address Line 1</label></td>
                    <td>
                        <input type="text"
                                id="address1"
                                name="address1"
                                maxlength="30"
                                minlength="2"
                                required
                                title="Enter address here"
                                onblur="validateAddress1()"
                                placeholder="1234 Cougar Ln"
                        >
                    </td>
                    <tr>
                        <td><label for="address2">Address Line 2</label></td>
                        <td>
                            <input type="text"
                                    id="address2"
                                    name="address2"
                                    maxlength="30"
                                    minlength="2"
                                    required
                                    title="enter address 2 here"
                                    onblur="validateAddress2()"
                                    placeholder="optional"
                            >
                        </td>
                    </tr>
                </tr>
                    <td><label for="city">City</label></td>
                    <td>
                        <input type="text"
                                id="city"
                                name="city"
                                maxlength="30"
                                minlength="2"
                                required
                                title="enter city here"
                                onblur="validateCity()"
                                placeholder="Houston"
                        >
                    </td>
                    <tr>
                        <td><label for="state">State</label></td>
                        <td>
                            <select>
                                <option required>Please Select One</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="GU">Guam</option>	
                                <option value="HI">Hawaii</option>	
                                <option value="ID">Idaho</option>	
                                <option value="IL">Illinois</option>	
                                <option value="IN">Indiana</option>	
                                <option value="IA">Iowa</option>	
                                <option value="KS">Kansas</option>	
                                <option value="KY">Kentucky</option>	
                                <option value="LA">Louisiana</option>	
                                <option value="ME">Maine</option>	
                                <option value="MD">Maryland</option>	
                                <option value="MA">Massachusetts</option>	
                                <option value="MI">Michigan</option>	
                                <option value="MN">Minnesota</option>	
                                <option value="MS">Mississippi</option>	
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>	
                                <option value="NH">New Hampshire</option>	
                                <option value="NJ">New Jersey</option>	
                                <option value="NM">New Mexico</option>	
                                <option value="NY">New York</option>	
                                <option value="NC">North Carolina</option>	
                                <option value="ND">North Dakota</option>	
                                <option value="OH">Ohio</option>	
                                <option value="OK">Oklahoma</option>	
                                <option value="OR">Oregon</option>	
                                <option value="PA">Pennsylvania</option>	
                                <option value="PR">Puerto Rico</option>	
                                <option value="RI">Rhode Island</option>	
                                <option value="SC">South Carolina</option>	
                                <option value="SD">South Dakota</option>	
                                <option value="TN">Tennessee</option>	
                                <option value="TX">Texas</option>	
                                <option value="UT">Utah</option>	
                                <option value="VT">Vermont</option>	
                                <option value="VA">Virginia</option>	
                                <option value="WA">Washington</option>	
                                <option value="WV">West Virginia</option>	
                                <option value="WI">Wisconsin</option>	
                                <option value="WY">Wyoming</option>	
                            </select>
                        </td>
                    </tr>
                </tr>
                <tr>
                    <td><label for="zip">Zipcode</label></td>
                    <td>
                        <input type="text"
                                id="zip"
                                name="zip"
                                pattern="[0-9]{5}-[0-9]{4}"
                                maxlength="10"
                                minlength="5"
                                required
                                title="enter zipcode here"
                                onblur="validateZip()"
                                placeholder="12345"
                        >
                    </td>
                </tr>
                <tr>
                    <td><label for="email">Email Address</label></td>
                    <td>
                        <input type="text"
                                id="email"
                                name="email"
                                maxlength="30"
                                required
                                title="enter email address here"
                                onblur="validateEmail()"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$"
                                placeholder="abc123@mail.com"
                        />
                        <span class="Error" id="email-error"></span>
                    </td>
                    <tr>
                        <td><label for="email2">Confirm Email</label></td>
                        <td>
                            <input type="text"
                                    id="email2"
                                    name="email2"
                                    maxlength="30"
                                    required
                                    title="re-enter email address here"
                                    onblure="validateEmail2()"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$"
                                    placeholder="abc123@mail.com"
                            >
                            <span class="Error" id="email2-error"></span>
                        </td>
                    </tr>    
                </tr>
                <tr>
                    <th colspan="3">Reason for Visit and Symptoms</th>
                </tr>
                <tr>
                    <td><label for="information">Reason for your vist:</label></td>
                    <td>
                        <textarea id="information" 
                                    name="information" 
                                    maxlength="300"
                                    rows="4" 
                                    cols="50"
                                    placeholder="Please describe the reason for your vist here.">
                        </textarea>
                    </td>
                </tr>
                <tr>
                    <td class="td1"><label for="symptoms">How are your symptoms out of 10?<br/>(Rate from 1 good to 10 worst)</label></td>
                    <td>
                        <input type="range"
                                name="range"
                                id="range"
                                min="1"
                                max="10"
                                value="0"
                                required
                                />
                                <span id="range-slider"></span>
                    </td>
                </tr>
                    </td>
                </tr>
                <tr>
                    <td class="fh1"><label for="familyhist">Do you have family history of the following</label></td>
                    <td>
                        <input type="checkbox" id="option1" value="Diabetes"/>
                        <label for="Diabetes">Diabetes</label>

                        <input type="checkbox" id="option2" value="Heart Disease"/>
                        <label for="Heart Disease">Heart Disease</label>

                        <input type="checkbox" id="option3" value="High Cholestrol"/>
                        <label for="High Cholestrol">High Cholestrol</label>

                        <input type="checkbox" id="option4" value="High Blood Pressure"/>
                        <label for="High Blood Pressure">High Blood Pressure</label>

                        <input type="checkbox" id="option5" value="Anxiety/Depression"/>
                        <label for="Anxiety/Depression">Anxiety/Depression</label>

                        <input type="checkbox" id="option6" value="Other"/>
                        <label for="Other">Other</label>

                    </td>
                </tr>
                <tr>
                    <th colspan="3">Payment information</th>
                </tr>
                <tr>
                    <td><label for="pmt">How will you cover the Payment?</label></td>
                    <td>
                        <input type="radio" id="pmt1" name="pmt" value="Insurance">Insurance
                        <input type="radio" id="pmt2" name="pmt" value="Self Pay">Self Pay
                    </td>
                </tr>
                <tr>
                    <td><label for="guarantor">Who is your guarantor?</label></td>
                    <td>
                        <input type="radio" id="guarantor1" name="guarantor" value="Self">Self
                        <input type="radio" id="guarantor2" name="guarantor" value="Parent">Parent
                        <input type="radio" id="guarantor3" name="guarantor" value="Other">Other
                    </td>
                </tr>
                 <tr>
                    <th colspan="3">Make an Account to Sign In</th>
                </tr>
                <tr>
                    <td class="td1"><label for="username">Username</label></td>
                    <td>
                        <input type="text"
                                name="username"
                                id="username"
                                maxlenth="20"
                                minlenth="5"
                                required
                                title="Enter Username here, needs to contain 5 characters, first character cannot be number"
                                onblur="validateUser()"
                                placeholder="cannot be email"
                                >
                        <span class="Error" id="username error"></span>
                    </td>
                </tr>
                <tr>
                    <td><label for="psword">Password</label></td>
                    <td>
                        <input type="password"
                                name="password"
                                id="password"
                                required
                                title="enter password here, must contain at least 10 characters, one uppercase letter, one number, one lowercase and one special character"
                                minlength="8"
                                maxlength="30"
                                onblur="validatePsword()"
                                oninput="validatePsword()"
                                onfocus="validatePsword()"
                                placeholder="password"
                        >
                        <span class="Error" id="password error"></span>
                    </td>
                </tr>
                <tr>
                    <td><label for="rpass">Renter Password</laber></tr><td>
                    <td>
                        <input type="password"
                                name="rpass"
                                id="rpass"
                                required
                                title="reenter password here"
                                minlength="8"
                                maxlength="30"
                                onblur="confirmRpass()"
                                oninput="confirmRpass()"
                                onfocus="confirmRPass()"
                                placeholder="reenter password"
                        >
                        <span class="Error" id="reenter password error"></span>
                    </td>
                </tr>
                <tr>
                    <td colspan="4">
                        <center>
                            <input type="submit" name="submit" id="submit">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="reset" name="reset" id=reset>   
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="review" 
                                    name="review"
                                    id="review" 
                                    onclick="reviewInput()">
                        </center>
                    </td>
                </tr>
            </table>
        </div>
            <center>
                <p id="showInput"></p>
            </center>
    </form>
            <footer>
                <p>&#169; Universal Medical <a href="contact2.html">Contact Us!</a></p>
            </footer>
<script src="hw2.js"></script>
    </body>
</html>
