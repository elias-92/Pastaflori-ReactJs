import React, {useContext} from 'react';
import styles from './sidebarCart.module.css';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context';
import {CartItem} from '../CartItem';

export const SidebarCart = ({ onClose, isOpen}) => {
	const {cart, total, onRemoveItem} = useContext(CartContext);
	return (
		<div
			className={styles.sidebar}
			style={{
				transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
			}}
		>
			<div className={styles.closeButtonContainer}>
				<button onClick={onClose} className={styles.closeButton}>
					X
				</button>
			</div>
			<div className={styles.cartContainer}>
				{cart.length === 0 ? (
					<p className={styles.emptyCart}>Your cart is empty</p>
				) : (
					cart.map((item) => (
						<CartItem key={item.id} {...item} onRemoveItem={onRemoveItem} />
					))
				)}
				<p className={styles.total}>Total:</p>
				<h2>${total}</h2>
				<Link to="/cart" className={styles.buttonCart}>
					Go to Cart
				</Link>
			</div>
		</div>
	);
};
