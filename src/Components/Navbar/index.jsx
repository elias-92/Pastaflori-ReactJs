import styles from './navbar.module.css';
import {CartWidget} from '../CartWidget';
import {Link} from 'react-router-dom';

export const Navbar = () => {
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
				<CartWidget />
			</div>
		</nav>
	);
};
