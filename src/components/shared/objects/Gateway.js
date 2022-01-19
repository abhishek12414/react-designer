import React from 'react';
import Icon from '../Icon';
import { Vector } from '.';
import trackSvg from '../../../assets/svg/track.svg';
import gatewaySVG from '../../../assets/svg/wifi.svg';
import { hardwareTypes } from '../../../constants';

export default class Gateway extends Vector {
	static meta = {
		icon: <Icon icon={'wifi'} size={24} />,
		initial: {
			isHidden: false,
			width: 18,
			height: 18,
			rotate: 0,
			x: 0,
			y: 0,
			z: 0,
			name: '',
			gatewayClusterType: '',
			clusterId: '',
			hardwareType: hardwareTypes.BLE,
			identifierKey: '',
			identifierValue: '',
			plot: {
				x: 0,
				y: 0,
				z: 0,
			},
		},
	};

	getTransformMatrix({ rotate, x, y }) {
		return `rotate(${rotate} ${x} ${y})`;
	}

	render() {
		const {
			x,
			y,
			plot,
			// rotate,
			// elementType,
			// type,
			// transform,
			ref,
			onMouseOver,
			index,
			isHidden,
		} = this.getObjectAttributes();

		return (
			<>
				<image
					className={isHidden ? 'hidden' : ''}
					width={18}
					height={18}
					href={trackSvg}
					x={plot.x}
					y={plot.y}
				/>
				<image
					className={isHidden ? 'hidden' : ''}
					width={18}
					height={18}
					href={gatewaySVG}
					x={x}
					y={y}
					// common props
					ref={ref}
					onMouseOver={onMouseOver}
					// transform={transform}
					index={index}
				/>
			</>
		);
	}
}
