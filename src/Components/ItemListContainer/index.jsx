import React, {useState} from 'react';
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
	return (
		<>
			<div className="container pt-5">
				<h4 className="text-center">List products</h4>
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
					<button
						className={styles.btn}
						onClick={() => filteredItems('vanilla')}
					>
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
					{arrItem.map((app) => (
						<div className="col-md-4 col-sm-12">
							<ItemCard item={app} key={app.id} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};
