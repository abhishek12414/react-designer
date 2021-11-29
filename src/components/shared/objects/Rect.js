import React from 'react';
import Icon from '../Icon';
import Label from './Label';

import Vector from './Vector';

export default class Rect extends Vector {
	static meta = {
		icon: <Icon icon={'rect'} size={24} />,
		initial: {
			width: 5,
			height: 5,
			fill: '#ffffff',
			fillOpacity: 0,
			strokeWidth: 2,
			stroke: '#000000',
			isHidden: false,
			// radius: 0,
			blendMode: 'normal',
			rotate: 0,
			labelCoordinates: { x: 30, y: 30 },
		},
	};

	render() {
		const { isSelected } = this.props;
		const {
			width,
			height,
			fill,
			fillOpacity,
			strokeWidth,
			stroke,
			radius,
			blendMode,
			rotate,
			labelCoordinates,
			elementType,
			x,
			y,
			name,
			type,
			transform,
			ref,
			onMouseOver,
			index,
			isHidden,
		} = this.getObjectAttributes();

		return (
			<>
				{isSelected && (
					<rect
						style={this.getStyle()}
						className={isHidden ? 'hidden' : ''}
						x={x}
						y={y}
						width={width}
						height={height}
						// common props
						transform={transform}
						fill={fill}
						fillOpacity={fillOpacity}
						stroke={'rgb(138, 180, 248)'}
						strokeWidth={+strokeWidth + 2}
						strokeOpacity={0.6}
						strokeLinecap="square"
						strokeMiterlimit={8}
					/>
				)}
				<rect
					style={this.getStyle()}
					className={isHidden ? 'hidden' : ''}
					x={x}
					y={y}
					width={width}
					height={height}
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
					label={name || ''}
				/>
			</>
		);
	}
}
