import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div>
      <Carousel className={styles['custom-carousel']}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Pierwszy slajd"
          />
          <Carousel.Caption>
            <h3>Przykładowy tytuł slajdu</h3>
            <p>Tutaj możesz dodać opis dla pierwszego slajdu.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Drugi slajd"
          />
          <Carousel.Caption>
            <h3>Przykładowy tytuł slajdu</h3>
            <p>Tutaj możesz dodać opis dla drugiego slajdu.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Dodaj więcej slajdów w podobny sposób */}
      </Carousel>
    </div>
  );
};

export default Home;