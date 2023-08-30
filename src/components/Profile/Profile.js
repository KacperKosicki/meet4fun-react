import React from 'react';
import users from '../Users/Users';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import styles from './Profile.module.scss'; // Zaimportuj plik ze stylami

const Profile = ({ loggedInUser }) => {
  const user = users.find(u => u.username === loggedInUser);

  if (!user) {
    return <div>Nie znaleziono zalogowanego użytkownika.</div>;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileWrapper}>
        <div className={styles.profileImage}>
          <img src="images/kosa.jpg" alt="Zdjęcie profilowe" />
        </div>
        <div className={styles.profileInfo}>
          <h2>Twój Profil</h2>
          <p>Nazwa użytkownika: {user.username}</p>
          {/* Dodaj inne informacje o użytkowniku, np. data urodzenia */}
        </div>
      </div>
    </div>
  );
};

export default Profile;