import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './index.scss';

const Input = ({ label, type, disabled, className, name, value, onChange }) => {
	const onInputChange = (e) => {
		!disabled && onChange(e);
	};

	return (
		<label className="inputContainer">
			{label && <span className="icon">{label}</span>}
			<input
				name={name}
				type={type}
				value={value}
				className={cx('input', disabled && 'disabled', className)}
				onChange={onInputChange}
			/>
		</label>
	);
};

Input.defaultProps = {
	type: 'text',
	name: '',
	disabled: false,
};

Input.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	disabled: PropTypes.bool,
	className: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

export default Input;