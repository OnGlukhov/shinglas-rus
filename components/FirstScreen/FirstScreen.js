import styles from "./FirstScreen.module.sass"
import { Link } from "react-scroll"
import { motion } from 'framer-motion'
import { animations } from '../../styles/animations'

export default function FirstScreen() {
  return (
    <section className={styles.firstScreen} id="main">
      <div className={styles.firstScreen_wrapper_block}>
        <div className={styles.firstScreen_block}>
          <motion.div

            initial='initial'
            animate='animate'
            exit='exit'
            variants={animations.line.variants}
            transition={animations.line.transition}
            className={`${styles.firstScreen_line} ${styles.fadeInLeft}`}
          ></motion.div>

          <motion.h1
            initial='initial'
            animate='animate'
            exit='exit'
            variants={animations.slideUp.variants}
            transition={animations.slideUp.transition}
            className={styles.firstScreen_title}>
            Гибкая черепица <span className={styles.firstScreen_span}>Shinglas</span>
          </motion.h1>
          <motion.p
            initial='initial'
            animate='animate'
            exit='exit'
            variants={animations.slideUp.variants}
            transition={animations.slideUp.transition}
            className={styles.firstScreen_subtitle}>
            Однослойная и многослойная черепица
          </motion.p>
          <motion.h1
            initial='initial'
            animate='animate'
            exit='exit'
            variants={animations.slideUp.variants}
            transition={animations.slideUp.transition} className={styles.firstScreen_title}>
            от 347 руб/м2
          </motion.h1>
          <motion.p
            initial='initial'
            animate='animate'
            exit='exit'
            variants={animations.slideUp.variants}
            transition={animations.slideUp.transition} className={styles.firstScreen_subtitle}>
            <img src={'/images/current-black.png'} />
            Прямые поставки от производителя
          </motion.p>
          <motion.p
            initial='initial'
            animate='animate'
            exit='exit'
            variants={animations.slideUp.variants}
            transition={animations.slideUp.transition} className={styles.firstScreen_subtitle}>
            <img src={'/images/current-black.png'} />
            Низкие цены
          </motion.p>
          <motion.p
            initial='initial'
            animate='animate'
            exit='exit'
            variants={animations.slideUp.variants}
            transition={animations.slideUp.transition} className={styles.firstScreen_subtitle}>
            <img src={'/images/current-black.png'} />
            Доставка по всей России
          </motion.p>
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
