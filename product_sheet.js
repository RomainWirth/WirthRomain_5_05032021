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
            console.log("erreur")
        }
    })
    .then(function(teddiesData) {
        // console.log(teddiesData);

        // récupération de l'élément HTML <div id="intemInfo">
        let itemInfoHTML = getElementById("itemInfo");

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

        // création d'une div contenant l'image
        let newItemImage = document.createElement("div");
        newItemImage.className = "product_sheet__image";

            // création et insertion d'une balise image dans la div
        let newItemImageUrl = document.createElement("img");
        newItemImageUrl.className = "product_sheet__image--img";
        newItemImageUrl.setAttribute("src", itemImageUrl);
            // intégration de l'élement img dans la div class="product_sheet__image--img"
        newItemImage.appendChild(newItemImageUrl);

        // création d'une div contenant les éléments descriptifs de l'item
        let newItemDetails = document.createElement("div");
        newItemDetails.className = "product_sheet__details";

            // création et insertion des éléments enfants de la div 
                // premier élément : Name
        let newItemName = document.createElement("h2");
        newItemName.className = "product_sheet__details--name";
        newItemName.appendChild(itemTextNodeName);
        newItemDetails.appendChild(newItemName);

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
        let newItemColorsList = document.createElement("ul");
        newItemColorsList.className = "color_choices";

        let itemTextNodeColors = document.createTextNode("Couleurs disponibles");
        let newItemColorsH3 = document.createElement("h3");
        newItemColorsH3.appendChild(itemTextNodeColors);
        
                //créer une fonction pour pouvoir modifier le choix des couleurs selon le tableau


        // création du bouton d'achat 
        let newItemInfoButton = document.createElement("div");
        newItemInfoButton.className = "product_sheet__details--buy-now";
        let newItemInfoButton = document.createElement("a");





        // intégration des divs dans l'élément parent
        newItemInfoHTML.appendChild(newItemImage);
        
        newItemInfoHTML.appendChild(newItemDetails);

    })
    .catch(function(err) {
        console.log('Il y a eu un problème avec l\'opération fetch : ' + err.message)
    });
}

// -----------------------------------------------------------------------------------------------------------------------------------------
// -------------- End Fonction -------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------

