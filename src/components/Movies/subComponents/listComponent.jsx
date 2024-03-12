// ListComponent.js
import React from 'react';
import { Link } from 'react-router-dom';

const ListComponent = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((menuItem, index) => (
        <li key={index} className="nav-item active">
          <Link to={menuItem.to} className="nav-link">
            {menuItem.menuName} <span className="sr-only">(current)</span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default ListComponent;
