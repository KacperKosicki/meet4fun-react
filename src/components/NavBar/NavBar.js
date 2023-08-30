import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss'

const NavBar = ({ loggedIn, handleLogout }) => {
    return (
      <Navbar className={styles.navbar} expand="lg">
      <div className={styles['navbar-left']}>
        <Navbar.Brand as={Link} to="/home" className={styles['navbar-brand']}>
          MEET4FUN.PL
        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={styles['navbar-nav']}>
          {loggedIn && (
            <>
              <Nav.Link as={Link} to="/profile" className={styles['nav-link']}>
                Profil
              </Nav.Link>
              <Nav.Link as={Link} to="/home" className={styles['nav-link']}>
                Strona główna
              </Nav.Link>
              <Nav.Link onClick={handleLogout} className={styles['nav-link']}>
                Wyloguj
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;