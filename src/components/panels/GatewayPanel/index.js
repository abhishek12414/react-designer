import React from 'react';
import has from 'lodash/has';

import styles from './index.module.css';

import { clusterOptions, TYPES } from '../../../constants';

import Column from '../Column';
import Columns from '../Columns';
import PropertyGroup from '../PropertyGroup';
import Input from '../../widgets/Input';
import Select from '../../widgets/Select';

export default class GatewayPanel extends React.Component {
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
					<Column>
						{has(object, 'macId') && (
							<input
								className={[styles.input, styles.gatewayInput]}
								value={object.macId}
								onChange={(e) => this.props.onChange('macId', e.target.value)}
							/>
						)}
					</Column>
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

				<Columns label="Physical Coords">
					<Column label="x (meters)" helperStyle={styles.coordsHelper}>
						{has(object, 'x') && (
							<Input
								type="number"
								className={styles.coordinateInput}
								value={object.x}
								onChange={(e) => this.props.onChange('x', e.target.value)}
							/>
						)}
					</Column>
					<Column label="y (meters)" helperStyle={styles.coordsHelper}>
						{has(object, 'y') && (
							<Input
								type="number"
								className={styles.coordinateInput}
								value={object.y}
								onChange={(e) => this.props.onChange('y', e.target.value)}
							/>
						)}
					</Column>
					<Column label="z (meters)" helperStyle={styles.coordsHelper}>
						{has(object, 'z') && (
							<Input
								type="number"
								className={styles.coordinateInput}
								value={object.z}
								onChange={(e) => this.props.onChange('z', e.target.value)}
							/>
						)}
					</Column>
				</Columns>

				<Columns label="Plot Coords">
					<Column label="x (meters)" helperStyle={styles.coordsHelper}>
						{has(object.plot, 'x') && (
							<Input
								type="number"
								className={styles.coordinateInput}
								value={object.plot.x}
								onChange={(e) => this.onPlotValueChange('x', e.target.value)}
							/>
						)}
					</Column>
					<Column label="y (meters)" helperStyle={styles.coordsHelper}>
						{has(object.plot, 'y') && (
							<Input
								type="number"
								className={styles.coordinateInput}
								value={object.plot.y}
								onChange={(e) => this.onPlotValueChange('y', e.target.value)}
							/>
						)}
					</Column>
					<Column label="z (meters)" helperStyle={styles.coordsHelper}>
						{has(object.plot, 'z') && (
							<Input
								type="number"
								className={styles.coordinateInput}
								value={object.plot.z}
								onChange={(e) => this.onPlotValueChange('z', e.target.value)}
							/>
						)}
					</Column>
				</Columns>
			</PropertyGroup>
		);
	}
}
