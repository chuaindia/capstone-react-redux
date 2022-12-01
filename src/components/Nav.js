import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <>
    <div className="NavigationContainer">
      <ul className="HomeLink">
        <li>
          <Link to="/"> </Link>
        </li>
      </ul>
    </div>
  </>
);
export default Nav;
