

fetch("http://localhost:3000/api/teddies")
    .then(function(res) {
        if(res.ok) {
            return res.json()
        } else {
            console.log("erreur") // -> pas d'erreur au console.log
        }
    })
    .then(function(selectedItemData){
        console.log(selectedItemData);

        // récupération des données du local storage à destination du panier
        // définition de la variable permettant de convertir les données du format JSON au JS
        let localStorageRegisteredItem = JSON.parse(localStorage.getItem("product"));
        // JSON.parse permet de convertir les données du format JSON dans le local storage en objet JavaScript
        console.log(localStorageRegisteredItem); // vérification qu'il n'y ait pas de clé dans le local storage : null
        
        //  Affichage des produits du panier
        // récupération de l'élément parent du panier
        let newSelectedItemMainContainer = document.getElementById("Selection_Item_Container");

        // si le panier est vide 
        if (localStorageRegisteredItem === null || localStorageRegisteredItem == 0) {
            console.log("panier vide");
            let newEmptyBasket = document.createElement("div");
            newEmptyBasket.className = "selection__item--Empty_Basket";
            let newEmptyBasketTextNode = document.createTextNode("Votre panier est vide");
            newEmptyBasket.appendChild(newEmptyBasketTextNode);
            newSelectedItemMainContainer.appendChild(newEmptyBasket);
        } 
        // si le panier est rempli : afficher les produits dans le local storage
        else {
            console.log("panier rempli");

        // boucle for pour ajouter les éléments enregistrés dans le localStorage : variable récupérée de la page product_sheet
            for (m = 0; m < localStorageRegisteredItem.length; m++) {
                console.log(localStorageRegisteredItem.length);

        // création des éléments enfants et insertion des données stockées dans le localStorage
            let newSelectedItemContainer = document.createElement("div");
            newSelectedItemContainer.className = "selection__item";
    
            let newSelectedItemImgCont = document.createElement("div");
            newSelectedItemImgCont.className = "selection__item--image-mini";
            let newSelectedItemImgUrl = document.createElement("img");
            newSelectedItemImgUrl.className = "basket_item_image";
            newSelectedItemImgUrl.setAttribute("src", localStorageRegisteredItem[m].itemImageUrl);
            newSelectedItemImgCont.appendChild(newSelectedItemImgUrl);
    
            let newSelectedItemTitle = document.createElement("h3");
            newSelectedItemTitle.className = "selection__item--title";
            newSelectedItemTitleTextNode = document.createTextNode(localStorageRegisteredItem[m].itemName);
            newSelectedItemTitle.appendChild(newSelectedItemTitleTextNode);
    
            let newSelectedItemRef = document.createElement("p");
            newSelectedItemRef.className = "selection__item--ref";
            let newSelectedItemRefTextNode = document.createTextNode(localStorageRegisteredItem[m].itemId);
            newSelectedItemRef.appendChild(newSelectedItemRefTextNode);
    
            let newSelectedItemOption = document.createElement("p");
            newSelectedItemOption.className = "selection__item--option";
            let newSelectedItemOptionTextNode = document.createTextNode(localStorageRegisteredItem[m].itemOption);
            newSelectedItemOption.appendChild(newSelectedItemOptionTextNode);
    
            let newSelectedItemPrice = document.createElement("p");
            newSelectedItemPrice.className = "selection__item--price";
            let newSelectedItemPriceTextNode = document.createTextNode(localStorageRegisteredItem[m].itemPrice + " Euros");
            newSelectedItemPrice.appendChild(newSelectedItemPriceTextNode);
                
            let newSelectedItemSuppressButton = document.createElement("button");
            newSelectedItemSuppressButton.setAttribute("type", "button");
            newSelectedItemSuppressButton.className = "selection__item--suppress";
            let newSelectedItemSuppressButtonTextNode = document.createTextNode("Supprimer");
            newSelectedItemSuppressButton.appendChild(newSelectedItemSuppressButtonTextNode);
                        
            // ajout des éléments enfants dans l'élément parent
            newSelectedItemMainContainer.appendChild(newSelectedItemContainer);
            newSelectedItemContainer.appendChild(newSelectedItemImgCont);
            newSelectedItemContainer.appendChild(newSelectedItemTitle);
            newSelectedItemContainer.appendChild(newSelectedItemRef);
            newSelectedItemContainer.appendChild(newSelectedItemOption);
            newSelectedItemContainer.appendChild(newSelectedItemPrice);
            newSelectedItemContainer.appendChild(newSelectedItemSuppressButton);
            }
            // sélection des ref de tous les boutons de suppression de ligne
            newSelectedItemSuppressButton = document.querySelectorAll(".selection__item--suppress");
            console.log(newSelectedItemSuppressButton); // affichage du bouton dans la console en tant que NodeList

            for(let n = 0; n <= newSelectedItemSuppressButton.length; n++){
                newSelectedItemSuppressButton[n].addEventListener("click", function(event) {
                    event.preventDefault();
                    console.log(event); 

                    // selection de l'id de l'item qui sera supprimé
                    let id_select_suppress = localStorageRegisteredItem[n].itemId;
                    console.log(id_select_suppress);

                    id
                    /*
                    // supprimer l'objet du tableau avec la méthode filter : sélection des élts à conserver et ceux ou le btn suppress a été cliqué
                    localStorageRegisteredItem = localStorageRegisteredItem.filter( el => el.itemId !== id_select_suppress);
                    console.log(localStorageRegisteredItem);

                    // envoyer la variable dans le local storage
                    localStorage.setItem("product", JSON.stringify(localStorageRegisteredItem));
                    */
                    // message d'alerte de suppression du produit + rechargement de la page
                    alert(`le produit ${localStorageRegisteredItem[n].itemName} a été supprimé du panier`);
                    window.location.href = "panier.html";

                })
            }
        }


        // ajout du total du panier 
        let newSelectedItemTotalPriceCont = document.createElement("div");
        newSelectedItemTotalPriceCont.className ="selection__total_price";
        let newSelectedItemTotal = document.createElement("p");
        let newSelectedItemTotalTextNode = document.createTextNode("Total :");
        newSelectedItemTotal.appendChild(newSelectedItemTotalTextNode);
        newSelectedItemTotalPriceCont.appendChild(newSelectedItemTotal);
        let newSelectedItemTotalPrice = document.createElement("p");
            //injecter fonction calculant le prix total du panier



        let newSelectedItemTotalPriceSuppressButton = document.createElement("button");
        newSelectedItemTotalPriceSuppressButton.setAttribute("type", "button");
        newSelectedItemTotalPriceSuppressButton.className = "selection__total_price--suppress";
        let newSelectedItemTotalPriceSuppressButtonTextNode = document.createTextNode("Vider Panier");
        newSelectedItemTotalPriceSuppressButton.appendChild(newSelectedItemTotalPriceSuppressButtonTextNode);
        newSelectedItemTotalPriceCont.appendChild(newSelectedItemTotalPriceSuppressButton);
        
        newSelectedItemMainContainer.appendChild(newSelectedItemTotalPriceCont);
    })
    .catch (function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
    });