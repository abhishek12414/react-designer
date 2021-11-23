import React from 'react';
import Icon from '../Icon';
import { Vector } from '.';
import trackSvg from '../../../assets/svg/track.svg';
import gatewaySVG from '../../../assets/svg/wifi.svg';

export default class Gateway extends Vector {
	static meta = {
		icon: <Icon icon={'wifi'} size={30} />,
		initial: {
			isHidden: false,
			rotate: 0,
			x: 0,
			y: 0,
			z: 0,
			name: '',
			macId: '',
			gatewayClusterType: '',
			clusterId: '',
			plot: {
				x: 0,
				y: 0,
				z: 0,
			},
		},
	};

	getStyle() {
		return {
			...super.getStyle(),
		};
	}

	getTransformMatrix({ rotate, x, y }) {
		return `rotate(${rotate} ${x} ${y})`;
	}

	render() {
		const {
			rotate,
			x,
			y,
			plot,
			elementType,
			type,
			transform,
			ref,
			onMouseOver,
			index,
			isHidden,
		} = this.getObjectAttributes();

		return (
			<>
				<image
					style={this.getStyle()}
					className={isHidden ? 'hidden' : ''}
					width={18}
					height={18}
					href={gatewaySVG}
					x={x}
					y={y}
					// common props
					ref={ref}
					onMouseOver={onMouseOver}
					transform={transform}
					index={index}
				/>
				<image
					className={isHidden ? 'hidden' : ''}
					width={18}
					height={18}
					href={trackSvg}
					x={plot.x}
					y={plot.y}
				/>
			</>
		);
	}
}
