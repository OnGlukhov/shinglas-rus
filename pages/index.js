import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import FirstScreen from '../components/FirstScreen/FirstScreen'
import Description from '../components/Description/Description'
import OrderCall from '../components/OrderCall/OrderCall'
import Сatalog from '../components/Сatalog/Сatalog'
import Advantages from '../components/Advantages/Advantages'
import Examples from '../components/Examples/Examples'
import Contacts from '../components/Contacts/Contacts'
import Footer from '../components/Footer/Footer'

export default function Home() {
	const [width, setWidth] = useState(null)
	useEffect(() => {
		if (!width) setWidth(window.innerWidth)

		addEventListener('resize', () => {
			setWidth(window.innerWidth)
		})
	}, [])
	return (
		<div className={styles.container}>
			<Head>
				<title>Купить мягкую кровлю, гибкую черепицу Технониколь Шинглас в Москве и МО</title>
				<meta name='description' content='Купить мягкую кровлю, гибкую черепицу Технониколь Шинглас (Shinglas)в Москве и МО с доставкой недорого позволит наша низкая цена. Большой выбор!' />
				<meta name='keywords' content='кровля технониколь цена, шинглас купить, шинглас цена, черепица технониколь цена, технониколь кровля купить, мягкая кровля технониколь цены, черепица технониколь купить, гибкая черепица технониколь цена, купить черепицу шинглас, shinglas, купить, интернет, магазин, цена, москва, мо, московская область, недорого, дешево, с доставкой' />
				<link rel='icon' href='/images/logo.png' />
			</Head>
			<Header width={width} />
			<FirstScreen />
			<Description />
			<OrderCall />
			<Сatalog width={width} />
			<Advantages />
			<Examples />
			<Contacts />
			<div style={{ position: 'relative', overflow: 'hidden' }}><a href="https://yandex.ru/maps/213/moscow/house/proyektiruyemy_proyezd_134_vl4/Z04YcgJmTUUBQFtvfXpzdXhrYA==/?from=mapframe&ll=37.456405%2C55.624484&utm_medium=mapframe&utm_source=maps&z=17" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Проектируемый проезд № 134, вл4 на карте Москвы — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUyjEgUpD" width="100%" height="500" frameborder="1" allowfullscreen="true" style={{ position: 'relative', border: 'none' }}></iframe></div>
			<Footer />
		</div>
	)
}
