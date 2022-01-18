import styles from "./Size.module.sass";
import { category } from '../../data/category'

export default function Size({ filterProducts, products, indexItem, state, button }) {

  return (
    <div className={styles.catalog}>
      {category.map((item, index) => (
        <div key={index} className={styles.catalog_wrapper}>
          <h5>{item.name}</h5>
          <ul className={styles.catalog_list}>
            {item.cat.map((v, index) => (
              <li
                key={index}
                onClick={() => {
                  filterProducts(v.collection);
                  indexItem(v.collection);
                }}
                className={
                  v.collection === button ?
                    `${styles.active} ${styles.catalog_list_item}`
                    : styles.catalog_list_item
                }
              >
                <a className={styles.link}>{v.collection} <span>{v.price}</span></a>
              </li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
}
