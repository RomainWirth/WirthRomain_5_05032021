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
            console.log("erreur") // -> pas d'erreur au console.log
        }
    })
    .then(function(teddiesData) {
        console.log(teddiesData);

// récupération de l'élément HTML <div id="intemInfo">
        let itemInfoHTML = document.getElementById("itemInfo");

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
        let y = x.toFixed(2); // y = prix fixé sur deux chiffres
        let itemTextNodePrice = document.createTextNode(y + " Euros"); // conversion d'un nombre vers number + string

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
        newColorChoicesSelection.id = "color_choices_selection"; // ATTENTION REVOIR CETTE SYNTAXE JE NE SAIS PAS SI C'EST CORRECT---------------
        newItemColors.appendChild(newColorChoicesForm);
        newColorChoicesForm.appendChild(newColorChoicesSelection);
            //création d'une fonction pour pouvoir modifier le choix des couleurs selon le tableau
        var options = itemColors;
        
        for (var i = 0; i < options.length; i++) {
            var opt = options[i];
            var el = document.createElement("option");
            el.value = opt;
            el.textContent = opt;
            newColorChoicesSelection.appendChild(el);
        } // VERIFIER LA SYNTAXE SI CORRECTE -----------------------------------------------------------------------------------------------------------

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
        // créer un adventListener au click et référer à la fonction ci-dessus
       /* newItemInfoBuyButton.addEventListener("click", function(){
            selectProduct(itemName, itemId)
        });*/ // fonction à vérifier---------------------------------------------------------------------------------------------------------


        // intégration des divs dans l'élément parent
        itemInfoHTML.appendChild(newItemImage);
        
        itemInfoHTML.appendChild(newItemDetails);

    })
    .catch(function(err) {
        console.log('Il y a eu un problème avec l\'opération fetch : ' + err.message)
    });
}

// -----------------------------------------------------------------------------------------------------------------------------------------
// -------------- End Fonction -------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------

// appel de la fonction pour la tester sur la page test
createProductSheet("5be9c8541c9d440000665243");