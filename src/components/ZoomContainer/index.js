import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Button from '../widgets/Button';

import './index.css';

const ZoomContainer = ({ className, onClick }) => {
	return (
		<div className={cx('zoomContainer', className)}>
			<Button className={cx('zoomButton')} onClick={(e) => onClick('+', e)}>
				+
			</Button>
			<Button
				disabled
				className={cx('zoomButton zoomButton-disabled')}
				onClick={(e) => onClick('-', e)}
			>
				-
			</Button>
		</div>
	);
};

ZoomContainer.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

export default ZoomContainer;
