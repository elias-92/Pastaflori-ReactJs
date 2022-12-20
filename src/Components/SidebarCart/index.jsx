import React from 'react';
import styles from './sidebarCart.module.css';

export const SidebarCart = ({children, onClose, isOpen}) => {
	return (
		<div
			className={styles.sidebar}
			style={{
				transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
			}}
		>
			<div className="close-button-container">
				<button onClick={onClose} className="close-button">
					X
				</button>
			</div>
			{children}
		</div>
	);
};
