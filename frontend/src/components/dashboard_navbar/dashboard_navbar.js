import React from 'react';
import { Link } from 'react-router-dom';

function DashboardNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/">Apps</Link>
        </li>
        <li>
          <Link to = "/">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default DashboardNavbar;
