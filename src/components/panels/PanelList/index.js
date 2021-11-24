import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import Columns from '../Columns';
import Button from '../../widgets/Button';
import Icon from '../../shared/Icon';

const PanelList = ({ id, objectComponent, ...rest }) => {
	return (
		<div className="rdPanelListContainer">
			<Columns className="columns" label="Editor" rowInline spaceBetween>
				<Button
					title="Back to list"
					onClick={() => rest.resetCurrentSelection()}
				>
					<Icon
						icon="back"
						size={24}
						style={{ width: 16, height: 16, fill: 'black' }}
					/>
				</Button>
			</Columns>
			<div className="panelList">
				{objectComponent?.panels?.map((Panel, i) => (
					<Panel key={i} id={id} {...rest} />
				))}
			</div>
		</div>
	);
};

PanelList.propTypes = {
	id: PropTypes.string,
	objectComponent: PropTypes.func,
};

export default PanelList;
