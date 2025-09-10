// Реалізувати форму для реєстрації на сайті
// Поля форми:
// Ім’я, Призвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// Кнопка “Зберегти”
// Після натискання кнопки, замість форми відображається “табличка” з даними, що тільки що ввів користувач.

// Тобто, робимо обробку кліку на кнопку, отримуємо дані з форми та відображаємо на сторінку

const cities = {
    ODS: "Odessa",
    KHV: "Kharkov",
    KV: "Kyiv",
    LV: "Lviv"
}

const genders = {
    M: "Male",
    F: "Female"
}

document.querySelector('button').addEventListener('click', () => {
    const form = document.forms.signin;
    const userName = form.name.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const address = form.address.value;
    const city = form.city.value;

    const skills = [];
    
    for(let i = 0; i < form.skills.length; i++) {
        if (form.skills[i].checked) {
            skills.push(form.skills[i].value);
        }
    }

    // const city = [];

    // for (let i = 0; i < form.city.length; i++) {
    //     if (form.city[i].selected) {
    //         city.push(form.city[i].value);
    //     }
    // }

alert(`
    User name: ${userName}\n
    Bithday: ${age}\n
    Sex: ${genders[gender]}\n
    City: ${cities[city]}\n
    Address: ${address}\n
    Language: ${skills.join(', ')}
    `);
});

