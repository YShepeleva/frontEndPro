import React from 'react';
import './DataTable.css';

function DataTable({ users }) {
  return (
    <div className="data-table">
      ...
      {users.length > 0 ? (
        users.map((user, index) => (
          <div className="row" key={index}>
            <div>{user.name}</div>
            <div>{user.surname}</div>
            <div>{user.phone}</div>
          </div>
        ))
      ) : (
        <div className="no-data">Даних поки немає</div>
      )}
    </div>
  );
}

export default DataTable;
