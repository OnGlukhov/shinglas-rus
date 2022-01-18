import styles from "./FirstScreen.module.sass";
import { Link } from "react-scroll";

export default function FirstScreen() {
  return (
    <section className={styles.firstScreen} id="main">
      <div className={styles.firstScreen_wrapper_block}>
        <div className={styles.firstScreen_block}>
          <div
            className={`${styles.firstScreen_line} ${styles.fadeInLeft}`}
          ></div>

          <h1 className={styles.firstScreen_title}>
            Гибкая черепица <span className={styles.firstScreen_span}>Shinglas</span>
          </h1>
          <p className={styles.firstScreen_subtitle}>
            Однослойная и многослойная черепица
          </p>
          <h1 className={styles.firstScreen_title}>
            от 347 руб/м2
          </h1>
          <p className={styles.firstScreen_subtitle}>
            <img src={'/images/current-black.png'} />
            Прямые поставки от производителя
          </p>
          <p className={styles.firstScreen_subtitle}>
            <img src={'/images/current-black.png'} />
            Низкие цены
          </p>
          <p className={styles.firstScreen_subtitle}>
            <img src={'/images/current-black.png'} />
            Доставка по всей России
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
            <button className={styles.firstScreen_button}>
              ОСТАВИТЬ ЗАЯВКУ
            </button>
          </Link>
        </div>
      </div>

      {/* <div className={styles.over}></div> */}
      <div className={styles.firstScreen_wrapper}></div>
    </section>
  );
}
