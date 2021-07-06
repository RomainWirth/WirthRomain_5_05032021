

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
        
        // récupération de l'élément parent du panier
        let newSelectedItemMainContainer = document.getElementById("Selection_Item_Container");
        // création des éléments enfants
        let newSelectedItemContainer = document.createElement("div");
        newSelectedItemContainer.className = "selection__item";
        let newSelectedItemImgCont = document.createElement("div");
        newSelectedItemImgCont.className = "selection__item--image-mini";
        let newSelectedItemTitle = document.createElement("h3");
        newSelectedItemTitle.className = "selection__item--title";
        let newSelectedItemRef = document.createElement("p");
        newSelectedItemRef.className = "selection__item--ref";
        let newSelectedItemOption = document.createElement("p");
        newSelectedItemOption.className = "selection__item--option";
        let newSelectedItemPrice = document.createElement("p");
        newSelectedItemPrice.className = "selection__item--price";
        // ajout des éléments enfants dans l'élément parent
        newSelectedItemMainContainer.appendChild(newSelectedItemContainer);
        newSelectedItemContainer.appendChild(newSelectedItemImgCont);
        newSelectedItemContainer.appendChild(newSelectedItemTitle);
        newSelectedItemContainer.appendChild(newSelectedItemRef);
        newSelectedItemContainer.appendChild(newSelectedItemOption);
        newSelectedItemContainer.appendChild(newSelectedItemPrice);

        // ajout du total du panier 
        let newSelectedItemTotalPriceCont = document.createElement("p");
        newSelectedItemTotalPrice.className ="selection__total-price";
            //injecter fonction calculant le prix total du panier

        

        newSelectedItemMainContainer.appendChild(newSelectedItemTotalPriceCont);
    })
    .catch (function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
    });