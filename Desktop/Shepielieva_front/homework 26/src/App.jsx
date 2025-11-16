import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import DataTable from "./DataTable.jsx";
import FormPage from "./FormPage.jsx";


function App() {
  const [page, setPage] = useState('form');
  const [users, setUsers] = useState([]);

  return (
    <>
      <div className='navigation'>
        <h1>Navigation</h1>
        <button className='btn-switch' onClick={() => setPage('form')}>Form</button>
        <button className='btn-switch' onClick={() => setPage('table')}>Table</button>

        {page === 'form' && (
          <FormPage users={users} setUsers={setUsers} />
        )}

        {page === "table" &&
          <DataTable users={users} />}
      </div>
    </>
  )
}

export default App
