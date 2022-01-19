import styles from './Burger.module.sass'
import React from 'react'
import { contacts } from '../../data/contacts'


export default function Burger() {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <>
      <div onClick={() => setIsActive(!isActive)} className={styles.burger_icon}>
        <nav>
          <img src="/images/icons8-menu.svg" />
        </nav>
      </div>
      <nav className={isActive ? `${styles.burger} ${styles.active}` : `${styles.burger}`}>
        <ul className={styles.burger_list}>
          <li onClick={() => setIsActive(!isActive)} className={styles.burger_list_item}><a href='#main'>ГЛАВНАЯ</a></li>
          <li onClick={() => setIsActive(!isActive)} className={styles.burger_list_item}><a href='#catalog'>КАТАЛОГ И ЦЕНЫ</a></li>
          <li onClick={() => setIsActive(!isActive)} className={styles.burger_list_item}><a href='#advantages'>ПРЕИМУЩЕСТВА</a></li>
          <li onClick={() => setIsActive(!isActive)} className={styles.burger_list_item}><a href='#examples'>ПРИМЕРЫ</a></li>
          <li onClick={() => setIsActive(!isActive)} className={styles.burger_list_item}><a href='#contacts'>КОНТАКТЫ</a></li>
        </ul>
        <ul className={`${styles.burger_list} ${styles.margin}`}>
          <a onClick={() => setIsActive(!isActive)} className={styles.burger_list_tel} href={`tel:${contacts.phone}`}>{contacts.phone}</a>
          <p className={styles.burger_list_address}>{contacts.address}</p>
          <img s className={styles.burger_list_logo} src='/images/logo.png' />
        </ul>

      </nav>
      {isActive ? <div onClick={() => setIsActive(!isActive)} className={styles.overlay}></div> : ''}
    </>

  )
}