import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './index.css';

const Columns = ({ rowInline, inline, showIf, label, children }) => {
	if (!showIf) {
		return <div className={'empty'} />;
	}

	return (
		<div className={cx('rdColumns', rowInline && 'rdColumns__inline')}>
			<label className="rdColumns__title">{label}</label>
			<div className={cx(inline ? 'inline' : 'block')}>{children}</div>
		</div>
	);
};

Columns.propTypes = {
	label: PropTypes.string,
	showIf: PropTypes.bool,
	inline: PropTypes.bool,
	children: PropTypes.node,
	rowInline: PropTypes.bool,
};

Columns.defaultProps = {
	showIf: true,
	inline: false,
};

export default Columns;
