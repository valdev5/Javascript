
let balance = 2000; // Solde du compte
let amount = prompt("Saisir le montant du virement"); // Montant du virement (à saisir par l'utilisateur)
let authorization = ""; // Autorisation

// Complète le code en continuant sous cette ligne
 amount;
 if (balance > amount) {
    balance = balance - amount;
    authorization = "autorisé";    
}
if (balance < amount) {
    balance = balance - amount;
    authorization = "non autorisé";
    
}




console.submit(`Vous avez choisi de virer ${Number(amount).toFixed(2)} € de votre compte. Votre nouveau solde sera de ${Number(balance).toFixed(2)} € après le virement qui est ${authorization}.`);