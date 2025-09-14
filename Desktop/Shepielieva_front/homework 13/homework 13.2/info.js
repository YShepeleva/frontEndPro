const formValidatorsConfig = {
    userName: {
        regex: /^[A-Z][a-z]{3,10} [A-Z][a-z]{3,10}$/,
        required: true,
        error: {
            selector: '.name-error',
            message: "Please, write your full name, e.g. Ivan Ivanov"
        }
    }
}

function validateFormDate(data) {
    let errors = 0;
    for (let key in data) {
        if (
            (formValidatorsConfig[key]?.required && data[key]) ||
            (data[key] && !data[key].match(formValidatorsConfig[key].regex))
        ) {
            errors++
            //додали помилку в html
            const errorElement = document.querySelector(formValidatorsConfig[key].error.selector);
            errorElement.textContent = formValidatorsConfig[key].error.message;
        } else {
            const errorElement = document.querySelector(formValidatorsConfig[key].error.selector);
            errorElement.textContent = '';
        }
    }
    return errors === 0;
}

function getDateFromForm() {
    const form = document.forms.signin;

    return {
        userName: form.name.value.trim()
    };
}

const cities = {
    ODS: "Odessa",
    KHV: "Kharkov",
    KV: "Kyiv",
    LV: "Lviv"
}

const wherehouseNP = {
    N1: "Nova Post branch 1",
    N2: "Nova Post branch 2",
    N3: "Nova Post branch 3",
    N4: "Nova Post branch 4"
}

const paymentBy = {
    now: "Pay by card",
    after: "Pay after receiving"
}

document.querySelector('button').addEventListener('click', () => {
    const form = document.forms.signin;
    const userName = form.name.value;
    const city = form.city.value;
    const wherehouse = form.wherehouse.value;
    const payment = form.payment.value;
    const quantity = form.quantity.value;
    const comments = form.comments.value;

    const formData = getDateFromForm();
    const isValid = validateFormDate(formData);

    if (!isValid) return; //не показуємо alert

    alert(`
    Name: ${userName}\n
    City: ${cities[city]}\n
    Nova Post branch: ${wherehouseNP[wherehouse]}\n
    Payment methods: ${paymentBy[payment]}\n
    Quantity: ${quantity}\n
    Comment to the order: ${comments}\n
    `);
});

function getDateFromForm() {
    const form = document.forms[0];

    const userName = form.name.value;

    const date = {
        userName
    };

    return date;
}
