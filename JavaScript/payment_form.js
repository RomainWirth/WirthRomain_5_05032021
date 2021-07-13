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
paymentFormButton.addEventListener ("click", function(event) { 
    event.preventDefault();
    // récupération des valeurs du formulaire pour les mettre dans le local storage
    // récupérer des valeurs du formulaire pour les mettre dans une objet "contact"
    const contact = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value
    }
    console.log("test n°x : page panier.html - contenu du tableau contact");
    console.log(contact); // console log du formulaire avant envoi au serveur */

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

    // GESTION DE VALIDATION DU FORMULAIRE ---------------------------------------------------------------------------------------------
    const textAlert = function(value){
        return `${value} : Chiffres et symboles ne sont pas autorisés \nNombre de caractères compris entre 3 et 20`;
    }
    
    // définition regExp
    const regExTextArea = function(value) {
        return /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(value);
    }
    const regExAddress = function(value) {
        return /^[A-Za-z0-9\s*]{5,50}$/.test(value);
    }
    const regExEmail = function(value) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    }

    // sélection des balises span du formulaire pour affichage
    var missFirstNameField = document.getElementById("missingFirstName");
    var missLastNameField = document.getElementById("missingLastName");
    var missAddressField = document.getElementById("missingAddress");
    var missCityField = document.getElementById("missingCity");
    var missEmailField = document.getElementById("missingEmail");
    // création de variable DRY pour les fonctions de contrôle des champs du formulaire
    function textMissingValueInvisible(variable){
        variable.textContent = "";
    };
    function textMissingValue(variable){
        variable.textContent = "Format incorrect";
    };


    // fonctions de contrôle
    function firstNameControl() {
        // contrôle validité prénom
        const firstNameField = contact.firstName;
        if(regExTextArea(firstNameField)){
            console.log("prénom OK");
            textMissingValueInvisible(missFirstNameField);
            return true;
        } else {
            console.log("prénom KO");
            textMissingValue(missFirstNameField);
            alert(textAlert("Champ Prénom"));
            return false;
        }
    }
    function lastNameControl() {
        // contrôle validité nom
        const lastNameField = contact.lastName;
        if(regExTextArea(lastNameField)){
            console.log("nom OK");
            textMissingValueInvisible(missLastNameField);
            return true;
        } else {
            console.log("nom KO");
            textMissingValue(missLastNameField);
            alert(textAlert("Champ NOM"));
            return false;
        }
    }
    function addressControl() {
        // contrôle validité adresse
        const addressField = contact.address;
        if(regExAddress(addressField)){
            console.log("adresse OK");
            textMissingValueInvisible(missAddressField);
            return true;
        } else {
            console.log("adresse KO");
            textMissingValue(missAddressField);
            alert("L'addresse renseignée ne doit contenir que des chiffres et des lettres");
            return false;
        }
    }
    function cityControl() {
        // contrôle validité ville
        const cityField = contact.city;
        if(regExTextArea(cityField)){
            console.log("ville OK");
            textMissingValueInvisible(missCityField);
            return true;
        } else {
            console.log("ville KO");
            textMissingValue(missCityField);
            alert("le Champ ville ne doit contenir que des lettres");
            return false;
        }
    }
    function emailControl() {
        // contrôle validité ville
        const emailField = contact.email;
        if(regExEmail(emailField)){
            console.log("email OK");
            textMissingValueInvisible(missEmailField);
            return true;
        } else {
            console.log("email KO");
            textMissingValue(missEmailField);
            alert("l'adresse email n'est pas valide");
            return false;
        }
    }

    if(firstNameControl() && lastNameControl() && cityControl() && addressControl() && emailControl()){
        localStorage.setItem("contact", JSON.stringify(contact));
    } else {
        alert("Veuillez remplir le formulaire correctement")
    }


    // FIN - GESTION DE VALIDATION DU FORMULAIRE ----------------------------------------------------------------------------------------

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

    localStorage.setItem("products", JSON.stringify(products));

    // envoie de contact et products au serveur
    const toSend= {
        contact,
        products
    }
    console.log("à envoyer au serveur");
    console.log(toSend);
});

// remplir automatiquement les valeurs du formulaire depuis le localStorage
// récupération de la key du localStorage dans une variable
const contactLocalStorage = localStorage.getItem("contact");
// conversion de la variable en objet JS
const contactData = JSON.parse(contactLocalStorage);
console.log("contactData");
console.log(contactData); // vérification de la const contactData

// on ajoute les valeurs du localStorage dans les champs du formulaire
document.querySelector("#firstName").value = contactData.firstName;
document.querySelector("#lastName").value = contactData.lastName;
document.querySelector("#address").value = contactData.address;
document.querySelector("#city").value = contactData.city;
document.querySelector("#email").value = contactData.email;