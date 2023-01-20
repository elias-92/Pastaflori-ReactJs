import {React} from 'react';
import styles from './itemCard.module.css';

export const ItemCard = ({
	item,
	onSelect,
	type = 'vCard',
	descreaseQty,
	increaseQty,
	numberOfItem,
}) => {
	const {id, description, image, name, price, stock} = item || {};
	return (
		<div
			className={type === 'vCard' ? styles.card : styles.cardMax}
			onClick={() => onSelect(item)}
		>
			<img className={styles.cardImage} src={image} alt={name} />
			<div className={styles.cardContent}>
				<h3 className={styles.cardName}>{name}</h3>
				<p className={styles.cardDescription}>{description}</p>
				<p className={styles.cardPrice}>${price}</p>
				<p className={styles.cardStock}>
					<b>{stock}</b> in stock
				</p>
			</div>
			{type === 'mCard' && (
				<div className={styles.cardButtonContainer}>
					<button
						disabled={numberOfItem === 0}
						onClick={() => descreaseQty(id)}
						className={styles.cardButtonMinus}
					>
						-
					</button>
					<input
						disabled
						className={styles.cardInput}
						type="text"
						value={numberOfItem}
					/>
					<button
						onClick={() => increaseQty(id)}
						className={styles.cardButtonPlus}
						disabled={numberOfItem === stock}
					>
						+
					</button>
				</div>
			)}
		</div>
	);
};
