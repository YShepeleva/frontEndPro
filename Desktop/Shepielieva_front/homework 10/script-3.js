// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. 
// Які представляють контакти у вашій контактній книзі. 
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. 
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

function getListContacts() {
    const names = contactBook.contacts.map(contact => {
        return contact.name;
    });
    console.log(names);
}

getListContacts();

const nameToFind = prompt("Введіть ім’я для пошуку:");

function findContactByName(name) {
    const nameToFind = contactBook.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (nameToFind) {
      console.log(`Знайдено контакт:
      Ім’я: ${nameToFind.name}
      Телефон: ${nameToFind.phone}
      Email: ${nameToFind.email}`);
    } else {
      console.log("Контакт не знайдено.");
    }
  }

  findContactByName(nameToFind);
  