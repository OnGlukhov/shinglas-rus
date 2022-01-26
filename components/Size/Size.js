import styles from "./Size.module.sass";
// import { category } from "../../data/category";

export default function Size({
  filterProducts,
  indexItem,
  button,
  replaceProducts,
}) {
  return (
    <div className={styles.catalog}>
      {replaceProducts.map((item, index) => (
        <div key={index} className={styles.catalog_wrapper}>
          <h5>{item.layers}</h5>
          <ul className={styles.catalog_list}>
            {item.products.map((v, index) => (
              <li
                key={index}
                onClick={() => {
                  filterProducts(v.collection);
                  indexItem(v.collection);
                }}
                className={
                  v.collection === button
                    ? `${styles.active} ${styles.catalog_list_item}`
                    : styles.catalog_list_item
                }
              >
                <a className={styles.link}>
                  {v.collection} <span>{v.price}₽/м2</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
