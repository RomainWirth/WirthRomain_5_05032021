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

// sélection du bouton de paiement du formulaire
const paymentFormButton = document.getElementById("payment_form_button");
console.log(paymentFormButton); // vérification de la sélection du bouton dans la console

// eventListener sur le bouton de confirmation de paiement
paymentFormButton.addEventListener("click", function(event) {
    event.preventDefault();
    // récupération des valeurs du formulaire pour les mettre dans le local storage
    localStorage.setItem("nom", document.querySelector("#nom").value);
    localStorage.setItem("prenom", document.querySelector("#prenom").value);
    localStorage.setItem("email", document.querySelector("#email").value);
    localStorage.setItem("telephone", document.querySelector("#telephone").value);
    localStorage.setItem("adresse", document.querySelector("#adresse").value);
    localStorage.setItem("codePostal", document.querySelector("#codePostal").value);
    localStorage.setItem("ville", document.querySelector("#ville").value);
    localStorage.setItem("pays", document.querySelector("#pays").value);

    const contact = {
        nom: localStorage.getItem("nom"),
        prenom: localStorage.getItem("prenom"),
        email: localStorage.getItem("email"),
        telephone: localStorage.getItem("telephone"),
        adresse: localStorage.getItem("adresse"),
        codePostal: localStorage.getItem("codePostal"),
        ville: localStorage.getItem("ville"),
        pays: localStorage.getItem("pays")
    }
    console.log(array.isArray(contact));
    console.log("test n°x : page panier.html - contenu du tableau contact");
    console.log(contact); // console log du formulaire

    // ajout des values du formulaire et les produits sélectionnés dans un objet à envoyer au serveur
    
    let localStorageRegisteredItem = JSON.parse(localStorage.getItem("product"));
    const toSend = {
        localStorageRegisteredItem,
        form
    }
    console.log(toSend);

})

