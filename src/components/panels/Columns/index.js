import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './index.css';

const Columns = ({
	rowInline,
	inline,
	showIf,
	label,
	children,
	spaceBetween,
	className,
}) => {
	if (!showIf) {
		return <div className={'empty'} />;
	}

	return (
		<div
			className={cx(
				'rdColumns',
				rowInline && 'rdColumns__inline',
				spaceBetween && 'rdColumns__spaceBetween',
				className
			)}
		>
			{label && <label className="rdColumns__title">{label}</label>}
			<div className={cx(inline ? 'inline' : 'block')}>{children}</div>
		</div>
	);
};

Columns.propTypes = {
	label: PropTypes.string,
	showIf: PropTypes.bool,
	inline: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string,
	rowInline: PropTypes.bool,
	spaceBetween: PropTypes.bool,
};

Columns.defaultProps = {
	showIf: true,
	inline: false,
	spaceBetween: false,
};

export default Columns;
