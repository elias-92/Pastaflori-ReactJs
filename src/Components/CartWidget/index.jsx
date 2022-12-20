import styles from './cart.module.css';

export const CartWidget = ({numberOfItems = 0, onHandlerModal}) => {
	return (
		<div onClick={onHandlerModal}>
			<img
				className={styles.shoppingCart}
				src={`${process.env.PUBLIC_URL}/assets/images/shopping-cart.svg`}
				alt="shopping cart"
			/>
			<span>{numberOfItems}</span>
		</div>
	);
};
