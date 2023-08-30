import React from 'react';
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom';

const Header = ({ loggedIn, handleLogout }) => {
    const navigate = useNavigate();
  
    const handleLogoutClick = () => {
      handleLogout();
      navigate('/login');
    };
  
    return (
      <header>
        {loggedIn ? <NavBar loggedIn={loggedIn} handleLogout={handleLogoutClick} /> : null}
      </header>
    );
  };
  
  export default Header;