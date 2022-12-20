import {Route, Routes, Navigate} from 'react-router-dom';
import {ItemListContainer} from '../Components/ItemListContainer';
import {useEffect, useState} from 'react';
import {consultApi, API_Endpoints, API_Method} from '../Service/ApiService';
import {ItemDetail} from '../Components/ItemDetail';

export const Router = () => {
	const [arrItem, setArrItem] = useState([]);

	useEffect(() => {
		consultApi(API_Endpoints.ITEMS, API_Method.GET).then((respuesta) => {
			setArrItem(respuesta.data);
		});
	}, []);

	return (
		<div>
			<Routes>
				<Route path="*" element={<Navigate to={'/home'} />} />
				<Route path="/home" element={<h1>Home</h1>} />
				<Route
					path="/store"
					element={<ItemListContainer arrItems={arrItem} />}
				/>
				<Route path="/store/:id" element={<ItemDetail arrItems={arrItem} />} />
				<Route path="/brides" element={<h1>Brides</h1>} />
				<Route path="/abuot-us" element={<h1>About-us</h1>} />
				<Route path="/find-us-at" element={<h1>Find us at</h1>} />
			</Routes>
		</div>
	);
};
