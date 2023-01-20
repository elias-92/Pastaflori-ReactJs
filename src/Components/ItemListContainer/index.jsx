import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ItemCard} from '../ItemCard';
import styles from './itemListContainer.module.css';

export const ItemListContainer = ({arrItems}) => {
	const [arrItem, setArrItems] = useState(arrItems);
	const filteredItems = (catItem) => {
		const result = arrItems.filter((item) => {
			return item.category === catItem;
		});
		setArrItems(result);
	};
	const navigate = useNavigate();
	const onHandlerSelect = (product) => {
		navigate(`/products/${product.id}`, {state: product});
	};
	return (
		<div className={styles.containerProducts}>
			<h4 className={styles.title}>List products</h4>
			<div className={styles.containerBtn}>
				<button className={styles.btn} onClick={() => setArrItems(arrItems)}>
					All
				</button>
				<button
					className={styles.btn}
					onClick={() => filteredItems('chocolate')}
				>
					Chocolate
				</button>
				<button className={styles.btn} onClick={() => filteredItems('vanilla')}>
					Vanilla
				</button>
				<button
					className={styles.btn}
					onClick={() => filteredItems('birthdayCake')}
				>
					Birthday Cake
				</button>
				<button
					className={styles.btn}
					onClick={() => filteredItems('dryPastries')}
				>
					Dry pastries
				</button>
			</div>
			<div className="row mt-5">
				{arrItem.map((product) => (
					<div className="col-md-4 col-sm-12">
						<ItemCard
							item={product}
							key={product.id}
							onSelect={onHandlerSelect}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
