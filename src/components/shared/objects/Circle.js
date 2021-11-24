import React from 'react';
import Icon from '../Icon';
import { Vector } from '.';
import Label from './Label';

export default class Circle extends Vector {
	static meta = {
		icon: <Icon icon={'ellipse'} size={24} />,
		initial: {
			fill: '#ffffff',
			fillOpacity: 0,
			strokeWidth: 2,
			stroke: '#000000',
			isHidden: false,
			x: 5,
			y: 5,
			radius: 10,
			blendMode: 'normal',
			labelCoordinates: { x: 30, y: 30 },
		},
	};

	render() {
		const { isSelected } = this.props;
		const {
			radius,
			fill,
			fillOpacity,
			strokeWidth,
			stroke,
			isHidden,
			labelCoordinates,
			name,
			x,
			y,
			type,
			transform,
			ref,
			onMouseOver,
			index,
		} = this.getObjectAttributes();

		return (
			<>
				{isSelected && (
					<circle
						style={this.getStyle()}
						className={isHidden ? 'hidden' : ''}
						cx={x}
						cy={y}
						r={radius}
						// common props
						fill={fill}
						fillOpacity={fillOpacity}
						stroke={'rgb(138, 180, 248)'}
						strokeWidth={+strokeWidth + 2}
						strokeOpacity={0.6}
						transform={transform}
						strokeLinecap="square"
						strokeMiterlimit={8}
					/>
				)}
				<circle
					style={this.getStyle()}
					className={isHidden ? 'hidden' : ''}
					cx={x}
					cy={y}
					r={radius}
					// common props
					ref={ref}
					index={index}
					transform={transform}
					fill={fill}
					fillOpacity={fillOpacity}
					stroke={stroke}
					strokeWidth={strokeWidth}
					strokeDasharray={type == 'map' ? 0 : 4}
					onMouseOver={onMouseOver}
				/>
				<Label
					className={isHidden ? 'hidden' : ''}
					x={labelCoordinates.x}
					y={labelCoordinates.y}
					label={name}
				/>
			</>
		);
	}
}
