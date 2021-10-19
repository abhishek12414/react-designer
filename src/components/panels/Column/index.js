import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './index.scss';
import Input from '../../widgets/Input';

const Column = ({
	showIf,
	type,
	disabled,
	className,
	children,
	value,
	label,
	onChange,
}) => {
	if (!showIf) {
		return <div className={'empty'} />;
	}

	return (
		<div className={cx('column', className)}>
			{children || (
				<Input
					type={type}
					label={label}
					value={value}
					disabled={disabled}
					onChange={(e) => onChange(e.target.value)}
				/>
			)}
			{/* {label && <div style={styles.inputHelper}>{label}</div>} */}
		</div>
	);
};

Column.propTypes = {
	showIf: PropTypes.bool,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	label: PropTypes.string,
	onChange: PropTypes.func,
};

Column.defaultProps = {
	showIf: true,
};

export default Column;
