// Завдання 2. Сума замовлень кожного користувача
// Використати map + reduce, щоб створити об’єкт 
// { Alice: 620, Bob: 1700, Charlie: 300 }.
// Використовуємо Map, де ключ - им’я користувача, а значення - сума його покупок
// Map { 'Alice' => 620, 'Bob' => 1700, 'Charlie' => 300 }

const sumsOrders = orders.reduce((acc, order) => {
    const user = order.user;
    const totalOrderSum = order.items.reduce((sum, item) => sum + item.price, 0);
    acc[user] = (acc[user] || 0) + totalOrderSum;
    return acc;
}, {});

const resultSum = Object.entries(sumsOrders).map(([user, sum]) => `${user} => ${sum}`);
console.log(resultSum);








