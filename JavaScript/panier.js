

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

        


    })
    .catch (function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
    });