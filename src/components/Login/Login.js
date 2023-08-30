import React, { useState } from 'react';
import users from '../Users/Users';
import { useNavigate } from 'react-router-dom'; // Użyj komponentu Navigate
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSuccessModal from '../LoginSuccesModal/LoginSuccesModal';
import { Alert } from 'react-bootstrap';
import styles from './Login.module.scss'


const Login = ({ setLoggedIn, setLoggedInUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      setLoginError(false);
      setShowModal(true);
      setLoggedIn(true);
      console.log(username); // Dodaj tę linię
      setLoggedInUser(username); // Ustawienie zalogowanego użytkownika
      localStorage.setItem('loggedIn', 'true');

      setTimeout(() => {
        setShowModal(false);
        navigate('/home');
      }, 3000);
    } else {
      setLoginError(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/home');
  };

  return (
    <div className="container login-container">
      <div className={styles.loginForm}>
        <h2 className={styles.loginHeading}>Logowanie do serwisu MEET4FUN.PL</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Nazwa użytkownika:</Form.Label>
            <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Hasło:</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Zaloguj się
          </Button>
        </Form>
        {loginError && <Alert variant="danger">Niepoprawna nazwa użytkownika lub hasło.</Alert>}
      </div>
      <LoginSuccessModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default Login;