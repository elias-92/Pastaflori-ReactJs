import {React} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './itemCard.module.css';

export const ItemCard = ({item}) => {
	const {name, description, price, id, img} = item;

	return (
		<>
			<div className={styles.card}>
				<img src={img} alt={name} className={styles.cardImg}  />
				<div className={styles.contenidoCard} key={id}>
					<h3 className={styles.titleCards}>{name}</h3>
					<p className="card-text">{description}</p>
					<p className="card-text">$ {price}</p>
					<NavLink to={`${id}`}>
						<label className="btn btn-primary">More details</label>
					</NavLink>
				</div>
			</div>
		</>
	);
};
