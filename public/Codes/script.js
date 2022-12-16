var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}



/*Pour la page du formulaire : 

function isValidPhoneNumber(phoneNumber) {
  var phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneNumberRegex.test(phoneNumber);
}

var phoneNumber = document.getElementById('phone').value;
if (isValidPhoneNumber(phoneNumber)) {
  // Le numéro de téléphone est valide, vous pouvez soumettre le formulaire
} else {
  // Le numéro de téléphone n'est pas valide, affichez un message d'erreur à l'utilisateur
}*/





