
const displayHtmlForm = function() {
    // sélection élément du dom pour insertion du formulaire
    const insertForm = document.getElementById("payment_form_container");

    const formStructure =`
        <h2>Mes informations</h2>
        <form class="payment_form__registration">
            <div class="payment_form__registration--container">
                <h3>Votre identité</h3>
                <label for=nom>Nom</label>
                <input id=nom name=nom type=text placeholder="Prénom et NOM" required autofocus>
                <label for=email>Email</label>
                <input id=email name=email type=email placeholder="exemple@domaine.com" required>
                <label for=telephone>Téléphone</label>
                <input id=telephone name=telephone type=tel placeholder="par ex&nbsp;: +3375500000000" required>
            </div>
            <div class="payment_form__registration--container">
                <h3>Adresse de livraison</h3>
                <label for=adresse>Adresse</label>
                <input id=adresse name=adresse rows=5 required></textarea>
                <label for=codepostal>Code postal</label>
                <input id=codepostal name=codepostal type=text required>
                <label for=pays>Pays</label>
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
                <a href="confirmation.html">
                    <p class="payment-button">&#32;Payer&#32;</p>
                </a>
            </div>
        </form>
    `;

    // injection HTML
    insertForm.insertAdjacentHTML("afterbegin", formStructure);
}

// afficher le formulaire 
displayHtmlForm();