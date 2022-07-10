console.log('coucou');

/* ~Eye Password login~ */


document.getElementById("eye_on").addEventListener("click", eyeClick);

function eyeClick(){
	document.getElementById("eye_on").classList.add('eye_display');
	document.getElementById("eye_off").classList.remove('eye_display');
	document.getElementById("inputPassword").type="text";
}

document.getElementById("eye_off").addEventListener("click", eyeOffClick);

function eyeOffClick(){
	document.getElementById("eye_on").classList.remove('eye_display');
	document.getElementById("eye_off").classList.add('eye_display');
	document.getElementById("inputPassword").type="password";
}

