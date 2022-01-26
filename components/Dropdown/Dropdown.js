import styles from "./Dropdown.module.sass";
import React, { useState } from "react";
// import { category } from '../../data/category'

export default function Dropdown({
  filterProducts,
  indexItem,
  button,
  replaceProducts,
}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown_wrapper}>
        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.dropdown_button}
        >
          Выбрать коллекцию
          <img
            className={isActive ? styles.dropdown_img : ""}
            src={"/images/arrow.svg"}
          ></img>
        </button>
        <div className={isActive ? styles.dropdown_menu : styles.off}>
          {replaceProducts.map((item, index) => (
            <div key={index}>
              <h5 style={{ margin: "15px 0" }}>{item.layers}</h5>
              <ul className={styles.dropdown_menu_list}>
                {item.products.map((v, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      filterProducts(v.collection);
                      indexItem(v.collection);
                      setIsActive(!isActive);
                    }}
                    className={
                      v.collection === button
                        ? `${styles.dropdown_item} ${styles.active}`
                        : `${styles.dropdown_item}`
                    }
                  >
                    <a>{v.collection}</a>
                    <span>{v.price}₽/м2</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {isActive ? (
        <div
          onClick={() => setIsActive(!isActive)}
          className={styles.overlay}
        ></div>
      ) : (
        ""
      )}
    </div>
  );
}
