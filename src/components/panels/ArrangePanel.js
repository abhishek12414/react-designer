import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../shared/Icon';
import Button from '../widgets/Button';

import Column from './Column';
import Columns from './Columns';
import PropertyGroup from './PropertyGroup';

const ArrangePanel = ({ onArrange }) => {
	return (
		<PropertyGroup>
			<Columns label="Arrange" inline>
				<Column>
					<Button onClick={() => onArrange('back')}>
						<Icon
							icon="send-to-back"
							size={24}
							style={{ width: 16, height: 16 }}
						/>
						<span>send to back</span>
					</Button>
				</Column>
				<Column>
					<Button onClick={() => onArrange('front')}>
						<Icon
							icon="bring-to-front"
							size={24}
							style={{ width: 16, height: 16 }}
						/>
						<span>bring to front</span>
					</Button>
				</Column>
			</Columns>
		</PropertyGroup>
	);
};

ArrangePanel.propTypes = {
	onArrange: PropTypes.func.isRequired,
};

export default ArrangePanel;
