// Цикл на кожній ітерації пропонує через prompt ввести 
// число більше 100 (але максимум 10 ітерацій циклу). 
// Якщо відвідувач ввів число менше ста – попросити 
// ввести ще раз, і таке інше. Якщо користувач вводить 
// більше ста, текст або цикл закінчує всі ітерації, то 
// функція виводить в консоль останній введення користувача 
// і завершує функцію.

// let i = 0;

// function enterNum() {
//     let number = parseInt(prompt('Enter the number'));
//     if (number < 100 || isNaN(number)) {
//         i++;
//         if (i > 10) {
//             document.write(`You are out of tries. Your last number is ${number}`);
//             return;
//         }
//         enterNum();
//     } else {
//         document.write(`Your last number is ${number}`);
//     }
// }

// enterNum();

//--решение с циклом--

for (let i = 0; i < 10; i++) {
    let value = prompt('Enter the number > 100');

    if (value > 100 || isNaN(value) || i === 9) {
        console.log(`User has entered ${value}`);
        break; 
    } else if (value <= 100) {
        console.log('Enter the correct number');
    } 
}

