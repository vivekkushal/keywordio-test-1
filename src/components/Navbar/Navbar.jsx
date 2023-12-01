import React from 'react';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';

// components

// routes
import { navRoutes } from '../../routes';

const Navbar = () => {
  const navigate = useNavigate();
  const handleRouteClick = (navRoute) => {
    document.title = navRoute.documentTitle;
    navigate(navRoute.path);
  };

  return (
    <nav className={styles.container}>
      <h2>APP LOGO</h2>
      <div className={styles.nav_items}>
        {navRoutes.map((navRoute, ind) => (
          <button
            key={ind}
            onClick={() => handleRouteClick(navRoute)}
            className={styles.nav_item}
          >
            {navRoute.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
