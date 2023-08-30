import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './LoginSuccesModal.module.scss'

const LoginSuccessModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.succes}>Sukces!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h2 className={styles.succesText}>Zalogowano pomyślnie!</h2>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Zamknij
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginSuccessModal;