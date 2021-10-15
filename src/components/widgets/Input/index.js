import React from 'react';
import styles from './index.module.css';

const Input = ({ type, style, name, value, onChange }) => {
	return (
		<input
			name={name}
			type={type}
			value={value}
			className={[styles.input, style]}
			onChange={onChange}
		/>
	);
};

Input.defaultProps = {
	type: 'text',
	name: '',
};

export default Input;
