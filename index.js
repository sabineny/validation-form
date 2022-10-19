
function submit(){

var name = document.getElementById("name");
var email = document.getElementById("email");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
error1.innerHTML="please enter your name";
error2.innerHTML="please enter your email";
name.style.border = "1px red solid";
email.style.border = "1px red solid";
}



