import React, {useState, useContext, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import styles from './itemDetail.module.css';
import {CartContext} from '../../context';
import {collection, getDocs, getFirestore, query} from 'firebase/firestore';
import {firebaseServices} from '../../services/firebase';
import {ItemCard} from '../../Components/ItemCard';

const {getProductById} = firebaseServices;

export const Detail = () => {
	const [product, setProduct] = useState(null);
	const {id} = useParams() || {};

	const {
		onDecreaseItem,
		onIncreaseItem,
		getItemQuantity,
		products,
		setProducts,
	} = useContext(CartContext);

	useEffect(() => {
		getProductById(id).then((product) => {
			setProduct(product[0]);
		});
	}, [id]);

	useEffect(() => {
		if (products.length === 0) {
			const db = getFirestore();
			const q = query(collection(db, 'products'));
			getDocs(q)
				.then((snapshot) => {
					snapshot.forEach((doc) => {
						setProducts((prev) => [...prev, doc.data()]);
					});
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [products.length, setProducts]);

	return (
		<div className={styles.detailContainer}>
			{product ? (
				<ItemCard
					item={product}
					key={product?.name}
					onSelect={() => {}}
					type="mCard"
					descreaseQty={onDecreaseItem}
					increaseQty={onIncreaseItem}
					numberOfItem={getItemQuantity(product?.id)}
				/>
			) : (
				<Link to="/" className={styles.buttonCart}>
					Go Home
				</Link>
			)}
		</div>
	);
};
