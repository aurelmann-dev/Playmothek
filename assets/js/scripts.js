// NAVBAR FIXED
/* ~Top screen navbar position~ */

window.onscroll = function () { scrollNavbar() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scrollNavbar() {
    console.log(navbar);
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


// FORM REGISTER

/* ~On click displays fields~ */
var fiels = document.getElementById('fiels_hidden');
var fiels_text = document.getElementById('text_hidden');

function clicked() {
    fiels.classList.remove("hidden_kollector");
    fiels_text.classList.remove("hidden_kollector");
    /* ~Change attribute~ */
    var name = document.getElementById('registration_form_name');
    name.setAttribute('required', true);

    var firstname = document.getElementById('registration_form_firstname');
    firstname.setAttribute('required', true);

    var postalcode = document.getElementById('registration_form_postalcode');
    postalcode.setAttribute('required', true);

    var city = document.getElementById('registration_form_city');
    city.setAttribute('required', true);

	var checkbox = document.getElementById('registration_form_roles_1');
	checkbox.checked = true;
}


// FORM REGISTER INVERSE
/* ~On click displays fields~ */
function clickoff() { 
    fiels.classList.add("hidden_kollector");
    fiels_text.classList.add("hidden_kollector");
    /* ~Change attribute~ */
    var name = document.getElementById('registration_form_name');
    name.removeAttribute('required');

    var firstname = document.getElementById('registration_form_firstname');
    firstname.removeAttribute('required');

    var postalcode = document.getElementById('registration_form_postalcode');
    postalcode.removeAttribute('required');

    var city = document.getElementById('registration_form_city');
    city.removeAttribute('required');

	var checkbox = document.getElementById('registration_form_roles_1');
	checkbox.checked = false;

	var elem = document.getElementById('registration_form_plainPassword').value = "";
}


