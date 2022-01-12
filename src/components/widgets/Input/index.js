import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './index.css';

const Input = ({
	label,
	labelClass,
	type,
	disabled,
	className,
	name,
	value,
	error,
	onChange,
	min,
	max,
	step,
}) => {
	const onInputChange = (e) => {
		!disabled && onChange(e);
	};

	const numberInputProps = type === 'number' ? { min, max, step } : {};

	return (
		<label className={cx('inputContainer', error && 'error')}>
			{label && <span className={cx('icon', labelClass)}>{label}</span>}
			<input
				name={name}
				type={type}
				value={value}
				className={cx('input', disabled && 'disabled', className)}
				onChange={onInputChange}
				{...numberInputProps}
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
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	name: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	error: PropTypes.string,
	disabled: PropTypes.bool,
	className: PropTypes.string,
	labelClass: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

export default Input;
