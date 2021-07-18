// Affichage du formulaire de paiement au clic 

let displayFormButton = document.getElementById("togg1");
let formContainer = document.getElementById("payment_form_container");
formContainer.style.display = "none";

displayFormButton.addEventListener("click", function(event){
    event.preventDefault();
    if (getComputedStyle(formContainer).display != "none") {
        formContainer.style.display = "none";
    } else {
        formContainer.style.display = "block";
    }
})

// fin de fonction

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

// =============================================================================================
// début contrôle du formulaire et envoi des données au localStorage : eventListener sur le bouton de confirmation de paiement
// =============================================================================================

// sélection du bouton de paiement du formulaire pour un eventListener ---------------------------------
const paymentFormButton = document.getElementById("payment_form_button");

// ====== TEST ==================================================================================
console.log("test n°23 : vérification de la sélection du bon élément du DOM");
console.log(paymentFormButton); // vérification de la sélection du bouton dans la console
// == FIN TEST ==================================================================================

// infos sur les tests : 
console.log("tests de 24 à 33 : s'affichent et restent dans la console quand on désactive le lien vers la page confirmation de paiement (ligne 271) + clieck du bouton \"payer\"");

// === début eventListener sur le bouton d'achat =======================================================
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

    // ====== TEST ==================================================================================
    console.log("test n°24 : page panier.html - affichage du contenu du tableau contact"); 
    console.log(contact); // console log du formulaire avant envoi au serveur
    // == FIN TEST ==================================================================================

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


    // fonctions de contrôle de validité des champs de saisie du formulaire ======================================================================
    console.log("série de tests n°25 : vérification de la validité des données du formulaire");
    function firstNameControl() {
        // contrôle validité prénom
        const firstNameField = contact.firstName;
        if(regExTextArea(firstNameField)){
            console.log("prénom OK"); // retourne OK si remplissage valide
            textMissingValueInvisible(missFirstNameField);
            return true;
        } else {
            console.log("prénom KO"); // retourne une erreur au console log si l'information n'est pas valide
            textMissingValue(missFirstNameField); // affiche les éléments qui n'ont pas bien été remplis
            alert(textAlert("Champ Prénom")); // fenêtre d'alerte indiquant l'erreur lors de la saisie du formulaire
            return false;
        }
    } // fin contrôle validité prénom
    function lastNameControl() {
        // contrôle validité nom
        const lastNameField = contact.lastName;
        if(regExTextArea(lastNameField)){
            console.log("nom OK"); // retourne OK si remplissage valide
            textMissingValueInvisible(missLastNameField);
            return true;
        } else {
            console.log("nom KO"); // retourne une erreur au console log si l'information n'est pas valide
            textMissingValue(missLastNameField);
            alert(textAlert("Champ NOM"));
            return false;
        }
    } // fin contrôle validité nom
    function addressControl() {
        // contrôle validité adresse
        const addressField = contact.address;
        if(regExAddress(addressField)){
            console.log("adresse OK"); // retourne OK si remplissage valide
            textMissingValueInvisible(missAddressField);
            return true;
        } else {
            console.log("adresse KO"); // retourne une erreur au console log si l'information n'est pas valide
            textMissingValue(missAddressField);
            alert("L'addresse renseignée ne doit contenir que des chiffres et des lettres");
            return false;
        }
    } // fin contrôle validité adresse
    function cityControl() {
        // contrôle validité ville
        const cityField = contact.city;
        if(regExTextArea(cityField)){
            console.log("ville OK"); // retourne OK si remplissage valide
            textMissingValueInvisible(missCityField);
            return true;
        } else {
            console.log("ville KO"); // retourne une erreur au console log si l'information n'est pas valide
            textMissingValue(missCityField);
            alert("le Champ ville ne doit contenir que des lettres");
            return false;
        }
    } // fin contrôle validité ville
    function emailControl() {
        // contrôle validité email
        const emailField = contact.email;
        if(regExEmail(emailField)){
            console.log("email OK"); // retourne OK si remplissage valide
            textMissingValueInvisible(missEmailField);
            return true;
        } else {
            console.log("email KO"); // retourne une erreur au console log si l'information n'est pas valide
            textMissingValue(missEmailField);
            alert("l'adresse email n'est pas valide");
            return false;
        }
    } // fin contrôle validité email

    // si les champs contrôlés sont corrects : envoi des données contact dans le localStorage
    if(firstNameControl() && lastNameControl() && cityControl() && addressControl() && emailControl()){
        localStorage.setItem("contact", JSON.stringify(contact)); // envoi des données "contact" au localStorage

        // ajout des values des produits sélectionnés pour récupérer l'id de chaque item et les mettre dans un tableau
        let localStorageRegisteredItem = JSON.parse(localStorage.getItem("product")); // récupération des données du local storage

        // ====== TEST ==================================================================================
        console.log("test n°26 : vérification des infos du localStorage")
        console.log(localStorageRegisteredItem); // retourne un tableau avec les éléments du panier du local storage
        console.log(localStorageRegisteredItem.length); // vérification de la taille du tableau avant la boucle for
        // == FIN TEST ==================================================================================

        let products = []; // tableau vide rempli par la boucle ci-dessous
        // création d'une boucle pour récupérer les itemId de chaque item puis les insérer dans un tableau
        for (let k = 0; k < localStorageRegisteredItem.length; k++) {
            products.push(localStorageRegisteredItem[k].itemId);
        }

        // ====== TEST ==================================================================================
        console.log("test n°27 : page panier.html - contenu du tableau products (items Ids) et type de valeurs")
        console.log(products); // vérification des info contenues dans le tableau : string de itemId
        console.log(typeof products[0]); // retourne string = le tableau est bien composé de strings
        // == FIN TEST ==================================================================================

        localStorage.setItem("products", JSON.stringify(products)); // envoi du tableau au local storage

        // stockage de contact et products dans une constante pour envoyer au serveur
        const toSend= {
            contact,
            products
        }

        // ====== TEST ==================================================================================
        console.log("text n°28 : vérification des données à envoyer au serveur");
        console.log(toSend);
        // == FIN TEST ==================================================================================

        // DEBUT de communication avec le serveur =======================================================
        // Envoi de l'objet "toSend" vers le serveur
        const promiseSend = fetch("http://localhost:3000/api/teddies/order", {
            method: "POST",
            body: JSON.stringify(toSend),
            headers: {
                "Content-Type" : "application/json",
            },
        });

        // ====== TEST ==================================================================================
        console.log("text n°29 : contrôle de promiseSend envoyé au serveur");
        console.log(promiseSend); // promise à l'état pending (ni remplie, ni rompue)
        // == FIN TEST ==================================================================================

        promiseSend.then(async function(response){
            try {
                // ====== TEST ==================================================================================
                console.log("test n°30 : vérification de la réponse du serveur");
                console.log(response); // status 201 : created = une ressource à été créée + preflight
                // == FIN TEST ==================================================================================

                const content = await response.json();

                // ====== TEST ==================================================================================
                console.log("test n°31 : vérification du contenu de la réponse du serveur");
                console.log(content); // réponse serveur objets contact, products et orderId
                // == FIN TEST ==================================================================================

                if (response.ok){
                    // ====== TEST ==================================================================================
                    console.log("test n°32 : vérification de l'état de la réponse du serveur (true ou fasle)")
                    console.log(`résultat de response.ok : ${response.ok}`); // réponse true : ok
                    // == FIN TEST ==================================================================================
                    
                    // récupération de l'id de la réponse du serveur
                    // ====== TEST ==================================================================================
                    console.log("test n°33 : affichage de l'id de response = utilisé pour la confirmation de commande");
                    console.log("id de confirmation = " + content.orderId); // ID de confirmation de la commande
                    // == FIN TEST ==================================================================================


                    // envoi de l'ID dans le local storage
                    localStorage.setItem("responseId", content.orderId);

                    // désactiver le lien ci-dessous pour effectuer les tests de contrôle de 16 à 25
                    window.location.href = "confirmation.html"; // lien vers la page de confirmation **********************************************************

                } else {

                    // ====== TEST ==================================================================================
                    console.log("test d'erreur :")
                    console.log(`réponse du serveur : ${response.status}`); // renvoie le code d'erreur du serveur 
                    // == FIN TEST ==================================================================================

                    alert(`Problème avec le serveur : erreur ${response.status}`) // message d'alerte en cas d'erreur
                }
            } catch(error) {

                // ====== TEST ==================================================================================
                console.log("test d'erreur : Erreur au niveau du catch")
                console.log(error);
                // == FIN TEST ==================================================================================

                alert("une erreur s'est produite :" + error); // message d'alerte en cas d'erreur
            }
        }); // fin envoi données au serveur =====================================================================

    } else {
        alert("Veuillez remplir le formulaire correctement"); // renvoie une box d'alerte sur la page pour l'utilisateur en cas de mauvais remplissage du tableau
    }
    // FIN - GESTION DE VALIDATION DU FORMULAIRE ----------------------------------------------------------------

}); // === FIN eventListener sur le bouton d'achat =======================================================

// =============================================================================================
// FIN contrôle du formulaire et envoi des données au localStorage
// =============================================================================================

// remplissage automatique des valeurs du formulaire stockées depuis le localStorage ============
// récupération de la key du localStorage dans une variable
const contactLocalStorage = localStorage.getItem("contact");
// conversion de la variable en objet JS
const contactData = JSON.parse(contactLocalStorage);

// ====== TEST ==================================================================================
console.log("test n°34 : affichage des infos \"contact\" dans la variable contactData");
console.log(contactData); // vérification de la const contactData
// == FIN TEST ==================================================================================

// Ajout les valeurs du localStorage dans les champs du formulaire
document.querySelector("#firstName").value = contactData.firstName;
document.querySelector("#lastName").value = contactData.lastName;
document.querySelector("#address").value = contactData.address;
document.querySelector("#city").value = contactData.city;
document.querySelector("#email").value = contactData.email;
// fin remplissage automatique des valeurs du formulaire stockées depuis le localStorage =========
