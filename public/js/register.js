
console.log('tata');
// FORM REGISTER

/* ~On click displays fields~ */
document.getElementById("btn_on").addEventListener("click", clicked);

function clicked() {
    document.getElementById('fiels_hidden').classList.remove("hidden_kollector");
    document.getElementById('text_hidden').classList.remove("hidden_kollector");
    /* ~Change attribute~ */
    document.getElementById('registration_form_name').setAttribute('required', true);
    document.getElementById('registration_form_firstname').setAttribute('required', true);
    document.getElementById('registration_form_postalcode').setAttribute('required', true);
    document.getElementById('registration_form_city').setAttribute('required', true);

	document.getElementById('registration_form_roles_1').checked = true;
}


// FORM REGISTER INVERSE
/* ~On click displays fields~ */

document.getElementById("btn_off").addEventListener("click", clickoff);

function clickoff() { 
    document.getElementById('fiels_hidden').classList.add("hidden_kollector");
    document.getElementById('text_hidden').classList.add("hidden_kollector");
    /* ~Change attribute~ */
    document.getElementById('registration_form_name').removeAttribute('required');
    document.getElementById('registration_form_firstname').removeAttribute('required');
    document.getElementById('registration_form_postalcode').removeAttribute('required');
    document.getElementById('registration_form_city').removeAttribute('required');

	document.getElementById('registration_form_roles_1').checked = false;
    document.getElementById('registration_form_plainPassword').value = "";
}

