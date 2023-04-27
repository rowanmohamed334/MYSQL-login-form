function validateLgForm(){

    var lgpassword = document.forms["LgForm"]["password"].value;
    var lgemail = document.forms["LgForm"]["email"].value;
    var atposition = lgemail.indexOf("@");
    var dotposition = lgemail.lastIndexOf(".");

    if (lgemail == null || lgemail == ""){
        alert("Email must be filled out");
        return false;
    }

    if (lgpassword == null || lgpassword == ""){
        alert("Password must be filled out");
        return false;
    }

    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=lgemail.length){  
            alert("Please enter a valid e-mail address \n @ postion:"+atposition+"\n dot position:"+dotposition);
            return false
    }
}
