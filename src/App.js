import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');
  const [loggedInUser, setLoggedInUser] = useState(''); // Dodaj zmienną loggedInUser

  const handleLogin = (username) => {
    setLoggedIn(true);
    setLoggedInUser(username); // Ustaw loggedInUser przy logowaniu
    localStorage.setItem('loggedIn', 'true');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setLoggedInUser(''); // Zresetuj loggedInUser przy wylogowaniu
    localStorage.setItem('loggedIn', 'false');
  };

  return (
    <Container>
      <Header loggedIn={loggedIn} handleLogout={() => setLoggedIn(false)} /> {/* Dodaj nagłówek */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setLoggedInUser={setLoggedInUser} />} />
        <Route path="/" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/profile" element={<Profile loggedInUser={loggedInUser} />} />
        {/* Dodaj inne trasy */}
      </Routes>
    </Container>
  );
}

export default App;
