import React from 'react';
import './App.css';
import {Header} from './Components/Header';
import { Router } from './Router/router';
export const App = () => {
	return (
		<div className={App}>
			<Header />
			<Router />
		</div>
	);
};
