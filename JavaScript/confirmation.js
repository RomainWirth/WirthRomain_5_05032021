// récupération des informations du localSotrage
// infos contact
const contactInfos = JSON.parse(localStorage.getItem("contact"));
console.log("récap identité acheteur :")
console.log(contactInfos);
// infos produit
const productsPurchased = JSON.parse(localStorage.getItem("product"));
console.log("array des produits achetés :")
console.log(productsPurchased);
// responseId
const confirmationNumber = localStorage.getItem("responseId");
console.log(confirmationNumber);

// récupération de l'élément parent
let confirmationContainer = document.getElementById("confirmation");

// création du premier élément enfant : titre
let newConfirmationMessage = document.createElement("h2");
newConfirmationMessage.className = "confirmation_container__title";
let newConfirmationMessageTextNode = document.createTextNode("Merci pour votre achat !");
newConfirmationMessage.appendChild(newConfirmationMessageTextNode);
confirmationContainer.appendChild(newConfirmationMessage); 

// création du deuxième élément enfant : identification de l'utilisateur
let newConfirmationUserContainer = document.createElement("p");
newConfirmationUserContainer.className = "confirmation_container__id_user";
let newConfirmationUserContainerIdUser = document.createElement("span");
newConfirmationUserContainerIdUser.id = "user_id";
newConfirmationUserContainer.appendChild(newConfirmationUserContainerIdUser);
confirmationContainer.appendChild(newConfirmationUserContainer);

// création du troisième élément enfant : numéro de confirmation
let newConfirmationNumberContainer = document.createElement("p");
newConfirmationNumberContainer.className = "confirmation_container__conf_number";
confirmationContainer.appendChild(newConfirmationNumberContainer);

let newConfirmationNumberContainerTextNode = document.createTextNode("Nous avons le plaisir de vous confirmer votre commande N° : ");
newConfirmationNumberContainer.appendChild(newConfirmationNumberContainerTextNode);

let newConfirmationNumberContainerConfNumber = document.createElement("span");
newConfirmationNumberContainerConfNumber.id = "confirmation_number";
newConfirmationNumberContainer.appendChild(newConfirmationNumberContainerConfNumber);
let newConfirmationNumberContainerConfNumberTextNode = document.createTextNode(confirmationNumber);
newConfirmationNumberContainerConfNumber.appendChild(newConfirmationNumberContainerConfNumberTextNode);

// création du quatrième élément enfant : récap de commande ======= à dupliquer autant de fois qu'il y a d'items
let newItemPurchasedContainer = document.createElement("div");
newItemPurchasedContainer.className = "confirmation_container__order_recap";
confirmationContainer.appendChild(newItemPurchasedContainer);

for (d = 0; d < productsPurchased.length; d++) {
    console.log(productsPurchased.length);

    let newItemPurchasedContainerItem = document.createElement("div");
    newItemPurchasedContainerItem.className = "confirmation_container__order_recap--item";
    newItemPurchasedContainer.appendChild(newItemPurchasedContainerItem);

    let newItemPurchasedContainerItemName = document.createElement("h3"); // intégrer les données depuis le local storage
    // newItemPurchasedContainerItemName.className = "item_name";
    newItemPurchasedContainerItem.appendChild(newItemPurchasedContainerItemName);
    let newItemPurchasedContainerItemNameTextNode = document.createTextNode(productsPurchased[d].itemName);
    newItemPurchasedContainerItemName.appendChild(newItemPurchasedContainerItemNameTextNode);
    
    let newItemPurchasedContainerItemId = document.createElement("p"); // intégrer les données depuis le local storage
    // newItemPurchasedContainerItemId.className = "item_id";
    newItemPurchasedContainerItem.appendChild(newItemPurchasedContainerItemId);
    let newItemPurchasedContainerItemIdTextNode = document.createTextNode(productsPurchased[d].itemId);
    newItemPurchasedContainerItemId.appendChild(newItemPurchasedContainerItemIdTextNode);

    let newItemPurchasedContainerItemOption = document.createElement("p"); // intégrer les données depuis le local storage
    // newItemPurchasedContainerItemOption.className = "item_option";
    newItemPurchasedContainerItem.appendChild(newItemPurchasedContainerItemOption);
    let newItemPurchasedContainerItemOptionTextNode = document.createTextNode(productsPurchased[d].itemOption);
    newItemPurchasedContainerItemOption.appendChild(newItemPurchasedContainerItemOptionTextNode);

    let newItemPurchasedContainerItemPrice = document.createElement("p"); // intégrer les données depuis le local storage
    // newItemPurchasedContainerItemPrice.className = "item_price";
    newItemPurchasedContainerItem.appendChild(newItemPurchasedContainerItemPrice);
    let newItemPurchasedContainerItemPriceTextNode = document.createTextNode(productsPurchased[d].itemPrice + " Euros");
    newItemPurchasedContainerItemPrice.appendChild(newItemPurchasedContainerItemPriceTextNode);
}

let newItemPurchasedContainerTotalPrice = document.createElement("div");
newItemPurchasedContainerTotalPrice.className = "confirmation_container__order_recap--total_price";
newItemPurchasedContainer.appendChild(newItemPurchasedContainerTotalPrice);

let newItemPurchasedContainerTotalPriceText = document.createElement("p");
// newItemPurchasedContainerTotalPriceText.className = "total_price_text";
newItemPurchasedContainerTotalPrice.appendChild(newItemPurchasedContainerTotalPriceText);
let newItemPurchasedContainerTotalPriceTextNode = document.createTextNode("Montant payé :");
newItemPurchasedContainerTotalPriceText.appendChild(newItemPurchasedContainerTotalPriceTextNode);

let newItemPurchasedContainerTotalPriceAmount = document.createElement("p"); // calculter le prix total en fonction des élément ci-dessus
newItemPurchasedContainerTotalPrice.appendChild(newItemPurchasedContainerTotalPriceAmount);
let amountPaidArray = [];

for (let g = 0; g < productsPurchased.length; g++) {
    let itemPriceInConf = productsPurchased[g].itemPrice;
    let itemPriceInConfNumber = parseFloat(itemPriceInConf); // conversion string en number
    console.log(itemPriceInConf); // contrôle des prix des items dans la console

    amountPaidArray.push(itemPriceInConfNumber);
    console.log(amountPaidArray); // contrôle des informations du tableau
}

let reducer = (accumulator, currentValue) => accumulator + currentValue;
let totalAmountPaid = amountPaidArray.reduce(reducer, 0);
let totalAmountPaidShown = totalAmountPaid.toFixed(2);
console.log("montant total de l'achat :")
console.log(totalAmountPaidShown); // contrôle du calcul

let newItemPurchasedTotalPriceAmountTextNode = document.createTextNode(totalAmountPaidShown + " Euros");
console.log(newItemPurchasedTotalPriceAmountTextNode);
newItemPurchasedContainerTotalPriceAmount.appendChild(newItemPurchasedTotalPriceAmountTextNode);

// création du cinquième élément enfant : message d'envoi d'email
let newItemPurchasedContainerConfMessageCont = document.createElement("div");
newItemPurchasedContainerConfMessageCont.className = "confirmation_container__email_message";
confirmationContainer.appendChild(newItemPurchasedContainerConfMessageCont);
let newItemPurchasedContainerConfMessage = document.createElement("p");
newItemPurchasedContainerConfMessageCont.appendChild(newItemPurchasedContainerConfMessage);
let newItemPurchasedContainerConfMessageTextNode = document.createTextNode("vous recevrez les détails de votre commande très prochainement à l'adresse email suivante :");
newItemPurchasedContainerConfMessage.appendChild(newItemPurchasedContainerConfMessageTextNode);
let newItemPurchasedContainerConfEmail = document.createElement("p");
newItemPurchasedContainerConfMessageCont.appendChild(newItemPurchasedContainerConfEmail);
let newItemPurchasedContainerConfEmailTextNode = document.createTextNode(contactInfos.email);
newItemPurchasedContainerConfEmail.appendChild(newItemPurchasedContainerConfEmailTextNode);

// DEBUT FONCTION REMOVE KEY FROM LOCAL STORAGE ================================================
function removeLocalStorageKey(key){
    localStorage.removeItem(key);
};

removeLocalStorageKey("product");
removeLocalStorageKey("products");
removeLocalStorageKey("responseId");

// FIN FONCTION REMOVE KEY FROM LOCAL STORAGE ==================================================