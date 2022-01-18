import styles from "./Advantages.module.sass";
export default function Advantages() {
  return (
    <section className={styles.advantages} id="advantages">
      <h3 className={styles.advantages_title}>
        Преимущества черепицы <span>Shinglas</span>
      </h3>
      <div className={styles.advantages_percentages}>
        <div className={styles.advantages_item}>
          <div className={`${styles.color_red} linearicons-lamp`} />
          <p className={styles.advantages_item_number}>Надёжный производитель</p>
          <p className={styles.advantages_item_text}>Корпорация Технониколь на протяжении 26 лет выпускает качественные и надёжные строительные материалы, зарекомендовав себя ответственным производителем.</p>
        </div>
        <div className={styles.advantages_item}>
          <div className={`${styles.color_red} linearicons-fire`} />
          <p className={styles.advantages_item_number}>Пожаробезопасный материал</p>
          <p className={styles.advantages_item_text}>Теплостойкость черепицы Shinglas составляет не менее 110°C, а сам материал обладает самозатухающими свойствами, то есть не поддерживает активное горение.</p>
        </div>
        <div className={styles.advantages_item}>
          <div className={`${styles.color_red} linearicons-archery`} />
          <p className={styles.advantages_item_number}>Срок службы</p>
          <p className={styles.advantages_item_text}>Мы уверены в качестве нашей продукции и поэтому предоставляем всем нашим клиентам официальную гарантию на черепицу от 20 до 60 лет в зависимости от серии.</p>
        </div>
        <div className={styles.advantages_item}>
          <div className={`${styles.color_red} linearicons-list3`} />
          <p className={styles.advantages_item_number}>Большой ассортимент</p>
          <p className={styles.advantages_item_text}>Линейка гибкой черепицы Shinglas представлена из 19 коллекций. Из 80 разных оттенков вы сможете подобрать черепицу по цене, инженерным и дизайнерским особенностям.</p>
        </div>
        <div className={styles.advantages_item}>
          <div className={`${styles.color_red} linearicons-rank3`} />
          <p className={styles.advantages_item_number}>Трёхмерный цвет и фактура</p>
          <p className={styles.advantages_item_text}>Многослойная черепица состоит из нескольких слоёв сверхпрочного стеклохолста, кровельного битума и базальтовой посыпки.</p>
        </div>
        <div className={styles.advantages_item}>
          <div className={`${styles.color_red} linearicons-rain`} />
          <p className={styles.advantages_item_number}>Надёжная гидроизоляция</p>
          <p className={styles.advantages_item_text}>Современное производство довело до совершенства применения битума, соединив надёжные материалы: стеклохолст, кровельный (улучшенный) битум и природный базальт.</p>
        </div>
      </div>

    </section>
  );
}
