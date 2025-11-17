import { useState } from "react";
export default function FormPage({ users, setUsers }) {
    const [form, setForm] = useState({ name: "", surname: "", phone: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, form]);
        setForm({ name: "", surname: "", phone: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Ім’я"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
                placeholder="Прізвище"
                value={form.surname}
                onChange={(e) => setForm({ ...form, surname: e.target.value })}
            />
            <input
                type="tel"
                placeholder="Телефон"
                value={form.phone}
                onChange={(e) => {
                    let value = e.target.value;
                    value = value.replace(/[^0-9+]/g, '');
                    if (value.includes('+')) {
                        value = value.replace(/\+/g, '');
                        value = '+' + value;
                    }
                    setForm({ ...form, phone: value });
                }}
            />

            <button type="submit">Додати</button>
        </form>
    );
}
