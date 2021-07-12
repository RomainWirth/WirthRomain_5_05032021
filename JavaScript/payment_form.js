// début validation du formulaire de paiement -------------------------------------------------------------------------
// selection du bouton d'envoi
var formValid = document.getElementById("payment_form_button");
// identification du premier champ requis : prénom
var firstNameField = document.getElementById("firstName");
var missFirstNameField = document.getElementById("missingFirstName");
var validFirstNameField = new RegExp("[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$");
// identification du deuxième champ requis : nom
var lastNameField = document.getElementById("lastName");
var missLastNameField = document.getElementById("missingLastName");
var validLastNameField = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
// identification du deuxième champ requis : adresse
var addressField = document.getElementById("lastName");
var missAddressField = document.getElementById("missingAddress");
var validAddressField = /^[0-9]+[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
// identification du deuxième champ requis : ville
var cityField = document.getElementById("city");
var missCityField = document.getElementById("missingCity");
var validCityField = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
// identification du deuxième champ requis : email
var emailField = document.getElementById("email");
var missEmailField = document.getElementById("missingEmail");
var validEmailField = /^[0-9]+[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

function validate(event){
    // si le champ est vide
    if (validFirstNameField.validity.ValueMissing) {
        event.preventDefault();
        missFirstNameField.textContent = "NOM manquant";
        missFirstNameField.style.color = "red";
    } // si le format de données est incorrect
    else if (validFirstNameField.test(firstName.value)){
        event.preventDefault();
        missFirstNameField.textContent = "Format incorrect";
        missFirstNameField.style.color = "orange";
    } else {

    }
}

formValid.addEventListener("submit", validate);

// récupération des informations à envoyer au serveur -------------------------------------------------------------------

// données requises selon les livrables :
/**
 *
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * products: [string] <-- array of product _id
 *
 */



// sélection du bouton de paiement du formulaire pour un eventListener ---------------------------------
const paymentFormButton = document.getElementById("payment_form_button");
console.log(paymentFormButton); // vérification de la sélection du bouton dans la console
// eventListener sur le bouton de confirmation de paiement
paymentFormButton.addEventListener("click", function(event) {
    event.preventDefault();

    // récupération des valeurs du formulaire pour les mettre dans le local storage
    // récupérer des valeurs du formulaire pour les mettre dans une varibale "contact" sous forme d'objet
    const contact = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value
    }
    console.log("test n°x : page panier.html - contenu du tableau contact");
    console.log(contact); // console log du formulaire avant envoi au serveur

    // formulaire complet non requis dans les livrables
    /* let contactFull = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value
        postalCode: document.querySelector("#postalCode").value,
        country: ldocument.querySelector("#country").value,
        telephone: document.querySelector("#telephone").value
    }
    console.log(contactFull); // console log du formulaire complet (non requis dans les livrables) */

    // ajout des values des produits sélectionnés pour récupérer l'id de chaque item et les mettre dans un tableau
    let localStorageRegisteredItem = JSON.parse(localStorage.getItem("product")); // récupération des données du local storage
    console.log(localStorageRegisteredItem); // retourne un tableau avec les éléments du panier du local storage
    console.log(localStorageRegisteredItem.length);
    let products = []; // tableau vide rempli par la boucle ci-dessous
    // création d'une boucle pour récupérer les itemId de chaque item puis les insérer dans un tableau
    for (let k = 0; k < localStorageRegisteredItem.length; k++) {
        products.push(localStorageRegisteredItem[k].itemId);
    }
    console.log("test n°x : page panier.html - contenu du tableau products")
    console.log(products); // vérification des info contenues dans le tableau : string de itemId

    // envoie de contact et products au serveur


})