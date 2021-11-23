import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../../shared/Icon';
import './index.css';

const Checkbox = ({ name, value, onChange, hasIconSwitch }) => {
	return (
		<label className={cx('rdSwitch', hasIconSwitch ? 'iconSwitch' : '')}>
			<input
				name={name}
				type="checkbox"
				className="hidden"
				checked={value ?? false}
				onChange={({ target: { name, checked } }) =>
					onChange({ [name]: checked })
				}
			/>
			{!hasIconSwitch ? (
				<span className={cx('rdSlider round')}></span>
			) : value ? (
				<Icon icon="eye-off" size={16} style={{ marginTop: 2 }} />
			) : (
				<Icon icon="eye-on" size={16} style={{ marginTop: 2 }} />
			)}
		</label>
	);
};

Checkbox.propTypes = {
	name: PropTypes.string,
	value: PropTypes.bool,
	onChange: PropTypes.func,
	hasIconSwitch: PropTypes.bool,
};

export default Checkbox;
