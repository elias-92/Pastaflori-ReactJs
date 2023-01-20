import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

const firebaseConfig = {
	
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
reportWebVitals();
