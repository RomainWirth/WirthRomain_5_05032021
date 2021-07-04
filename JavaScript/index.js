// début fonction capture élément API Teddies page catalogue **************************************************

fetch("http://localhost:3000/api/teddies")
    .then (function(res) {
        if(res.ok) {
            return res.json()
        } else {
            console.log("erreur") // -> pas d'erreur au console.log
        }
    })
    .then (function(teddiesCatalogData) {
        console.log(teddiesCatalogData);
        
        // récupérer les éléments de teddiesCatalogData dans un tableau
        var teddiesArray = teddiesCatalogData;
                // teddiesArray contiens les données en tableau
        console.log(teddiesArray);
        
        // créer une fonction pour définir [i]
            // fonction : rechercher l'élément i du tableau teddiesArray boucle for 
        for (let i = 0; i < teddiesArray.length; i++) {

        var itemId = teddiesArray[i]._id;

        // définition de la page html de lien
        function goToProductSheet(itemId){
            var productSheetHTML = "product_sheet.html?itemId=" + itemId;
            window.location.href = productSheetHTML;
        }
        // récupérer l'élément parent sur HTML
        let itemCatalogHTML = document.getElementById("catal");

        // déclarer les variables intégrant les éléments des tableaux
        let tedCataPicture = teddiesArray[i].imageURL; 
        let tedCataName = teddiesArray[i].name;
        let tedCataTextNodeName = document.createTextNode(tedCataName);
            // travail du le prix
        let a = (teddiesArray[i].price)/100; // on convertis le prix de centimes en euros
        let b = a.toFixed(2); // b = prix fixé sur deux chiffres après la virgule
        let tedCataTextNodePrice = document.createTextNode(b + " Euros");
        
        // générer les éléments HTML pour un item[i] : 
            // div principale : <div class="catalog__item">
        let newCataItem = document.createElement("div"); 
        newCataItem.className = "catalog__item";
            // photo : <div class="catalog__item--image_dimension", <a href> et <img>
            let newCataItemImgCont = document.createElement("div");
            newCataItemImgCont.className = "catalog__item--image_dimension";
            let newCataItemImgLink = document.createElement("a");
            newCataItemImgLink.setAttribute("href", productSheetHTML);
            newCataItemImgLink.addEventListener("click", function(){goToProductSheet(itemId)});
            
            let newCataItemImgUrl = document.createElement("img");
            newCataItemImgUrl.className = "item_image";
            newCataItemImgUrl.setAttribute("src", tedCataPicture); // source image non définie ============================================= !!!!!!!!!!!!!

            newCataItemImgCont.appendChild(newCataItemImgLink);
            newCataItemImgLink.appendChild(newCataItemImgUrl);

            // nom et prix : <div class="catalog__item--description", 
                // <a href> et <h2>
            let newCataItemDetails = document.createElement("div");
            newCataItemDetails.className = "catalog__item--description";
            
            let newCataItemNameLink = document.createElement("a");
            newCataItemNameLink.setAttribute("href", productSheetHTML);
            newCataItemNameLink.addEventListener("click", function(){goToProductSheet(itemId)});
            let newCataItemName = document.createElement("h2");
            
            newCataItemDetails.appendChild(newCataItemNameLink);
            newCataItemNameLink.appendChild(newCataItemName);
            newCataItemName.appendChild(tedCataTextNodeName);

                // <a href> et <p>
            let newCataItemPriceLink = document.createElement("a");
            newCataItemPriceLink.setAttribute("href", productSheetHTML);
            newCataItemPriceLink.addEventListener("click", function(){goToProductSheet(itemId)});
            let newCataItemPrice = document.createElement("p");
            newCataItemPrice.appendChild(tedCataTextNodePrice);
                
            newCataItemDetails.appendChild(newCataItemPriceLink);
            newCataItemPriceLink.appendChild(newCataItemPrice);
            
            // bouton buy-now : <div class="catalog__item--buy_now", <a href> et <p>
            let newItemCataBuyButtonCont = document.createElement("div");
            newItemCataBuyButtonCont.className = "catalog__item--buy_now";
            let newItemCataBuyButtonLink = document.createElement("a");
            newItemCataBuyButtonLink.setAttribute("href", "panier.html");
            let newItemCataButtonBuyNow = document.createElement("p");
            newItemCataButtonBuyNow.className = "button-buy";
            let newItemCataTextNodeBuyNow = document.createTextNode("BUY NOW");

            newItemCataBuyButtonCont.appendChild(newItemCataBuyButtonLink);
            newItemCataBuyButtonLink.appendChild(newItemCataButtonBuyNow);
            newItemCataButtonBuyNow.appendChild(newItemCataTextNodeBuyNow);

            /* newItemCataButtonBuyNow.addEventListener("click", function(){
            selectProduct(itemName, itemId)
            });*/

        // => intégrer les éléments dans la div principale
            newCataItem.appendChild(newCataItemImgCont);
            newCataItem.appendChild(newCataItemDetails);
            newCataItem.appendChild(newItemCataBuyButtonCont);

            itemCatalogHTML.appendChild(newCataItem);
        // relier les éléments du tableau dans les divs correspondantes pour item[i]


        }
    })
    .catch (function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
    });

// fin fonction capture élément API Teddies page catalogue ****************************************************
