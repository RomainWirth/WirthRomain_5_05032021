// -----------------------------------------------------------------------------------------------------------------------------------------
// ------------ Start Fonction -------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------

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
                newSelectedItemContainer.id = localStorageRegisteredItem[m].itemId; // pas forcément utile
    
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

                // cette fonction ne fonctionne pas correctement : à retravailler ======================================================================================           
                // fonction de suppression des éléments de la ligne
                console.log(localStorageRegisteredItem);
                // retourne un tableau avec n élements : [0:{object dont itemId}, 1:{object dont itemId}, n:{object dont itemId}]
                
                // sélection de tous les boutons supprimer
                // récupérer itemId de l'élément n du tableau localStorageRegisteredItem : localStorageRegisteredItem[n].itemId
                // pour cela : créer une boucle for qui identifie n selon la position n du bouton supprimer du tableau
                // utiliser splice pour supprimer l'élément n du tableau localStorageRegisteredItem
                // retourner le tableau dans le localStorage
                // recharger automatiquement la page
                // terminer la boucle avec break
                
                let btnSupprimer = document.querySelectorAll(".selection__item--suppress");
                console.log(btnSupprimer); // NodeList créé dans la console
                for (let n = 0; n < btnSupprimer.length; n++){
                    btnSupprimer[n].addEventListener("click", function(event){
                        event.preventDefault();
                        let itemToDelete = localStorageRegisteredItem[n].itemId; // déclaration de la variable correspondante à l'id de l'item à supprimer
                        console.log(itemToDelete); // retourne l'Id de l'item à supprimer
                        let currentOrder = JSON.parse(localStorage.getItem("product"));
                        console.log(currentOrder); // retourne un array issu du localStorage
                        if(currentOrder){
                            if(currentOrder[n].itemId == itemToDelete){
                                currentOrder = localStorageRegisteredItem.splice([n], 1);
                                console.log(currentOrder); // retourne un tableau contenant l'élément à supprimer
                                console.log(localStorageRegisteredItem); // retourne un array avec l'élément en moins
                                // var removalSuccess = true;
                                // console.log(removalSuccess);
                                localStorage.setItem("product", JSON.stringify(localStorageRegisteredItem));
                                window.location.href = "panier.html"; // rechargement de la page
                                // break;
                            }
                        }
                    })
                }
            
                /*    newSelectedItemSuppressButton.addEventListener("click", function(event){
                    event.preventDefault();
                    for(n = 0; n < btnSupprimerArray.length; n++){
                        var itemToDelete = localStorageRegisteredItem[n].itemId;
                        if(btnSupprimerArray[n] == itemToDelete){
                            var elementSuppress = localStorageRegisteredItem.splice(n, 1);
                            console.log(elementSuppress);
                            console.log(localStorageRegisteredItem);
                            localStorage.setItem("product", JSON.stringify(localStorageRegisteredItem)); // suppression de l'item du local storage
                            window.location.href = "panier.html"; // rechargement de la page
                            break;
                        }
                    }
                }) */



                /*
                newSelectedItemSuppressButton.addEventListener("click", function(event){
                    event.preventDefault();
                    var itemToDelete = localStorageRegisteredItem.itemId; // il manque la position de l'élément parent de l'itemId
                    var currentOrder = JSON.parse(localStorage.getItem("product"));
                    console.log(currentOrder);
                    if(currentOrder){
                        for(n = 0; n < currentOrder.length; n++){
                            if(currentOrder[n].itemId == itemToDelete){
                                delete currentOrder[n];
                                var removalSuccess = true;
                                console.log(removalSuccess);
                                localStorage.setItem("product", JSON.stringify(localStorageRegisteredItem));
                                break;
                            }
                        }
                    }
                }) 
                */
                /*
                // problème : cette fonction enlève uniquement le premier de la liste
                newSelectedItemSuppressButton.addEventListener("click", function(event){
                    event.preventDefault();
                    for (n = 0; n < localStorageRegisteredItem.length; n++) {
                        var elementSuppress = localStorageRegisteredItem.splice(n, 1);
                        console.log(elementSuppress);
                        console.log(localStorageRegisteredItem);
                        // localStorage.setItem("product", JSON.stringify(localStorageRegisteredItem)); // suppression de l'item du local storage
                        // window.location.href = "panier.html"; // rechargement de la page
                        break;
                    }
                })
                */
            }
        
            // ajout du total du panier 
            let newSelectedItemTotalPriceCont = document.createElement("div");
            newSelectedItemTotalPriceCont.className ="selection__total_price";
            let newSelectedItemTotal = document.createElement("p");
            let newSelectedItemTotalTextNode = document.createTextNode("Total :");
            newSelectedItemTotal.appendChild(newSelectedItemTotalTextNode);
            newSelectedItemTotalPriceCont.appendChild(newSelectedItemTotal);
            let newSelectedItemTotalPrice = document.createElement("p");
            newSelectedItemTotalPriceCont.appendChild(newSelectedItemTotalPrice);
            //injecter fonction calculant le prix total du panier
            // création d'une variable avec un array vide 
            let totalPriceArray = [];

            for (let k = 0; k < localStorageRegisteredItem.length; k++) {
                let itemPriceInBasket = localStorageRegisteredItem[k].itemPrice;
                let itemPriceInBasketNumber = parseFloat(itemPriceInBasket); // conversion string en number
                console.log(itemPriceInBasket); // contrôle des prix des items dans la console

                totalPriceArray.push(itemPriceInBasketNumber);
                console.log(totalPriceArray); // contrôle des informations du tableau
            }

            let reducer = (accumulator, currentValue) => accumulator + currentValue;
            let totalPrice = totalPriceArray.reduce(reducer, 0);
            let totalPriceShown = totalPrice.toFixed(2);
            console.log(totalPrice); // contrôle du calcul


            let newSelectedItemTotalPriceTextNode = document.createTextNode(totalPriceShown + " Euros");
            newSelectedItemTotalPrice.appendChild(newSelectedItemTotalPriceTextNode);

            // bouton pour vider entièrement le panier
            let newSelectedItemTotalPriceSuppressButton = document.createElement("button");
            newSelectedItemTotalPriceSuppressButton.setAttribute("type", "button");
            newSelectedItemTotalPriceSuppressButton.className = "selection__total_price--suppress";
            let newSelectedItemTotalPriceSuppressButtonTextNode = document.createTextNode("Vider Panier");
            newSelectedItemTotalPriceSuppressButton.appendChild(newSelectedItemTotalPriceSuppressButtonTextNode);
            newSelectedItemTotalPriceCont.appendChild(newSelectedItemTotalPriceSuppressButton);
            
            newSelectedItemTotalPriceSuppressButton.addEventListener("click", function(e){
                e.preventDefault();

                localStorage.removeItem("product");
                alert("Votre panier a été vidé");
                window.location.href = "panier.html";
            })

            newSelectedItemMainContainer.appendChild(newSelectedItemTotalPriceCont);
        }
    })
    .catch (function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
    });

// -----------------------------------------------------------------------------------------------------------------------------------------
// -------------- End Fonction -------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
