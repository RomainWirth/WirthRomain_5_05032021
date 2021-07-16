// -----------------------------------------------------------------------------------------------------------------------------------------
// ------------ Start Fonction -------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------

// récupération des données du local storage à destination du panier
// définition de la variable permettant de convertir les données du format JSON au JS
let localStorageRegisteredItem = JSON.parse(localStorage.getItem("product"));
// JSON.parse permet de convertir les données du format JSON dans le local storage en objet JavaScript

// ====== TEST ==================================================================================
console.log("test n°13 : affichage des items récupérés du local storage");
console.log(localStorageRegisteredItem); // vérification qu'il n'y ait pas de clé dans le local storage : null
// == FIN TEST ==================================================================================


//  Affichage des produits du panier
// récupération de l'élément parent du panier
let newSelectedItemMainContainer = document.getElementById("Selection_Item_Container");

// ====== TEST ==================================================================================
console.log("test n°14 : affichage des éléments du DOM");
console.log(newSelectedItemMainContainer); // affiche la div id="Selection_Item_Container" et les éléments enfants injectés dans le DOM
// == FIN TEST ==================================================================================


// si le panier est vide 
if (localStorageRegisteredItem === null || localStorageRegisteredItem == 0) {

    // ====== TEST ==================================================================================
    console.log("test n°15.1 : affiche l'état du panier");
    console.log("panier vide");
    // == FIN TEST ==================================================================================

    let newEmptyBasket = document.createElement("div");
    newEmptyBasket.className = "selection__item--Empty_Basket";
    let newEmptyBasketTextNode = document.createTextNode("Votre panier est vide");
    newEmptyBasket.appendChild(newEmptyBasketTextNode);
    newSelectedItemMainContainer.appendChild(newEmptyBasket);

    // affichage de la div contenant les boutons pour accéder au formulaire de paiement et pour continuer les chats
    let elementDivPayment = document.getElementById("payment_continue");
    elementDivPayment.style.display = "none";

} 
// si le panier est rempli : afficher les produits dans le local storage
else {

    // ====== TEST ==================================================================================
    console.log("test n°15.2 : affiche l'état du panier"); // 10.2 remplace 10.1 selon l'état du panier
    console.log("panier rempli");
    // == FIN TEST ==================================================================================

    // ====== TEST ==================================================================================
    console.log("test n°16 : affichage du nombre d'items dans le tableau")
    console.log(localStorageRegisteredItem.length);
    // == FIN TEST ==================================================================================

    // boucle for pour ajouter les éléments enregistrés dans le localStorage : variable récupérée de la page product_sheet
    for (m = 0; m < localStorageRegisteredItem.length; m++) {

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
        let newSelectedItemTitleTextNode = document.createTextNode(localStorageRegisteredItem[m].itemName);
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

        // fonction de suppression des éléments de la ligne ============================================================================================
        
        // sélection de tous les boutons supprimer
        // déclaration de variable récupérant les données du localStorage key "product"
        // récupérer itemId de l'élément n du tableau localStorageRegisteredItem : localStorageRegisteredItem[n].itemId
        // pour cela : créer une boucle for qui identifie n selon la position n du bouton supprimer du tableau
        // déclaration de la variable correspondante à l'id de l'item à supprimer depuis le tableau contenant les items
        // utiliser splice pour supprimer l'élément n du tableau localStorageRegisteredItem
        // faire des contrôles console.log
        // retourner le tableau dans le localStorage
        // recharger automatiquement la page
                
        let btnSupprimer = document.querySelectorAll(".selection__item--suppress");

        // ====== TEST ==================================================================================
        console.log("test n° 17 : affiche tous les boutons \"supprimer\"");
        console.log(btnSupprimer); // NodeList créé dans la console
        // == FIN TEST ==================================================================================

        let currentOrder = JSON.parse(localStorage.getItem("product")); // déclaration de variable récupérant les données du localStorage key "product"
                    
        // ====== TEST ==================================================================================
        console.log("test n° 18 : affiche le tableau des éléments du localStorage avec la clé \"product\"");
        console.log(currentOrder); // retourne un array issu du localStorage
        // == FIN TEST ==================================================================================

        for (let n = 0; n < btnSupprimer.length; n++){
            btnSupprimer[n].addEventListener("click", function(event){
                event.preventDefault();
                let itemToDelete = localStorageRegisteredItem[n].itemId; // déclaration de la variable correspondante à l'id de l'item à supprimer
                console.log(itemToDelete); // retourne l'Id de l'item à supprimer
                if(currentOrder[n].itemId == itemToDelete){
                    currentOrder = localStorageRegisteredItem.splice([n], 1);
                    console.log(currentOrder); // retourne un tableau contenant l'élément à supprimer
                    console.log(localStorageRegisteredItem); // retourne un array avec l'élément en moins
                    localStorage.setItem("product", JSON.stringify(localStorageRegisteredItem)); // renvoie 
                    window.location.href = "panier.html"; // rechargement de la page
                }
            })
        } // fin fonction de suppression des éléments de la ligne ============================================================================================
    }
        
    // début calcul et affichage montant total du panier =====================================================================================================
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

    console.log("test n°19 : contrôle du prix de chaque item"); // intitulé du test dans la boucle for

    for (let k = 0; k < localStorageRegisteredItem.length; k++) {
        let itemPriceInBasket = localStorageRegisteredItem[k].itemPrice;
        let itemPriceInBasketNumber = parseFloat(itemPriceInBasket); // conversion string en number

        // ====== TEST ==================================================================================
        console.log(itemPriceInBasket); // contrôle des prix des items dans la console
        // == FIN TEST ==================================================================================

        totalPriceArray.push(itemPriceInBasketNumber);
        
    }

    // ====== TEST ==================================================================================
    console.log("test n°20 : contrôle du prix de chaque item");
    console.log(totalPriceArray); // contrôle des informations du tableau qui regroupe les valeurs de chaque item
    // == FIN TEST ==================================================================================

    // méthode reduce : applique une fct accumulatrice qui traite chaque valeur d'une liste pour la réduire à une seule valeur
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let totalPrice = totalPriceArray.reduce(reducer, 0);

    // ====== TEST ==================================================================================
    console.log("test n°21 : contrôle du calcul du montant total du panier");
    console.log(totalPrice); // contrôle du calcul
    // == FIN TEST ==================================================================================

    let totalPriceShown = totalPrice.toFixed(2);
    let newSelectedItemTotalPriceTextNode = document.createTextNode(totalPriceShown + " Euros");
    newSelectedItemTotalPrice.appendChild(newSelectedItemTotalPriceTextNode);

    // fin calcul et affichage montant total du panier =====================================================================================================


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
    });

    // ajout de l'élément au DOM
    newSelectedItemMainContainer.appendChild(newSelectedItemTotalPriceCont);
}

// -----------------------------------------------------------------------------------------------------------------------------------------
// -------------- End Fonction -------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------
