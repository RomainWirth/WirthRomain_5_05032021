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
console.log(paymentFormButton); // vérification de la sélection du bouton dans la console
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
    console.log("série de tests n°x : vérification de la validité des données du formulaire");
    function firstNameControl() {
        // contrôle validité prénom
        const firstNameField = contact.firstName;
        if(regExTextArea(firstNameField)){
            console.log("prénom OK"); // retourne OK si remplissage valide
            textMissingValueInvisible(missFirstNameField);
            return true;
        } else {
            console.log("prénom KO");
            textMissingValue(missFirstNameField);
            alert(textAlert("Champ Prénom"));
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
            console.log("nom KO");
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
            console.log("adresse KO");
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
            console.log("ville KO");
            textMissingValue(missCityField);
            alert("le Champ ville ne doit contenir que des lettres");
            return false;
        }
    } // fin contrôle validité ville
    function emailControl() {
        // contrôle validité ville
        const emailField = contact.email;
        if(regExEmail(emailField)){
            console.log("email OK"); // retourne OK si remplissage valide
            textMissingValueInvisible(missEmailField);
            return true;
        } else {
            console.log("email KO");
            textMissingValue(missEmailField);
            alert("l'adresse email n'est pas valide");
            return false;
        }
    } // fin contrôle validité ville

    // si les champs contrôlés sont corrects : envoi des données contact dans le localStorage
    if(firstNameControl() && lastNameControl() && cityControl() && addressControl() && emailControl()){
        localStorage.setItem("contact", JSON.stringify(contact));

        // ajout des values des produits sélectionnés pour récupérer l'id de chaque item et les mettre dans un tableau
        let localStorageRegisteredItem = JSON.parse(localStorage.getItem("product")); // récupération des données du local storage
        console.log(localStorageRegisteredItem); // retourne un tableau avec les éléments du panier du local storage
        console.log(localStorageRegisteredItem.length);
        let products = []; // tableau vide rempli par la boucle ci-dessous
        // création d'une boucle pour récupérer les itemId de chaque item puis les insérer dans un tableau
        for (let k = 0; k < localStorageRegisteredItem.length; k++) {
            products.push(localStorageRegisteredItem[k].itemId);
        }
        console.log("test n°x : page panier.html - contenu du tableau products et type de valeurs")
        console.log(products); // vérification des info contenues dans le tableau : string de itemId
        console.log(typeof products[0]); // retourne string = le tableau est bien composé de strings

        localStorage.setItem("products", JSON.stringify(products));

        // stockage de contact et products dans une constante pour envoyer au serveur
        const toSend= {
            contact,
            products
        }

        console.log("text n°x : vérification des données à envoyer au serveur");
        console.log(toSend);

        // DEBUT de communication avec le serveur ======
        // Envoi de l'objet "toSend" vers le serveur
        const promiseSend = fetch("http://localhost:3000/api/teddies/order", {
            method: "POST",
            body: JSON.stringify(toSend),
            headers: {
                "Content-Type" : "application/json",
            },
        });
        console.log("text n°x : contrôle de promiseSend envoyé au serveur");
        console.log(promiseSend); // promise à l'état pending (ni remplie, ni rompue)

        promiseSend.then(async function(response){
            try {
                console.log("test n°x : vérification de la réponse du serveur");
                console.log(response); // status 201 : created = une ressource à été créée + preflight

                const content = await response.json();
                console.log("test n°x : vérification du contenu de la réponse du serveur");
                console.log(content); // réponse serveur objets contact, products et orderId

                if (response.ok){
                    console.log(`résultat de response.ok : ${response.ok}`); // réponse true
                    
                    // récupération de l'id de la réponse du serveur
                    console.log("id de response");
                    console.log(content.orderId);

                    // envoi de l'ID dans le local storage
                    localStorage.setItem("responseId", content.orderId);

                    window.location.href = "confirmation.html"; // lien vers la page de confirmation

                } else {
                    console.log(`réponse du serveur : ${response.status}`); // renvoie le code d'erreur du serveur 
                    alert(`Problème avec le serveur : erreur ${response.status}`) // message d'alerte en cas d'erreur
                }
            } catch(error) {
                console.log("Erreur au niveau du catch")
                console.log(error);
                alert("une erreur s'est produite :" + error);
            }
        }); // fin envoi données au serveur

    } else {
        alert("Veuillez remplir le formulaire correctement")
    }
    // FIN - GESTION DE VALIDATION DU FORMULAIRE ----------------------------------------------------------------------------------------

}); // === FIN eventListener sur le bouton d'achat =======================================================

// =============================================================================================
// FIN contrôle du formulaire et envoi des données au localStorage
// =============================================================================================

// remplissage automatique des valeurs du formulaire stockées depuis le localStorage
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
// fin remplissage automatique des valeurs du formulaire stockées depuis le localStorage

