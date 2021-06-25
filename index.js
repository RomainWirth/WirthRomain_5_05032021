fetch("http://localhost:3000/api/teddies")
    .then (function (response) {
        if (response.ok) {
            return response.json();
        } else {
            console.log('Mauvaise réponse du réseau');
        }
    })
    .then (json => console.log(json))
    .catch (function (error) {
        console.log('Il y a eu un problème avec l\'opération fetch : ' + error.message)
    });

