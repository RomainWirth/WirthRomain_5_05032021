// début capture élément API Teddies page catalogue **************************************************

fetch("http://localhost:3000/api/teddies")
    .then (function(res) {
        if(res.ok) {
            return res.json()
        } else {
            console.log("erreur") // -> pas d'erreur au console.log
        }
    })
    .then (function(res) {
        console.log(res);
        
        // récupérer les éléments de teddiesData dans un tableau

        // générer les éléments HTML pour un item[i] : 
            // div principale : <div class="catalog__item">
            // photo : <div class="catalog__item--image_dimension", <a href> et <img>
            // nom et prix : <div class="catalog__item--description", <a href> et <h2>, <a href> et <p>
            // bouton buy-now : <div class="catalog__item--buy_now", <a href> et <p>
        
        // => intégrer les éléments dans la div principale

        // relier les éléments du tableau dans les divs correspondantes pour item[i]

        // dupliquer autant de fois la <div class"catalog__item"> qu'il y a d'élément parent dans le tableau


    })
    .catch (function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
    });

// fin capture élément API Teddies page catalogue ****************************************************
