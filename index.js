// début capture élément API Teddies page catalogue **************************************************

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
        let i = 0;
            // fonction : rechercher l'élément i du tableau teddiesArray boucle for 
        

        // récupérer l'élément parent sur HTML
        let itemCatalogHTML = document.getElementById("catal");

        // déclarer les variables intégrant les éléments des tableaux
        let tedCataPicture = teddiesArray[i].imageURL; // "i is not defined" =================================================================================
        let tedCataName = teddiesArray[i].name;
        let tedCataTextNodeName = document.createTextNode(tedCataName);
            // travail du le prix
        let a = (teddiesArray[i].price)/100; // on convertis le prix de centimes en euros
        let b = a.toFixed(2); // y = prix fixé sur deux chiffres
        let tedCataTextNodePrice = document.createTextNode(b + " Euros");
        
        // générer les éléments HTML pour un item[i] : 
            // div principale : <div class="catalog__item">
        let newCataItem = document.createElement("div"); // ==> intégrer cet élément dans la boucle for ================================================
        newCataItem.className = "catalog__item";
            // photo : <div class="catalog__item--image_dimension", <a href> et <img>
            let newCataItemImgCont = document.createElement("div");
            newCataItemImgCont.className = "catalog__item--image_dimension";
            let newCataItemImgLink = document.createElement("a");
            newCataItemImgLink.setAttribute("href", "product_sheet.html?itemId=" + itemId); // créer une variable qui contient l'url + itemId
            let newCataItemImgUrl = document.createElement("img");
            newCataItemImgUrl.className = "pitem_image";
            newCataItemImgUrl.setAttribute("src", tedCataPicture);

            newCataItemImgCont.appendChild(newCataItemImgLink);
            newCataItemImgLink.appendChild(newCataItemImgUrl);

            // nom et prix : <div class="catalog__item--description", 
                // <a href> et <h2>
            let newCataItemDetails = document.createElement("div");
            newCataItemDetails.className = "catalog__item--description";
            
            let newCataItemNameLink = document.createElement("a");
            newCataItemNameLink.setAttribute("href", "product_sheet.html");
            let newCataItemName = document.createElement("h2");
            
            newCataItemDetails.appendChild(newCataItemNameLink);
            newCataItemNameLink.appendChild(newCataItemName);
            newCataItemName.appendChild(tedCataTextNodeName);

                // <a href> et <p>
            let newCataItemPriceLink = document.createElement("a");
            newCataItemPriceLink.setAttribute("href", "product_sheet.html");
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

        // => intégrer les éléments dans la div principale
            newCataItem.appendChild(newCataItemImgCont);
            newCataItem.appendChild(newCataItemDetails);
            newCataItem.appendChild(newItemCataBuyButtonCont);

            itemCatalogHTML.appendChild(newCataItem);
        // relier les éléments du tableau dans les divs correspondantes pour item[i]

        // dupliquer autant de fois la <div class"catalog__item"> qu'il y a d'élément parent dans le tableau


    })
    .catch (function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
    });

// fin capture élément API Teddies page catalogue ****************************************************
