// Завдання  3. Унікальні товари
// Створюємо Set, щоб отримати унікальні товари
// Set { 'Phone', 'Case', 'Laptop', 'Headphones', 'Monitor' }

const uniqueItems = [
    ...new Set(
        orders.flatMap(order =>
            order.items.map(item => item.name)
        )
    )
];

console.log(uniqueItems);




