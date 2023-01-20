import React, {useState} from 'react';
import './App.css';
import {SidebarCart} from './Components/SidebarCart';
import {Header} from './Components/Header';
import {Router} from './Router/router';
import {CartProvider} from './context';

export const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const onHandlerCart = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={App}>
			<CartProvider>
				<SidebarCart onClose={onHandlerCart} isOpen={isOpen} />
				<Header onHandlerCart={onHandlerCart} />
				<Router />
			</CartProvider>
		</div>
	);
};
