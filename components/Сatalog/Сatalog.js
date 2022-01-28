import styles from "./Сatalog.module.sass";
import { productsInit } from "../../data/products";
import React, { useState } from "react";
import Size from "../Size/Size";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-scroll";

export default function Сatalog({ width, products }) {
  const [productsFilter, setProductsFilter] = React.useState(
    filterProducts("Фазенда")
  );
  const [button, setButton] = React.useState("Фазенда");
  const [indexProduct, setIndexProduct] = React.useState(0);

  const buildArr = () => {
    const finishedArray = [
      { layers: "Многослойная черепица", products: [] },
      { layers: "Однослойная черепица", products: [] },
    ];

    const allOptions = products.map((i) => {
      const result = i.options.filter((v) => v.key === "Коллекция");
      const layers = i.options.filter((v) => v.key === "Количество слоев");

      return {
        collection: result[0].value,
        price: i.cost,
        layers: layers[0].value,
      };
    });

    let tmpArray = [];
    function itemCheck(item) {
      if (tmpArray.indexOf(item.collection) === -1) {
        return tmpArray.push(item.collection);
      }
      return;
    }
    const uniqueСollections = allOptions.filter((item) => itemCheck(item));

    uniqueСollections
      .sort((a, b) => (a.price > b.price ? 1 : -1))
      .map((i) => {
        return i.layers === "Многослойная"
          ? finishedArray[0].products.push(i)
          : finishedArray[1].products.push(i);
      });
    return finishedArray;
  };

  const replaceProducts = buildArr();

  const indexItem = (index) => {
    setButton(index);
  };

  function filterProducts(collection) {
    const currentProducts = [];
    products.forEach((i) => {
      return i.options.map((v) => {
        if (v.key === "Коллекция" && v.value === collection) {
          currentProducts.push(i);
        }
      });
    });
    const bringFormat = [
      {
        price: currentProducts[0].cost,
        id: currentProducts[0].id,
        collection: collection,
        img: {
          small: [],
          big: [],
        },
      },
    ];

    currentProducts.forEach((i) => {
      bringFormat[0].img.small.push({
        color: i.options.find(({ key }) => key === "Цвет").value,
        image: "https://xn--j1ano.com" + i.path + i.images[0],
      });
      bringFormat[0].img.big.push({
        image: "https://xn--j1ano.com" + i.path + i.images[0],
      });
    });
    return bringFormat;
  }

  function selectСollection(collection) {
    setProductsFilter(filterProducts(collection));
    setIndexProduct(0);
  }

  return (
    <section className={styles.catalog} id="catalog">
      <h1 className={styles.catalog_title}>
        Каталог и цены черепицы <span>Shinglas</span>
      </h1>
      {/* <p className={styles.catalog_subtitle}>
        У нас представлены фанера разных размеров и производителей
      </p> */}
      <div className={styles.catalog_size}>
        {width > 900 ? (
          <Size
            filterProducts={selectСollection}
            indexItem={indexItem}
            button={button}
            replaceProducts={replaceProducts}
          />
        ) : (
          <Dropdown
            filterProducts={selectСollection}
            indexItem={indexItem}
            button={button}
            replaceProducts={replaceProducts}
          />
        )}
        <div></div>
      </div>
      <div className={styles.catalog_products}>
        {productsFilter.map((product, i) => (
          <div key={product.id} className={styles.catalog_product}>
            <ul className={styles.catalog_product__list_color}>
              {product.img.small.map((img, index) => (
                <li key={index} className={styles.catalog_product__color}>
                  <div style={{ position: "relative" }}>
                    <img
                      className={styles.catalog_product__color__img}
                      onClick={() => setIndexProduct(index)}
                      src={img.image}
                    />
                    <img
                      className={
                        indexProduct === index
                          ? `${styles.catalog_product__current}`
                          : `${styles.none}`
                      }
                      src={"/images/current.png"}
                    />
                  </div>
                  <p className={styles.catalog_product__text}>{img.color}</p>
                </li>
              ))}
            </ul>
            <div className={styles.product_card}>
              <div style={{ flex: "1" }}>
                <img
                  className={styles.product_card__img}
                  src={product.img.big[indexProduct].image}
                />
                {productsInit.map((item) =>
                  item.collection === product.collection ? (
                    <p key={item.id} className={styles.product_card__description}>
                      {item.title}
                    </p>
                  ) : (
                    <></>
                  )
                )}
              </div>
              <div className={styles.product_card__info}>
                <p className={styles.product_card__collection}>
                  Коллекция {product.collection}
                </p>
                <p className={styles.product_card__price}>
                  {product.price} <span>₽/м²</span>
                </p>
                <Link
                  to="contacts"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={300}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={300}
                >
                  <button className={styles.product_card__button}>
                    РАССЧИТАТЬ
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
