const date = moment("09-24-1998", "MM-DD-YYYY");
console.log(date.format("DD.MM.YYYY")); 

document.body.insertAdjacentHTML(
  "beforeend",
  `<p>My date birthday: ${date.format("DD.MM.YYYY")}</p>`
);

// ___

const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("birthDate");
  const btn = document.getElementById("convertBtn");
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("dateError");

  btn.addEventListener("click", function () {
    const value = input.value.trim();

    input.classList.remove("is-invalid");
    resultDiv.innerHTML = "";
    errorDiv.textContent =
      "Невірний формат дати. Використайте ДД/ММ/РРРР.";

    if (!dateRegex.test(value)) {
      input.classList.add("is-invalid");
      return;
    }
    const m = moment(value, "DD/MM/YYYY", true);

    const formatted = m.format("YYYY-MM-DD");

    resultDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        Перетворена дата: <strong>${formatted}</strong>
      </div>
    `;
  });
});