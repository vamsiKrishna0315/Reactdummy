import React from 'react';

const ListComponent = ({ menuNames }) => {
  return (
    <>
      {menuNames.map((menuName, index) => (
        <li key={index} className="nav-item active">
          <a className="nav-link" href="#">
            {menuName} <span className="sr-only">(current)</span>
          </a>
        </li>
      ))}
    </>
  );
};

export default ListComponent;
