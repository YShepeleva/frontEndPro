// Дано массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму і кількість додатних (положительных) елементів.
// Знайти мінімальний (найменший) елемент масива і його індекс.
// Знайти максимальний (найбільший) елемент масива та його індекс
// Визначити кількість від’ємних (отрицательных) елементів масива
// Знайти кількість непарних додатних  елементів
// Знайти кількість парних додатних елементів
// Знайти суму парних додатних елементів
// Знайти суму непарних додатних елементів
// Знайти добуток всіх додатних елементів
// Змінити на 0 всі елементи масива окрім найбільшого

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1. Сума і кількість додатних
const positives = arr.filter(x => x > 0);
const sumPositives = positives.reduce((a,b) => a + b, 0);
console.log("Сума додатних:", sumPositives);
console.log("Кількість додатних:", positives.length);

// 2. Мінімальний елемент і його індекс
let min = arr[0], minIndex = 0;
arr.forEach((val, idx) => { if (val < min) { min = val; minIndex = idx; } });
console.log("Мінімальний:", min, "Індекс:", minIndex);

// 3. Максимальний елемент і його індекс
let max = arr[0], maxIndex = 0;
arr.forEach((val, idx) => { if (val > max) { max = val; maxIndex = idx; } });
console.log("Максимальний:", max, "Індекс:", maxIndex);

// 4. Кількість від’ємних
const negativesCount = arr.filter(x => x < 0).length;
console.log("Кількість від’ємних:", negativesCount);

// 5. Кількість непарних додатних
const oddPositivesCount = positives.filter(x => x % 2 !== 0).length;
console.log("Непарних додатних:", oddPositivesCount);

// 6. Кількість парних додатних
const evenPositivesCount = positives.filter(x => x % 2 === 0).length;
console.log("Парних додатних:", evenPositivesCount);

// 7. Сума парних додатних
const sumEvenPositives = positives.filter(x => x % 2 === 0).reduce((a,b) => a + b, 0);
console.log("Сума парних додатних:", sumEvenPositives);

// 8. Сума непарних додатних
const sumOddPositives = positives.filter(x => x % 2 !== 0).reduce((a,b) => a + b, 0);
console.log("Сума непарних додатних:", sumOddPositives);

// 9. Добуток всіх додатних (ТОЧНО з BigInt)
const productPositivesBig = positives.map(BigInt).reduce((a,b) => a * b, 1n);
console.log("Добуток додатних (BigInt):", productPositivesBig.toString());

// 10. Масив з 0 крім найбільшого
const modifiedArr = arr.map((x, idx) => idx === maxIndex ? x : 0);
console.log("Масив з нулями:", modifiedArr);
