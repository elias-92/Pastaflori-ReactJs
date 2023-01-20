import {Route, Routes, Navigate} from 'react-router-dom';
import {ItemListContainer} from '../Components/ItemListContainer';
import {useEffect, useState} from 'react';
import {Detail} from '../pages/detail';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import { Cart } from '../pages/cart';

export const Router = () => {
	const [arrItem, setArrItem] = useState([]);

	useEffect(() => {
		const db = getFirestore();
		const products = collection(db, 'products');
		getDocs(products)
			.then((snapshot) => {
				if (snapshot.size === 0) {
					console.log('No results found');
					setArrItem([]);
				} else {
					const result = snapshot.docs.map((doc) => doc.data());
					setArrItem(result);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<Routes>
				<Route exact path="*" element={<Navigate to={'/home'} />} />
				<Route exact path="/home" element={<h1>Home</h1>} />
				<Route
					exact
					path="/store"
					element={<ItemListContainer arrItems={arrItem} />}
				/>
				<Route
					exact
					path="/products/:id"
					element={<Detail />}
				/>
				<Route path="/cart" element={<Cart />} />
				<Route exact path="/brides" element={<h1>Brides</h1>} />
				<Route exact path="/abuot-us" element={<h1>About-us</h1>} />
				<Route exact path="/find-us-at" element={<h1>Find us at</h1>} />
			</Routes>
		</div>
	);
};
