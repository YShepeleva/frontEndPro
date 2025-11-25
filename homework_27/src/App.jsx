import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import DataTable from "../components/DataTable.jsx";
import FormPage from "../components/FormPage.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../components/MainPage.jsx';
import Page404 from './Page404.jsx';
import Menu from '../components/Menu.jsx';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('ua');
  const [users, setUsers] = useState([]); 

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <BrowserRouter>
        <Menu
          theme={theme}
          onToggleTheme={toggleTheme}
          language={language}
          onChangeLanguage={setLanguage}
        />

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path="/list" element={<DataTable users={users} currentLanguage={language} />} />
          <Route path='/form' element={<FormPage setUsers={setUsers} language={language} />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
