
const displayHtmlForm = function() {
    // sélection élément du dom pour insertion du formulaire
    const insertForm = document.getElementById("payment_form_container");

    const formStructure =`
        <h2>Mes informations</h2>
        <form class="payment_form__registration">
            <div class="payment_form__registration--container">
                <h3>Votre identité</h3>
                <label for=nom>Nom</label>
                <input id=nom name=nom type=text placeholder="NOM" required autofocus>
                <label for=prenom>Prénom</label>
                <input id=prenom name=prenom type=text placeholder="Prénom" required>
                <label for=email>Email</label>
                <input id=email name=email type=email placeholder="exemple@domaine.com" required>
                <label for=telephone>Téléphone</label>
                <input id=telephone name=telephone type=tel placeholder="par ex&nbsp;: +3375500000000" required>
            </div>
            <div class="payment_form__registration--container">
                <h3>Adresse de livraison</h3>
                <label for=adresse>Adresse</label>
                <input id=adresse name=adresse rows=5 required></textarea>
                <label for=codePostal>Code postal</label>
                <input id=codePostal name=codePostal type=text required>
                <label for=ville>VILLE</label>
                <input id=ville name=ville type=text required>
                <label for=pays>PAYS</label>
                <input id=pays name=pays type=text required>
            </div>
            <div class="payment_form__registration--container">
                <h3>Informations CB</h3>
                <h4>Type de carte bancaire</h4>
                <div class="bank-info">
                    <input id=visa name=type_de_carte type=radio>
                    <label for=visa>VISA</label>
                    <input id=amex name=type_de_carte type=radio>
                    <label for=amex>AmEx</label>
                    <input id=mastercard name=type_de_carte type=radio>
                    <label for=mastercard>Mastercard</label>
                </div>
                <label for=numero_de_carte>N° de carte</label>
                <input id=numero_de_carte name=numero_de_carte type=number required>
                <label for=securite>Code sécurité</label>
                <input id=securite name=securite type=number required>
                <label for=nom_porteur>Nom du porteur</label>
                <input id=nom_porteur name=nom_porteur type=text placeholder="Même nom que sur la carte" required>
            </div>
            <div class="payment_form__registration--container">
                <a href="#" id="payment_form_button">
                    <p class="payment-button">&#32;Payer&#32;</p>
                </a>
            </div>
        </form>
    `; // ajouter le lien sur le bouton de paiement

    // injection HTML
    insertForm.insertAdjacentHTML("afterbegin", formStructure);
}

// afficher le formulaire 
displayHtmlForm();

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

    const form = {
        nom: localStorage.getItem("nom"),
        prenom: localStorage.getItem("prenom"),
        email: localStorage.getItem("email"),
        telephone: localStorage.getItem("telephone"),
        adresse: localStorage.getItem("adresse"),
        codePostal: localStorage.getItem("codePostal"),
        ville: localStorage.getItem("ville"),
        pays: localStorage.getItem("pays")
    }
    console.log("form");
    console.log(form); // console log du formulaire

    // ajout des values du formulaire et les produits sélectionnés dans un objet à envoyer au serveur
    
    let localStorageRegisteredItem = JSON.parse(localStorage.getItem("product"));
    const toSend = {
        localStorageRegisteredItem,
        form
    }
    console.log(toSend);

})

