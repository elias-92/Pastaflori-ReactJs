import React, {useContext} from 'react';
import styles from './header.module.css';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context';

export const Header = ({onHandlerCart}) => {
	const {cart} = useContext(CartContext);
	return (
		<nav>
			<div className={styles.container}>
				<Link to="/home">
					<img
						className={styles.logo}
						src={`${process.env.PUBLIC_URL}/assets/images/logo-pastaflori.png`}
						alt="logo"
					/>
				</Link>
				<ul className={styles.navUl}>
					<li className={styles.navItem}>
						<Link to="/home" className={styles.navLink}>
							Home
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link className={styles.navLink} to="/store">
							Store
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link to="/brides" className={styles.navLink}>
							Brides
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link to="/abuot-us" className={styles.navLink}>
							About Us
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link to="/find-us-at" className={styles.navLink}>
							Find us at
						</Link>
					</li>
				</ul>
				<div className={styles.shoppingCartContainer} onClick={onHandlerCart}>
					<img
						className={styles.shoppingCart}
						src={`${process.env.PUBLIC_URL}/assets/images/shopping-cart.png`}
						alt="shopping cart"
					/>
					<div className={styles.shoppingCartNumberContainer}>
						<span className={styles.shoppingCartNumber}>{cart.length}</span>
					</div>
				</div>
			</div>
		</nav>
	);
};
