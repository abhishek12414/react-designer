import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './index.css';

const Checkbox = ({ name, value, onChange }) => {
	return (
		<label className={cx('rdSwitch')}>
			<input
				name={name}
				type="checkbox"
				value={value}
				onChange={({ target: { name, checked } }) =>
					onChange({ [name]: checked })
				}
			/>
			<span className={cx('rdSlider round')}></span>
		</label>
	);
};

Checkbox.propTypes = {
	name: PropTypes.string,
	value: PropTypes.bool,
	onChange: PropTypes.func,
};

export default Checkbox;
