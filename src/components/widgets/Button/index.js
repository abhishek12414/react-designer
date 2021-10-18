import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './index.scss';

const Button = ({ className, name, onClick, ...props }) => {
	let _onClick = (e, ...args) => {
		e.preventDefault();
		onClick(...args);
	};

	return (
		<button name={name} className={cx('button', className)} onClick={_onClick}>
			{props.children}
		</button>
	);
};

Button.propTypes = {
	name: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.any,
	onClick: PropTypes.func,
};

export default Button;
