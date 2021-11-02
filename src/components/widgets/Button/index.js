import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './index.css';

const Button = ({ className, name, onClick, disabled, ...props }) => {
	let _onClick = (e, ...args) => {
		e.preventDefault();
		if (!disabled) {
			onClick(...args);
		}
	};

	return (
		<button
			name={name}
			className={cx('button', className)}
			disabled={disabled}
			onClick={_onClick}
		>
			{props.children}
		</button>
	);
};

Button.propTypes = {
	name: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	children: PropTypes.any,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	disabled: false
};

export default Button;
