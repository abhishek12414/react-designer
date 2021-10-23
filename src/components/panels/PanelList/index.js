import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const PanelList = ({ id, objectComponent, ...rest }) => {
	return (
		<div className="panelList">
			{objectComponent.panels.map((Panel, i) => (
				<Panel key={i} id={id} {...rest} />
			))}
		</div>
	);
};

PanelList.propTypes = {
	id: PropTypes.string,
	objectComponent: PropTypes.func,
};

export default PanelList;
