import { Link } from 'react-router-dom'
import './Menu.css';

export default function Menu({
  theme,
  onToggleTheme,
  language,
  onChangeLanguage,
}) {
  console.log('LANG = ', language);
  return (
    <>
      <nav>
        <div className="first-block">
          <Link to="/">MainPage</Link> <br />
          <Link to="/list">DataTable</Link> <br />
          <Link to="/form">FormPage</Link>
        </div>
      </nav>

      <div>
        <div className="second-block">
          <button onClick={onToggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>

          <button
            onClick={() => onChangeLanguage('ua')}
            className={language === 'ua' ? 'active' : ''}
          > UA
          </button>

          <button
            onClick={() => onChangeLanguage('en')}
            className={language === 'en' ? 'active' : ''}
          > EN
          </button>
        </div>
      </div>
    </>
  );
}
