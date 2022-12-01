import styles from './cart.module.css';

export const CartWidget = () => {
	return (
		<div>
			<img
				className={styles.shoppingCart}
				src={`${process.env.PUBLIC_URL}/assets/images/shopping-cart.svg`}
				alt="shopping cart"
			/>
			<span>2</span>
		</div>
	);
};
