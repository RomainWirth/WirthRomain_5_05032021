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



    })
    .catch (function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
    });

// fin capture élément API Teddies page catalogue ****************************************************
