import React from 'react';
import styles from './cartItem.module.css';

export const CartItem = ({id, image, name, price, quantity, onRemoveItem}) => {
	return (
		<div className={styles.cartItem}>
			<div className={styles.cartItemContent}>
				<img className={styles.cartItemImage} src={image} alt={name} />
				<div className={styles.cartItemDetails}>
					<h3 className={styles.cartItemName}>{name}</h3>
					<p className={styles.cartItemPrice}>${price}</p>
					<p className={styles.cartItemQuantity}>Qty: {quantity}</p>
				</div>
			</div>
			<div className={styles.cartItemActions}>
				<button
					className={styles.cartItemRemove}
					onClick={() => onRemoveItem(id)}
				>
					X
				</button>
			</div>
		</div>
	);
};
