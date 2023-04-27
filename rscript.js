function validateForm(){

    var vname = document.forms["myForm"]["name"].value;
    var vpassword = document.forms["myForm"]["password"].value;
    var vconfirm = document.forms["myForm"]["Confirmed_password"].value;
    var vemail = document.forms["myForm"]["email"].value;
    var atposition = vemail.indexOf("@");
    var dotposition = vemail.lastIndexOf(".");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!vemail.match(mailformat))
    {
    alert("Please enter a valid email address.");
    return false;
    }
    if (vname == null || vname == ""){
        alert("Name must be filled out");
        return false;
    }

    if (vpassword == null || vpassword == ""){
        alert("Password must be filled out");
        return false;
    }
    
    if (vconfirm == null || vconfirm == ""){
        alert("confirm password must be filled out");
        return false;
    }

    if (vemail == null || vemail == ""){
        alert("Name must be filled out");
        return false;
    }

    if(vpassword != vconfirm){
        alert("password and confirm password are not the same");
        return false;
    }
}
