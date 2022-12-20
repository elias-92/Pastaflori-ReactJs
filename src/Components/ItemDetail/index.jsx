import {React} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import styles from './itemDetail.module.css';

export const ItemDetail = ({arrItems}) => {
	const {id} = useParams();

	const {name, description, price, img} = arrItems[id - 1];

	return (
		<>
			<div className={styles.card}>
				<img src={img} alt={name} className={styles.cardImg} />
				<div className={styles.contenidoCard} key={id}>
					<h3 className={styles.titleCards}>{name}</h3>
					<p className="card-text">{description}</p>
					<p className="card-text">$ {price}</p>
					<NavLink to={`${id}`}>
						<label className="btn btn-primary">Add to shopping cart</label>
					</NavLink>
				</div>
			</div>
		</>
	);
};
