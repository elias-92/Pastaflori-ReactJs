import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context';
import {CartItem} from '../../Components/CartItem';
import styles from './cart.module.css';
import {firebaseServices} from '../../services/firebase';

const {createOrder} = firebaseServices;

export const Cart = () => {
	const {cart, total, onRemoveItem, clearCart} = useContext(CartContext);
	const [orderResult, setOrderResult] = useState();
	const onHandlerOrder = async () => {
		const newOrder = {
			buyer: {
				name: 'Comprador',
				email: 'comprador@gmail.com',
				phone: '123456789',
				shippingMethod: 'delivery',
				address: 'Av siempre viva 123',
			},
			createdAt: new Date(),
			id: 1,
			items: cart,
			payment: {
				currency: 'USD',
				method: 'cash',
				type: 'cash',
			},
			seller: {
				id: 1,
				name: 'elias',
				phone: '123456789',
				email: 'elias@gmail.com',
			},
			shipping: {
				deliveryDate: new Date() + 7,
				trackingNumber: '123456789',
				type: 'delivery',
			},
			total: total,
		};
		const result = await createOrder(newOrder);
		setOrderResult(result);
		clearCart();
	};
	console.log('orderResult', orderResult);
	return (
		<div className={styles.cart}>
			<h1>Cart</h1>
			<div className={styles.cartContent}>
				{cart.length > 0 ? (
					<>
						{cart.map((item) => (
							<CartItem key={item.id} {...item} onRemoveItem={onRemoveItem} />
						))}
						<div className={styles.buttonContainerOrder}>
							<button
								type="button"
								className={styles.buttonCart}
								onClick={onHandlerOrder}
							>
								Order now
							</button>
						</div>
					</>
				) : (
					<div className={styles.cartEmptyContainer}>
						<h2>Cart is empty</h2>
						<div className={styles.buttonContainer}>
							<Link to="/store" className={styles.buttonCart}>
								Store
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
