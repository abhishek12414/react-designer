import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './index.css';

const Button = ({ className, children, name, onClick, style, ...props }) => {
	let _onClick = (e, ...args) => {
		e.preventDefault();
		onClick(...args);
	};

	return (
		<button
			name={name}
			className={cx('button', className)}
			onClick={_onClick}
			style={style}
			{...props}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	name: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	children: PropTypes.any,
	onClick: PropTypes.func,
};

export default Button;
