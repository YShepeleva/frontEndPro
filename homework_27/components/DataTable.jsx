import './DataTable.css';

const translations = {
  ua: {
    title: 'Таблиця',
    name: "Імʼя",
    surname: 'Прізвище',
    phone: 'Телефон',
    noData: 'Даних поки немає',
  },
  en: {
    title: 'Table',
    name: 'Name',
    surname: 'Surname',
    phone: 'Phone',
    noData: 'No data yet',
  },
};

function DataTable({ users = [], currentLanguage = 'ua' }) {
  const t = translations[currentLanguage] || translations.ua;

  return (
    <>
      <h1>{t.title}</h1>

      <div className="data-table">
        <div className="row header">
          <div>{t.name}</div>
          <div>{t.surname}</div>
          <div>{t.phone}</div>
        </div>

        {users.length > 0 ? (
          users.map((user, index) => (
            <div className="row" key={index}>
              <div>{user.name}</div>
              <div>{user.surname}</div>
              <div>{user.phone}</div>
            </div>
          ))
        ) : (
          <div className="no-data">{t.noData}</div>
        )}
      </div>
    </>
  );
}

export default DataTable;
