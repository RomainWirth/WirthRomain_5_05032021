// début fetch : capture élément API Teddies page catalogue **************************************************
fetch("http://localhost:3000/api/teddies")
    .then (function(res) {
        if(res.ok) {
            return res.json()
        } else {

            // ====== TEST ==================================================================================
            console.log("test d'erreur : vérification si une erreur à lieu") // si affiché dans la console : erreur présente
            console.log("erreur") // -> pas d'affichage de "erreur" au console.log = promesse OK
            // == FIN TEST ==================================================================================

        }
    })
    .then (function(teddiesCatalogData) {       
        // récupérer les éléments de teddiesCatalogData dans un tableau
        
        // ====== TEST ==================================================================================
        console.log("test n°1 : vérification des données de teddiesCatalogData");
        console.log(teddiesCatalogData); // teddiesCatalogData contiens les données en tableau
        // == FIN TEST ==================================================================================
        
        // créer une fonction pour définir [i]
        // ---- DEBUT BOUCLE FOR : rechercher l'élément i du tableau teddiesCatalogData boucle for 
        console.log("les tests suivants intégrés dans la boucle vont se répéter autant de fois qu'il y a d'items dans l'API à afficher")
        for (let i = 0; i < teddiesCatalogData.length; i++) { 

            var itemId = teddiesCatalogData[i]._id;

            // définition de la page html de lien
            function goToProductSheet(itemId){
                var productSheetHTML = "product_sheet.html?itemId=" + itemId;
                window.location.href = productSheetHTML;
            }

            // DEBUT intégration des éléments dans le DOM ========================================
            // récupération de l'élément parent sur HTML
            let itemCatalogHTML = document.getElementById("catal");

            // ====== TEST ==================================================================================
            console.log("test n°2 : vérification de l'élément du DOM sélectionné = div id=\"catal\"");
            console.log(itemCatalogHTML); // balise <div id="catal"> et les éléments enfants du DOM doivent apparaître dans la console
            // == FIN TEST ==================================================================================
            
            // déclaration des variables intégrant les éléments de tableaux
            var itemId = teddiesCatalogData[i]._id;
            let tedCataPicture = teddiesCatalogData[i].imageUrl; 
            let tedCataName = teddiesCatalogData[i].name;
            let tedCataTextNodeName = document.createTextNode(tedCataName);

            // ====== TEST ==================================================================================
            console.log("test n°3 : affichage des noms des items");
            console.log(tedCataName); // le nom des articles doivent apparaître dans lea console
            // == FIN TEST ==================================================================================

            // travail du le prix
            let a = (teddiesCatalogData[i].price)/100; // on convertis le prix de centimes en euros
            let b = a.toFixed(2); // b = prix fixé sur deux chiffres après la virgule
            let tedCataTextNodePrice = document.createTextNode(b + " Euros");

            // ====== TEST ==================================================================================
            console.log("test n°4 : vérification de la variable des données de prix avant intégration")
            console.log(tedCataTextNodePrice); // le prix à afficher doit apparaître dans la console
            // == FIN TEST ==================================================================================

            // générer les éléments HTML pour un item[i] : 
            // div principale : <div class="catalog__item">
            let newCataItem = document.createElement("div"); 
            newCataItem.className = "catalog__item";
            // photo : <div class="catalog__item--image_dimension", <a href> et <img>
            let newCataItemImgCont = document.createElement("div");
            newCataItemImgCont.className = "catalog__item--image_dimension";
            let newCataItemImgLink = document.createElement("a");
            newCataItemImgLink.setAttribute("href", "product_sheet.html?itemId=" + itemId);
            newCataItemImgLink.addEventListener("click", function(){goToProductSheet(itemId)});

            let newCataItemImgUrl = document.createElement("img");
            newCataItemImgUrl.className = "item_image";
            newCataItemImgUrl.setAttribute("src", tedCataPicture);

            newCataItemImgCont.appendChild(newCataItemImgLink);
            newCataItemImgLink.appendChild(newCataItemImgUrl);

            // nom et prix : <div class="catalog__item--description", 
                // <a href> et <h2>
            let newCataItemDetails = document.createElement("div");
            newCataItemDetails.className = "catalog__item--description";
            
            let newCataItemNameLink = document.createElement("a");
            newCataItemNameLink.setAttribute("href", "product_sheet.html?itemId=" + itemId);
            newCataItemNameLink.addEventListener("click", function(){goToProductSheet(itemId)});
            let newCataItemName = document.createElement("h2");
            
            newCataItemDetails.appendChild(newCataItemNameLink);
            newCataItemNameLink.appendChild(newCataItemName);
            newCataItemName.appendChild(tedCataTextNodeName);

                // <a href> et <p>
            let newCataItemPriceLink = document.createElement("a");
            newCataItemPriceLink.setAttribute("href", "product_sheet.html?itemId=" + itemId);
            newCataItemPriceLink.addEventListener("click", function(){goToProductSheet(itemId)});
            let newCataItemPrice = document.createElement("p");
            newCataItemPrice.appendChild(tedCataTextNodePrice);
                
            newCataItemDetails.appendChild(newCataItemPriceLink);
            newCataItemPriceLink.appendChild(newCataItemPrice);
            
            // bouton buy-now : <div class="catalog__item--buy_now", <a href> et <p>
            let newItemCataBuyButtonCont = document.createElement("div");
            newItemCataBuyButtonCont.className = "catalog__item--buy_now";
            let newItemCataBuyButtonLink = document.createElement("a");
            newItemCataBuyButtonLink.setAttribute("href", "product_sheet.html?itemId=" + itemId);
            let newItemCataButtonBuyNow = document.createElement("p");
            newItemCataButtonBuyNow.className = "button-buy";
            let newItemCataTextNodeBuyNow = document.createTextNode("BUY NOW");

            newItemCataBuyButtonCont.appendChild(newItemCataBuyButtonLink);
            newItemCataBuyButtonLink.appendChild(newItemCataButtonBuyNow);
            newItemCataButtonBuyNow.appendChild(newItemCataTextNodeBuyNow);
            
            // créer un adventListener au click et pour stocker les données et les envoyer à la page panier
            // newItemCataButtonBuyNow.addEventListener("click", function(){
                // selectProduct(itemCataPicture, itemCataName, itemId)
            // });

            // => intégrer les éléments dans la div principale
            newCataItem.appendChild(newCataItemImgCont);
            newCataItem.appendChild(newCataItemDetails);
            newCataItem.appendChild(newItemCataBuyButtonCont);

            itemCatalogHTML.appendChild(newCataItem);
            // FIN intégration des éléments dans le DOM ============================================

        } // ------------ FIN DE BOUCLE FOR --------------------------------------------------------
    }) // =============== FIN DE .then =============================================================
    .catch (function(error) {

        // ====== TEST ==================================================================================
        // si affiché dans la console : erreur présente
        console.log("test d'erreur :")
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message) // le message d'erreur n'apparaît pas = pas d'erreur
        // == FIN TEST ==================================================================================

    });

// fin fetch : capture élément API Teddies page catalogue *****************************************
