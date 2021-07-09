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
    // récupérer des valeurs du formulaire pour les mettre dans une varibale "contact" sous forme d'objet
    const contact = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        adress: document.querySelector("#adress").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value
    }
    console.log("test n°x : page panier.html - contenu du tableau contact");
    console.log(contact); // console log du formulaire avant envoi au serveur

    // formulaire complet non requis dans les livrables
    /* let contactFull = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        adress: document.querySelector("#adress").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value
        postalCode: document.querySelector("#postalCode").value,
        country: ldocument.querySelector("#country").value,
        telephone: document.querySelector("#telephone").value
    }
    console.log(contactFull); // console log du formulaire complet (non requis dans les livrables) */

    // ajout des values des produits sélectionnés pour récupérer l'id de chaque item et les mettre dans un objet
    
    let localStorageRegisteredItem = JSON.parse(localStorage.getItem("product")); // récupération des données du local storage
    console.log(localStorageRegisteredItem); // retourne un tableau avec les éléments du panier du local storage
    // création d'un tableau vide pour y insérer les itemId
    // récupérer chaque itemId dans localStorageRegisteredItem
    



})

