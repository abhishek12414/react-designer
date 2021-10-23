import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './index.css';

const PropertyGroup = ({ className, showIf, ...props }) => {
	if (!showIf) {
		return null;
	}

	return <div className={cx('propertyGroup', className)}>{props.children}</div>;
};

PropertyGroup.propTypes = {
	showIf: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node,
};

PropertyGroup.defaultProps = {
	showIf: true,
};

export default PropertyGroup;
