/* ~Eye Password login~ */
const eye = document.getElementById("eye_on");
const eyeoff = document.getElementById("eye_off");
const passwordField = document.getElementById("inputPassword");

function eyeClick(){
	eye.classList.add('eye_display');
	eyeoff.classList.remove('eye_display');
	passwordField.type="text";
}

function eyeOffClick(){
	eye.classList.remove('eye_display');
	eyeoff.classList.add('eye_display');
	passwordField.type="password";
}