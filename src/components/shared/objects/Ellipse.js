import React from 'react';
import Icon from '../Icon';
import Label from './Label';

import Vector from './Vector';

export default class Ellipse extends Vector {
	static meta = {
		icon: <Icon icon={'ellipse'} size={30} />,
		initial: {
			fill: '#ffffff',
			fillOpacity: 0,
			strokeWidth: 2,
			stroke: '#000000',
			isHidden: false,
			width: 5,
			height: 5,
			rotate: 0,
			blendMode: 'normal',
			labelCoordinates: { x: 30, y: 30 },
		},
	};

	render() {
		const { isSelected } = this.props;
		const {
			width,
			height,
			rotate,
			fill,
			fillOpacity,
			strokeWidth,
			stroke,
			blendMode,
			isHidden,
			labelCoordinates,
			elementType,
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
					<ellipse
						style={this.getStyle()}
						className={isHidden ? 'hidden' : ''}
						rx={width / 2}
						ry={height / 2}
						cx={x + width / 2}
						cy={y + height / 2}
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
				<ellipse
					style={this.getStyle()}
					className={isHidden ? 'hidden' : ''}
					rx={width / 2}
					ry={height / 2}
					cx={x + width / 2}
					cy={y + height / 2}
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
