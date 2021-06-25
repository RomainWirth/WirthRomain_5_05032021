
// début définition des éléments HTML *************************************************
const affichageImage = document.querySelector("#itemImage");
const affichageName = document.querySelector("#itemName");
const affichageId = document.querySelector("#itemId");
const affichagePrice = document.querySelector("#itemPrice");

// vérification de la sélection des éléments HTML
console.log(affichageImage, affichageName, affichageId, affichagePrice); 

// fin définition des éléments HTML ***************************************************

// début capture élément API Teddies page catalogue **************************************************
const promise01 = fetch("http://localhost:3000/api/teddies")

promise01
    .then (response => {
        if (response.ok) {
            const teddiesData = response.json();
            console.log(teddiesData); // test affichage du tableau des teddies
            teddiesData.then((item) => {
                console.log(item[0]); // test sélection item 1

                const itemImage = item[0].imageUrl;
                const itemName = item[0].name;
                const itemId = item[0]._id;
                const itemPrice = item[0].price;

                console.log(itemImage, itemName, itemId, itemPrice); // test sélection des donnéees

                affichageImage.innerHTML = itemImage;
                affichageName.innerHTML = itemName;
                affichageId.innerHTML = itemId;
                affichagePrice.innerHTML = itemPrice;
            })
        } else {
            console.log('Mauvaise réponse du réseau');
        }
    })
    .catch (error => {
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
    });

// fin capture élément API Teddies page catalogue ****************************************************
