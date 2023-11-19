let drinksPrice = 10; // Prix des boisson
let foodPrice = 30; // Prix des plats
let coffeePrice = 2; // Prix du café
let people = 4; // Nombre de personne à table
let waiterName = "Walter"; // Nom du serveur


let subtotal = drinksPrice + foodPrice + coffeePrice;
let total = subtotal * people;
let vat = total * 0.2;
let thankMessage = waiterName + " a été ravi de vous servir aujourd'hui, merci et à bientôt.";



console.submit(`Total par personne : ${Number(subtotal).toFixed(2)} € - Total : ${Number(total).toFixed(2)} € TTC - TVA : ${Number(vat).toFixed(2)} € - ${thankMessage}`);