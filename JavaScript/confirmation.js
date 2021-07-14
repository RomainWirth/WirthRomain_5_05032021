
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

// création du quatrième élément enfant : récap de commande ======= à dupliquer autant de fois qu'il y a d'items
let newItemPurchasedContainer = document.createElement("div");
newItemPurchasedContainer.className = "confirmation_container__order_recap";

let newItemPurchasedContainerItem = document.createElement("div");
newItemPurchasedContainerItem.className = "confirmation_container__order_recap--item";
let newItemPurchasedContainerItemName = document.createElement("h3"); // intégrer les données depuis le local storage
// newItemPurchasedContainerItemName.className = "item_name";
let newItemPurchasedContainerItemId = document.createElement("p"); // intégrer les données depuis le local storage
// newItemPurchasedContainerItemId.className = "item_id";
let newItemPurchasedContainerItemOption = document.createElement("p"); // intégrer les données depuis le local storage
// newItemPurchasedContainerItemOption.className = "item_option";
let newItemPurchasedContainerItemPrice = document.createElement("p"); // intégrer les données depuis le local storage
// newItemPurchasedContainerItemPrice.className = "item_price";

newItemPurchasedContainer.appendChild(newItemPurchasedContainerItem);
newItemPurchasedContainerItem.appendChild(newItemPurchasedContainerItemName);
newItemPurchasedContainerItem.appendChild(newItemPurchasedContainerItemId);
newItemPurchasedContainerItem.appendChild(newItemPurchasedContainerItemOption);
newItemPurchasedContainerItem.appendChild(newItemPurchasedContainerItemPrice);

// création du cinquième élément enfant : message d'envoi d'email
let newItemPurchasedContainerTotalPrice = document.createElement("div");
newItemPurchasedContainerTotalPrice.className = "confirmation_container__order_recap--total_price";
let newItemPurchasedContainerTotalPriceText = document.createElement("p");
// newItemPurchasedContainerTotalPriceText.className = "total_price_text";
let newItemPurchasedContainerTotalPriceTextNode = docuement.createTextNode("Montant payé :");
newItemPurchasedContainerTotalPriceText.appendChild(newItemPurchasedContainerTotalPriceTextNode);
let newItemPurchasedContainerTotalPriceAmount = document.createElement("p"); // calculter le prix total en fonction des élément ci-dessus

// création du cinquième élément enfant : message d'envoi d'email
let newItemPurchasedContainerConfMessageCont = document.createElement("div");
let newItemPurchasedContainerConfMessage = document.createElement("p");
let newItemPurchasedContainerConfMessageTextNode = document.createTextNode("vous recevrez les détails de votre commande très prochainement à l'adresse email suivante :");
newItemPurchasedContainerConfMessage.appendChild(newItemPurchasedContainerConfMessageTextNode);
let newItemPurchasedContainerConfEmail = document.createElement("p");

newItemPurchasedContainerConfMessageCont.appendChild(newItemPurchasedContainerConfMessage);
newItemPurchasedContainerConfMessageCont.appendChild(newItemPurchasedContainerConfEmail); // ajouter l'adresse email du client depuis le local storage

// intégration des éléments dans l'élement conteneur :
confirmationContainer.appendChild(newConfirmationMessage); // ajout de h2
confirmationContainer.appendChild(newConfirmationUserContainer); // ajout de p : nom et prénom
confirmationContainer.appendChild(newConfirmationNumberContainer); // ajout de p : numéro de confirmation
confirmationContainer.appendChild(newItemPurchasedContainer); // ajout div avec items + total price
confirmationContainer.appendChild(newItemPurchasedContainerConfMessageCont); // ajout conf par email