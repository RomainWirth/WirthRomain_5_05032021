

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





        let newSelectedItemContainer = getElementById("Selection_Item_Container");
        let newSelectedItemImgCont = document.createElement("div");
        newSelectedItemImgCont.className = "selection__item--image-mini";
        let newSelectedItemTitle = document.createElement("h3");
        newSelectedItemTitle.className = "selection__item--title";
        let newSelectedItemRef = document.createElement("p");
        newSelectedItemRef.className = "selection__item--ref";
        let newSelectedItemPrice = document.createElement("p");
        newSelectedItemPrice.className = "selection__item--price";

        newSelectedItemContainer.appendChild(newSelectedItemImgCont);
        newSelectedItemContainer.appendChild(newSelectedItemTitle);
        newSelectedItemContainer.appendChild(newSelectedItemRef);
        newSelectedItemContainer.appendChild(newSelectedItemPrice);


    })
    .catch (function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
    });