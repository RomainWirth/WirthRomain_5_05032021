
// récupération de l'élément parent
let confirmationContainer = document.getElementById("confirmation");

// création du premier élément enfant : titre
let newConfirmationMessage = document.createElement("h2");
newConfirmationMessage.className = "confirmation_container__title";
let newConfirmationMessageTextNode = document.createTextNode("Merci pour votre achat !");
newConfirmationMessage.appendChild(newConfirmationMessageTextNode);

// création du deuxième élément enfant : identification de l'utilisateur
let newConfirmationUserContainer = document.createElement("p");
newConfirmationUserContainer.className = "confirmation_container__id_user";
let newConfirmationUserContainerIdUser = document.createElement("span");
newConfirmationUserContainerIdUser.id = "user_id";
newConfirmationUserContainer.appendChild(newConfirmationUserContainerIdUser);

// création du troisième élément enfant : numéro de confirmation
let newConfirmationNumberContainer = document.createElement("p");
newConfirmationNumberContainer.className = "confirmation_container__conf_number";
let newConfirmationNumberContainerTextNode = document.createTextNode("Nous avons le plaisir de vous confirmer votre commande N° :");
let newConfirmationNumberContainerConfNumber = document.createElement("span");
newConfirmationNumberContainerConfNumber.id = "confirmation_number";
newConfirmationNumberContainer.appendChild(newConfirmationNumberContainerTextNode);
newConfirmationNumberContainer.appendChild(newConfirmationNumberContainerConfNumber);

// création du quatrième élément enfant : récap de commande 
let newItemPurchasedContainer = document.createElement("div");
