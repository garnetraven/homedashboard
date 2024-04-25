import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        {isLoggedin ? (
          <React.Fragment>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </React.Fragment>
        ): null }
      </ul>
    </nav>
  );
}

export default Navbar;