import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import has from 'lodash/has';

import styles from './index.module.css';

import { clusterOptions, TYPES } from '../../../constants';

import Column from '../Column';
import Columns from '../Columns';
import PropertyGroup from '../PropertyGroup';
import Select from '../../widgets/Select';

class GatewayPanel extends React.Component {
	onPlotValueChange(key, value) {
		const { onChange, object } = this.props;
		onChange('plot', {
			...object.plot,
			[key]: value,
		});
	}

	getMapCluster() {
		const options = this.props.objects
			.filter(({ type, name }) => type == 'map' && name !== '')
			.map(({ name, _id }) => ({ label: name, value: _id || name }));
		return options;
	}

	render() {
		let { object } = this.props;

		if (object.elementType !== TYPES.GATEWAY) {
			return null;
		}

		return (
			<PropertyGroup>
				<Columns label="Mac ID">
					{has(object, 'macId') && (
						<Column
							label="Mac ID"
							className={[styles.input, styles.gatewayInput]}
							value={object.macId}
							onChange={(e) => this.props.onChange('macId', e.target.value)}
						/>
					)}
				</Columns>
				<Columns label="Cluster Type">
					<Column>
						{has(object, 'gatewayClusterType') && (
							<Select
								name="gatewayClusterType"
								value={object.gatewayClusterType}
								options={clusterOptions}
								onChange={(e) =>
									this.props.onChange('gatewayClusterType', e.target.value)
								}
							/>
						)}
					</Column>
				</Columns>

				<Columns label="Cluster">
					<Column>
						{has(object, 'clusterId') && (
							<Select
								name="clusterId"
								options={this.getMapCluster()}
								value={object.clusterId}
								onChange={(e) =>
									this.props.onChange('clusterId', e.target.value)
								}
							/>
						)}
					</Column>
				</Columns>

				<Columns label="Physical Coords" inline>
					{has(object, 'x') && (
						<Column
							disabled
							label="x"
							type="number"
							value={object.x}
							onChange={(value) => this.props.onChange('x', value)}
						/>
					)}
					{has(object, 'y') && (
						<Column
							disabled
							label="y"
							type="number"
							value={object.y}
							onChange={(value) => this.props.onChange('y', value)}
						/>
					)}
					{has(object, 'z') && (
						<Column
							disabled
							label="z"
							type="number"
							value={object.z}
							onChange={(value) => this.props.onChange('z', value)}
						/>
					)}
				</Columns>

				<Columns label="Plot Coords" inline>
					{has(object.plot, 'x') && (
						<Column
							label="x"
							type="number"
							value={object.plot.x}
							onChange={(value) => this.onPlotValueChange('x', value)}
						/>
					)}
					{has(object.plot, 'y') && (
						<Column
							label="y"
							type="number"
							value={object.plot.y}
							onChange={(value) => this.onPlotValueChange('y', value)}
						/>
					)}
					{has(object.plot, 'z') && (
						<Column
							label="z"
							type="number"
							value={object.plot.z}
							onChange={(value) => this.onPlotValueChange('z', value)}
						/>
					)}
				</Columns>
			</PropertyGroup>
		);
	}
}

GatewayPanel.propTypes = {
	object: PropTypes.object,
	objects: PropTypes.object,
	onChange: PropTypes.func.isRequired,
};

export default GatewayPanel;
