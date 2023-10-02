import React from 'react';
import { useEffect, useState } from 'react';
import styles from './Content.module.scss';
import dogImage from '../../assets/Content/Vito 1.png';
import boxImage from '../../assets/Content/box.png';
function Content() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://64a9d0c38b9afaf4844b1769.mockapi.io/items_test`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);
  return (
    <main className={styles.content}>
      <div className={styles.content_left}>
        <div className={styles.content_left_ellipse}></div>
        <img className={styles.content_left_image} src={dogImage} alt="dog" />
      </div>
      <div className={styles.content_right}>
        <h2 className={styles.content_right_title}>НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</h2>
        <div className={styles.content_right_server}>
          <p className={styles.content_right_server_item}>Бесплатные сервера</p>
          <p className={styles.content_right_server_item}>Подписочный сервер</p>
        </div>
        <ul className={styles.content_right_list}>
          {items.map((item) => (
            <li key={item.id} className={styles.content_right_list_item}>
              <img className={styles.content_right_list_item_img} src={item.imageUrl} alt="time" />
              <p className={styles.content_right_list_item_title}>{item.title}</p>
              <div className={styles.content_right_list_item_container}></div>
              <p className={styles.content_right_list_item_server1}> {item.free}</p>
              <p className={styles.content_right_list_item_server2}>{item.subscription}</p>
            </li>
          ))}
        </ul>
        <div className={styles.content_right_box}>
          <img className={styles.content_right_box_img} src={boxImage} alt="box" />
          <div className={styles.content_right_box_price}>
            <p className={styles.content_right_box_price_count}>399 ₽</p>
            <button className={styles.content_right_box_price_button}>ПРИОБРЕСТИ</button>
          </div>
        </div>
      </div>
      <div className={styles.content_bg}></div>
    </main>
  );
}

export default Content;
