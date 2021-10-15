import React from 'react';
import styles from './index.module.css';

const Button = ({ style, name, onClick, ...props }) => {
	let _onClick = (e, ...args) => {
		e.preventDefault();
		onClick(...args);
	};

	return (
		<button name={name} className={[styles.button, style]} onClick={_onClick}>
			{props.children}
		</button>
	);
};

export default Button;
