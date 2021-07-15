// -----------------------------------------------------------------------------------------------------------------------------------------
// ------------ Start Fonction -------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------

function createProductSheet(itemId) {

let createProductSheetUrl = "http://localhost:3000/api/teddies" + "/" + itemId;
// let createProductSheetUrl = "http://localhost:3000/api/teddies/5be9c8541c9d440000665243";

fetch(createProductSheetUrl) // fetch sur tous les éléments de l'objet : teddie 0 à 4
    .then(function(res) {
        if(res.ok) {
            return res.json()
        } else {
            console.log("test d'erreur :")
            console.log("erreur") // si affiché dans la console : erreur présente
        }
    })
    .then(function(teddiesData) {

        // ====== TEST ==================================================================================
        console.log("test n°5 : vérification des données de l'API teddies pour le produit affiché")
        console.log(teddiesData);
        // == FIN TEST ==================================================================================

        // récupération des infos de l'objet teddies et déclaration en variables :
        let itemImageUrl = teddiesData.imageUrl;
        let itemName = teddiesData.name;
        let itemTextNodeName = document.createTextNode(itemName);
        let itemId = teddiesData._id;
        let itemTextNodeId = document.createTextNode(itemId);
        let itemTextNodeDescription = document.createTextNode(teddiesData.description); // ajout du texte de description dans la variable
        let itemColors = teddiesData.colors;        
        // travail sur le prix en centimes
        let x = (teddiesData.price)/100; // on convertis le prix de centimes en euros
        let y = x.toFixed(2); // y = prix fixé sur deux chiffres après la virgule

        // ====== TEST ==================================================================================
        console.log("test n°6 : vérification de la manipulation du prix de l'item");
        console.log("prix = " + y);
        // == FIN TEST ==================================================================================

        let itemTextNodePrice = document.createTextNode(y + " Euros"); // conversion d'un nombre vers number + string

        // récupération de l'élément HTML <div id="intemInfo">
        let itemInfoHTML = document.getElementById("itemInfo");

        // ====== TEST ==================================================================================
        console.log("test n°7 : vérification des élément sélectionnés du DOM");
        console.log(itemInfoHTML); // élément <DIV id="itemInfo"> et éléments enfants doivent apparaître dans la console
        // == FIN TEST ==================================================================================

        // création d'une div contenant l'image avec nom de class "product_sheet__image"
        let newItemImage = document.createElement("div");
        newItemImage.className = "product_sheet__image";

        // création et insertion d'une balise image dans la div
        let newItemImageUrl = document.createElement("img");
        newItemImageUrl.className = "product_sheet__image--img";
        newItemImageUrl.setAttribute("src", itemImageUrl);
        // intégration de l'élement img dans la div class="product_sheet__image--img"
        newItemImage.appendChild(newItemImageUrl);
        
        // création d'une div contenant les éléments descriptifs de l'item avec nom de class "product_sheet__details"
        let newItemDetails = document.createElement("div");
        newItemDetails.className = "product_sheet__details";

        // création et insertion des éléments enfants de la div 
        // premier élément : Name
        let newItemName = document.createElement("h2"); // variable newItemName = création de l'élément h2
        newItemName.className = "product_sheet__details--name"; //avec nom de class "product_sheet__details--name"
        newItemName.appendChild(itemTextNodeName); // intégration du nom en texte à l'intérieur de la balise h2
        newItemDetails.appendChild(newItemName); // intégration de la balise h2 dans la div class="product_sheet__details"

        // deuxième élément : Price
        let newItemPrice = document.createElement("p");
        newItemPrice.className = "product_sheet__details--price";
        newItemPrice.appendChild(itemTextNodePrice);
        newItemDetails.appendChild(newItemPrice);

        // troisième élément : Id
        let newItemId = document.createElement("p");
        newItemId.className = "product_sheet__destails--id ref";
        newItemId.appendChild(itemTextNodeId);
        newItemDetails.appendChild(newItemId);

        // quatrième élément : description
        let newItemDescription = document.createElement("p");
        newItemDescription.className = "product_sheet__details--description";
        newItemDescription.appendChild(itemTextNodeDescription);
        newItemDetails.appendChild(newItemDescription);

        // cinquième élément : colors choice
        let newItemColors = document.createElement("p");
        newItemColors.className = "product_sheet__details--colors";
        newItemDetails.appendChild(newItemColors);
        let itemTextNodeColors = document.createTextNode("Couleurs disponibles");
        let newItemColorsH3 = document.createElement("h3");
        newItemColorsH3.appendChild(itemTextNodeColors);
        newItemColors.appendChild(newItemColorsH3);
            // création de la liste déroulante à choix des couleurs
        let newColorChoicesForm = document.createElement("form");
        newColorChoicesForm.className = "color_choices_form";
        let newColorChoicesSelection = document.createElement("select");
        newColorChoicesSelection.id = "color_choices_selection"; 
        newItemColors.appendChild(newColorChoicesForm);
        newColorChoicesForm.appendChild(newColorChoicesSelection);
            //création d'une fonction pour pouvoir modifier le choix des couleurs selon le tableau
        var options = itemColors;
        

        // ====== TEST ==================================================================================
        console.log("test n°8 : vérification des informations \"options\" dispo et taille du tableau")
        console.log(options); // affichage des informations du tableau options
        console.log("length = " + options.length); // vérification de la taille du tableau itemColors 
        // == FIN TEST ==================================================================================


        for (var i = 0; i < options.length; i++) {
            var opt = options[i];
            var el = document.createElement("option");
            el.value = opt;
            el.textContent = opt;
            newColorChoicesSelection.appendChild(el);
        } 

        // création du bouton d'achat 
        let newItemInfoBuyButtonContainer = document.createElement("div");
        newItemInfoBuyButtonContainer.className = "product_sheet__details--buy-now";
        let newItemInfoBuyButton = document.createElement("a");
        newItemInfoBuyButton.setAttribute("href", "panier.html");
        let newItemInfoBuyNowButton = document.createElement("p");
        newItemInfoBuyNowButton.className = "button-buy";
        let newTextNodeBuyNowButton = document.createTextNode("BUY NOW");
        
        newItemInfoBuyNowButton.appendChild(newTextNodeBuyNowButton);
        newItemInfoBuyButton.appendChild(newItemInfoBuyNowButton);
        newItemInfoBuyButtonContainer.appendChild(newItemInfoBuyButton);
        newItemDetails.appendChild(newItemInfoBuyButtonContainer);

        // intégration des divs dans l'élément parent
        itemInfoHTML.appendChild(newItemImage);        
        itemInfoHTML.appendChild(newItemDetails);

        // Gestion du panier --------------------------------------------------------------------------------------
        // récupération des données sélectionnées par l'utilisateur et envoi du panier

        // ====== TEST ==================================================================================
        console.log("test n°9 : vérification de la sélection du bon élément du DOM")
        console.log(newItemInfoBuyButton); // doit afficher <a href=panier.html> dans la console
        // == FIN TEST ==================================================================================

        // créer un adventListener au click et pour stocker les données et les envoyer à la page panier
        newItemInfoBuyButton.addEventListener("click", function(event){
            event.preventDefault(); // permet d'empêcher la page de se réactualiser au clic

            // Option choisie par l'utilisateur dans une variable
            const formChoice = newColorChoicesSelection.value;

            // Récupération des valeurs à envoyer au panier :
            let optionsItem = { // définition de la variable contenant un objet avec les valeurs qu'on veut intégrer au panier
                itemImageUrl: teddiesData.imageUrl,
                itemName: teddiesData.name,
                itemId: teddiesData._id,
                itemOption: formChoice,
                itemPrice: y
            }
           
            // ====== TEST ==================================================================================
            console.log("les tests suivants n'apparaîssent à la console que lorsque la fenêtre de conf apparaît ou si on neutralise les lignes 182 à 193")
            console.log("test n°10 : vérification des données introduite dans la page HTML");
            console.log(optionsItem); // vérification des données dans la console
            // == FIN TEST ==================================================================================

            // local storage -------------------------------------------------------------------------------------------
            // stocker la récupération des données sélectionner dans le local storage ----------------------------------
            // un tableau de données sera créé par click ---------------------------------------------------------------
            // définition de la variable permettant de convertir les données du format JSON au format JS
            let localStorageRegisteredItem = JSON.parse(localStorage.getItem("product"));
            // JSON.parse permet de convertir les données du format JSON dans le local storage en objet JavaScript

            // fonction fenêtre pop up de confirmation 
            const popUpConf = function(){ // window.confirm ouvre une fenêtre popup proposant de continuer ses achats ou de se diriger vers le panier
                if(window.confirm(`Le produit ${teddiesData.name}, couleur : ${formChoice}
a bien été ajouté au panier.
Consulter le panier : cliquer sur OK 
ou 
continuer ses achats : cliquer sur ANNULER`)) {
                    window.location.href = "panier.html"; // lien vers la page panier
                } else {
                    window.location.href = "index.html"; // lient vers la page catalogue
                }
            } 

            // fonction d'ajout d'item dans le localStorage
            const addItemLocalStorage = function() {
                // ajout dans le tableau de l'objet avec des values choisies par l'utilisateur
                localStorageRegisteredItem.push(optionsItem); 
                // transformation des valeurs JS en chaîne JSON pour envoyer dans le local Storage avec la key "product"
                localStorage.setItem("product", JSON.stringify(localStorageRegisteredItem)); 
            }

        // s'il y a des produits enregistrés dans le local storage
            if(localStorageRegisteredItem){
                addItemLocalStorage(); // appel de la fonction d'ajout d'item dans le local storage

                // ====== TEST ==================================================================================            
                console.log("test n°11 : vérification des données présentes dans le local storage")
                console.log(localStorageRegisteredItem); // vérification des données dans la console
                // == FIN TEST ==================================================================================

                popUpConf(); // appel de la fonction de fenêtre popup de confirmation
            } 
        // s'il n'y a pas de produits enregistrés dans le local storage
            else {
                localStorageRegisteredItem = []; // création d'un tableau vide pour le remplir avec les données d'achat
                addItemLocalStorage(); // appel de la fonction d'ajout d'item dans le local storage
                popUpConf(); // appel de la fonction de fenêtre popup de confirmation
            }
        });
    })
    .catch(function(err) {

        // ====== TEST ==================================================================================
        console.log("test d'erreur :")
        console.log('Il y a eu un problème avec l\'opération fetch : ' + err.message) // si affiché dans la console : erreur présente
        // == FIN TEST ==================================================================================

    });
}

// -----------------------------------------------------------------------------------------------------------------------------------------
// -------------- End Fonction -------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------

// appel de la fonction pour l'affichage sur la page HTML en dynamique
// id de l'item sera fourni par l'url ======================================================================================================
var queryString = window.location.search;
// console.log(queryString); // ?itemId=5be9c8541c9d440000665243
var urlParams = new URLSearchParams(queryString);
var itemId = urlParams.get ("itemId");

// ====== TEST ==================================================================================
console.log("test n°12 : affichage de l'itemId")
console.log("itemId = " + itemId); // affichage console doit correspondre à l'affichage sur la fiche produit
// == FIN TEST ==================================================================================


createProductSheet(itemId); 