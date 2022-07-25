

var localemail;
var localpass;
window.onload = function () {
    var form = document.getElementById("form1");
    form.addEventListener("submit", formSignin);
  
    var user = localStorage.getItem("localuser");
    user = JSON.parse(user);
    localemail = user[0].email;
    localpass = user[0].password;

}

function formSignin(e) {
    e.preventDefault()
    window.location.href="index.html";
    var email1 = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var errormsg1 = document.getElementById("errormsg");
    errormsg1.innerHTML = "";
    console.log(email1, pass)
    if(email1 == localemail && localpass == pass) {
        // Comment====>USE home page link here
          location.assign("signUp.html")   
           
    }else {
        errormsg1.innerHTML = "incorrect email or password"
    }
}
