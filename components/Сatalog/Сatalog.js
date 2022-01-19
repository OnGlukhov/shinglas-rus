import styles from './Сatalog.module.sass'
import { products } from '../../data/products'
import React, { useState } from 'react'
import Size from '../Size/Size'
import Dropdown from '../Dropdown/Dropdown'
import { Link } from "react-scroll"

export default function Сatalog({ width }) {
	const [productsFilter, setProductsFilter] = React.useState(products.filter(i => i.collection === 'Фокстрот'))
	const [button, setButton] = React.useState('Фокстрот')
	const [indexProduct, setIndexProduct] = React.useState(0)

	const indexItem = index => {
		setButton(index)
	}

	const filterProducts = collection => {
		setProductsFilter(products.filter(i => i.collection === collection))
		setIndexProduct(0)

	}

	return (
		<section className={styles.catalog} id='catalog'>
			<h1 className={styles.catalog_title}>
				Размеры и цены <span>ЦСП</span> плит
			</h1>
			<p className={styles.catalog_subtitle}>
				У нас представлены фанера разных размеров и производителей
			</p>
			<div className={styles.catalog_size}>
				{width > 900 ?
					<Size
						filterProducts={filterProducts}
						indexItem={indexItem}
						button={button}
					/> :
					<Dropdown
						filterProducts={filterProducts}
						indexItem={indexItem}
						button={button}
					/>
				}
				<div>

				</div>
			</div>
			<div className={styles.catalog_products}>
				{productsFilter.map((product, i) => (
					<div key={product.id} className={styles.catalog_product}>
						<ul className={styles.catalog_product__list_color}>
							{product.img.small.map((img, index) => (
								<li key={index} className={styles.catalog_product__color}>
									<div style={{ position: 'relative' }}>
										<img className={styles.catalog_product__color__img} onClick={() => setIndexProduct(index)} src={img.image} />
										<img className={indexProduct === index ? `${styles.catalog_product__current}` : `${styles.none}`} src={'/images/current.png'} />
									</div>
									<p className={styles.catalog_product__text}>{img.color}</p>
								</li>
							))}
						</ul>
						<div className={styles.product_card}>
							<div>
								<img className={styles.product_card__img} src={product.img.big[indexProduct]} />
								<p className={styles.product_card__description}>{product.title}</p>
							</div>
							<div className={styles.product_card__info}>
								<p className={styles.product_card__collection}>Коллекция {product.collection}</p>
								<p className={styles.product_card__price}>{product.price.value} <span>{product.price.key}</span></p>
								<Link
									to="contacts"
									spy={true}
									smooth={true}
									hashSpy={true}
									duration={300}
									isDynamic={true}
									ignoreCancelEvents={false}
									spyThrottle={300}>
									<button className={styles.product_card__button}>
										РАССЧИТАТЬ</button></Link>
							</div>
						</div>


					</div>
				))
				}

			</div>
		</section>
	)
}
