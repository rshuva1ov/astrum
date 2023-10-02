import React from 'react';
import styles from './Header.module.scss';
import logoImage from '../../assets/Header/logo.png';
import boxesImage from '../../assets/Header/boxes.png';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.container_left}></div>
        <div className={styles.container_right}></div>
      </div>
      <div className={styles.background}>
        <div className={styles.background1}></div>
        <div className={styles.background2}></div>
        <div className={styles.background3}></div>
      </div>
      <main className={styles.main}>
        <img className={styles.main_logo} src={logoImage} alt="22" />
        <figure className={styles.main_figure}>
          <img className={styles.main_figure_img} src={boxesImage} alt="22" />
          <figcaption className={styles.main_figcaption}>
            <h1 className={styles.main_figcaption_title}>КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</h1>
            <p className={styles.main_figcaption_subtitle}>
              Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов
              Онлайн»!
            </p>
          </figcaption>
        </figure>
      </main>
    </header>
  );
}

export default Header;
