import styles from "./Description.module.sass";

export default function Description() {
  return (
    <section className={styles.description}>
      <h3 className={styles.description_title}>
        Ассортимент гибкой черепицы <span>Shinglas</span>
      </h3>
      <div className={styles.description_wrapper}>
        <p className={styles.description_subtitle}>
          Одним из товаров, которые успешно представляет на рынке стройматериалов известная корпорация Технониколь, является мягкая битумная черепица Шинглас. Производство осуществляется в соответствии с международными стандартами, контроль продукции выполняется на каждом уровне, поэтому она полностью соответствует европейским требованиям.
        </p>
      </div>
      <div className={styles.description_wrapper}>
        <h3 className={`${styles.description_title}`}>
          Продукция от Технониколь завоевала доверие многих клиентов
        </h3>
        <div className={styles.description_wrapper}>

          <p className={styles.description_subtitle}>
            Благодаря надежности материала, изготовленного на основе стеклохолста (не боится коррозии и гниения), пропитанного с обеих сторон модифицированным битумом, что обеспечивает стойкость к перепадам температур.
          </p>
          <p className={styles.description_subtitle}>
            Лицевая сторона покрыта цветной посыпкой, в качестве которой выступает базальтовый гранулянт, предотвращающий воздействие ультрафиолета и обладающий отличными шумопоглощающими свойствами.
          </p>
          <p className={styles.description_subtitle}>
            Со внутренней стороны покрыта самоклеящимся слоем, благодаря которому, монтаж не требует особых усилий. Защитная пленка, прикрывающая самоклеящийся слой защищает от механических повреждений при хранении и перевозке.
          </p>
          <p className={styles.description_subtitle}>
            При изготовлении используются материалы высокого качества от всемирно известных производителей.
          </p>
          <p className={styles.description_subtitle}>
            Прежде, чем покупать мягкую кровлю Шинглас, стоит тщательно изучить основные линейки торгового бренда.
          </p>
        </div>
      </div>
      {/* <div className={styles.description_percentages}>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon1.png"
            alt="ГИДРАЦИОННЫЕ ДОБАВКИ"
          />
          <p className={styles.description_item_number}>2 .5%</p>
          <p className={styles.description_item_text}>ГИДРАЦИОННЫЕ ДОБАВКИ</p>
        </div>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon2.png"
            alt="ДЕРЕВЯННАЯ СТРУЖКА"
          />
          <p className={styles.description_item_number}>24 %</p>
          <p className={styles.description_item_text}>ДЕРЕВЯННАЯ СТРУЖКА</p>
        </div>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon3.png"
            alt="ВОДА"
          />
          <p className={styles.description_item_number}>8 .5%</p>
          <p className={styles.description_item_text}>ВОДА</p>
        </div>
        <div className={styles.description_item}>
          <img
            className={styles.description_item_img}
            src="/images/icon4.png"
            alt="ПОРТЛАНД-ЦЕМЕНТ"
          />
          <p className={styles.description_item_number}>65 %</p>
          <p className={styles.description_item_text}>ПОРТЛАНД-ЦЕМЕНТ</p>
        </div>
      </div> */}
    </section>
  );
}
