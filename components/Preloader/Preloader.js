import React from 'react'
import styles from './Preloader.module.sass'

export default function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.cssload_loader}>
        <div className={`${styles.cssload_inner} ${styles.cssload_one}`}></div>
        <div className={`${styles.cssload_inner} ${styles.cssload_two}`}></div>
        <div className={`${styles.cssload_inner} ${styles.cssload_three}`}></div>
      </div>
      {/* <div className={styles.preloader_body}>
        <div id={styles.loadingProgressG}>
          <div
            className={styles.loadingProgressG}
            id='loadingProgressG_1'
          ></div>
        </div>
      </div> */}
    </div>
  )
}
