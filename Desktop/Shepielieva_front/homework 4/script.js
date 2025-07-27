// let a = prompt("Введіть ім'я користувача");
// alert(`Hello, ${a}! How are you?`);


// let b = parseInt(prompt("введіть трьохзначне число"));

// let str = b.toString();

// let firstDigit = parseInt(str[0]);
// let secondDigit = parseInt(str[1]);
// let thirdDigit = parseInt(str[2]);

// if (firstDigit === secondDigit && secondDigit === thirdDigit) { 
//     document.write("правда , числа однакові");
// } else if (firstDigit === secondDigit){
//     document.write(`перше: ${firstDigit} і друге: ${secondDigit} число однакові`);
// } else if (thirdDigit === secondDigit){
//     document.write(`друге: ${secondDigitDigit} і третє: ${thirdDigit} число однакові`);
// } else if (firstDigit === thirdDigit){
//     document.write(`перше: ${firstDigit} і третє: ${thirdDigit} число однакові`);
// } else {
//     document.write("всі цифри цього числа різні");
// }

// let birthYear = prompt("Введіть ваш рік народження");

// if (birthYear === null || isNaN(parseInt(birthYear))) {
//     alert("Шкода, що Ви не захотіли ввести свій рік народження.");
// } else {
//     let age = 2025 - parseInt(birthYear);

//     let city = prompt("Введіть місто, де ви живете");
//     let favSport = prompt("Введіть ваш улюблений вид спорту");
//     let name = prompt("Введіть ваше ім'я");

//     let cityMessage = "";
//     if (city === null || city.trim() === "") {
//         cityMessage = "Шкода, що ви не ввели ваше місто.";
//     } else if (city === "Київ") {
//         cityMessage = "Ти живеш у столиці України.";
//     } else if (city === "Вашингтон") {
//         cityMessage = "Ти живеш у столиці США.";
//     } else if (city === "Лондон") {
//         cityMessage = "Ти живеш у столиці Англії.";
//     } else {
//         cityMessage = `Ти живеш у місті ${city}.`;
//     }

//     let sportMessage = "";
//     if (favSport === null || favSport.trim() === "") {
//         sportMessage = "Шкода, що ви не вказали улюблений спорт.";
//     } else if (favSport.toLowerCase() === "бокс") {
//         sportMessage = "Бокс? Круто! Ти хочеш стати як Саша Усик?";
//     } else if (favSport.toLowerCase() === "футбол") {
//         sportMessage = "Футбол? Круто! Ти хочеш стати як Андрій Шевченко?";
//     } else if (favSport.toLowerCase() === "теніс") {
//         sportMessage = "Теніс? Круто! Ти хочеш стати як Еліна Світоліна?";
//     } else {
//         sportMessage = `Круто! Ти вже чемпіон, ${name || "друже"}!`;
//     }

//     alert(`Ваш вік: ${age}\n${cityMessage}\n${sportMessage}`);
// }






