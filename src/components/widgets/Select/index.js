import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './index.css';

const Select = ({
	className,
	options,
	name,
	value,
	onChange,
	error,
	...rest
}) => {
	const getOptions = () => {
		let clusterOptions = [];
		if (typeof options[0] === 'string') {
			clusterOptions = options.map((data, index) => (
				<option key={index} value={data}>
					{data}
				</option>
			));
		} else {
			clusterOptions = options.map(({ label, value }, index) => (
				<option key={index} value={value}>
					{label}
				</option>
			));
		}

		return (
			<>
				<option value="">Select Option</option>
				{clusterOptions}
			</>
		);
	};

	return (
		<select
			name={name}
			className={cx('rdSelect', className, error && 'error')}
			value={value}
			onChange={onChange}
			{...rest}
		>
			{getOptions()}
		</select>
	);
};

Select.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	options: PropTypes.array,
	error: PropTypes.string,
	className: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
	options: [],
	name: '',
};

export default Select;
