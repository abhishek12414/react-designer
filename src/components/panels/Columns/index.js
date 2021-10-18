import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const Columns = ({ rowInline, inline, showIf, label, children }) => {
	if (!showIf) {
		return <div className={'empty'} />;
	}

	return (
		<div className={cx('columns', rowInline && 'columns__inline')}>
			<label className="columns__title">{label}</label>
			<div className={cx(inline ? 'inline' : 'block')}>{children}</div>
		</div>
	);
};

Columns.propTypes = {
	showIf: PropTypes.bool,
	children: PropTypes.node,
	label: PropTypes.string,
	inline: PropTypes.bool,
};

Columns.defaultProps = {
	showIf: true,
	inline: false,
};

export default Columns;
