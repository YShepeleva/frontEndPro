import { useState } from "react";

export default function FormPage({ setUsers, language }) {
  const [form, setForm] = useState({ name: "", surname: "", phone: "" });

  const texts = {
    ua: {
      title: "Форма",
      name: "Ім’я",
      surname: "Прізвище",
      phone: "Телефон",
      submit: "Додати",
    },
    en: {
      title: "Form",
      name: "Name",
      surname: "Surname",
      phone: "Phone",
      submit: "Add",
    },
  };

  const t = texts[language] || texts.ua;

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers(prev => [...prev, form]);
    setForm({ name: "", surname: "", phone: "" });
  };

  return (
    <>
      <h1>{t.title}</h1>
      <form className="form-grid" onSubmit={handleSubmit}>
        <input
            className="form-input"
          placeholder={t.name}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
        className="form-input"
          placeholder={t.surname}
          value={form.surname}
          onChange={(e) => setForm({ ...form, surname: e.target.value })}
        />
        <input
        className="form-input"
          type="tel"
          placeholder={t.phone}
          value={form.phone}
          onChange={(e) => {
            let value = e.target.value;
            value = value.replace(/[^0-9+]/g, "");
            if (value.includes("+")) {
              value = value.replace(/\+/g, "");
              value = "+" + value;
            }
            setForm({ ...form, phone: value });
          }}
        />
        <button type="submit">{t.submit}</button>
      </form>
    </>
  );
}
