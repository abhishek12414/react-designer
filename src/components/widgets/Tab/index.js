import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './index.css';

const Tab = ({ options, activeValue, onSelect }) => {
	return (
		<div className="rdTab">
			{options.map((key) => (
				<div
					key={key}
					className={cx('tabBar', activeValue === key && 'activeTab')}
					onClick={() => onSelect(key)}
				>
					{key}
				</div>
			))}
		</div>
	);
};

Tab.propTypes = {
	options: PropTypes.array.isRequired,
	activeValue: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
};

export default Tab;
