// début définition des éléments HTML *************************************************
var affichageImage = document.querySelector("#itemImage");
var affichageName = document.querySelector("#itemName");
var affichageId = document.querySelector("#itemId");
var affichagePrice = document.querySelector("#itemPrice");

// vérification de la sélection des éléments HTML
console.log(affichageImage, affichageName, affichageId, affichagePrice); 

// fin définition des éléments HTML ***************************************************

// début capture élément API Teddies page catalogue **************************************************

fetch("http://localhost:3000/api/teddies")
    .then (function(response) {response.json();})
    .then (function(response) {
        // console.log(json);
        let teddiesData = response.json();
        // console.log(teddiesData); // test affichage du tableau des teddies
        teddiesData.then(function(item) {
        // console.log(item[0]); // test sélection item 1

        let itemImage = item[0].imageUrl;
        let itemName = item[0].name;
        let itemId = item[0]._id;
        let itemPrice = item[0].price;

        // console.log(itemImage, itemName, itemId, itemPrice); // test sélection des donnéees

        affichageImage.innerHTML = itemImage;
        affichageName.innerHTML = itemName;
        affichageId.innerHTML = itemId;
        affichagePrice.innerHTML = itemPrice;
        })
    }) //
    .catch (function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
    });

// fin capture élément API Teddies page catalogue ****************************************************
