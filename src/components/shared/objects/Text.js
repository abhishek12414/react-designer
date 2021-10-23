import React from 'react';
import Icon from '../Icon';

import Vector from './Vector';

export default class Text extends Vector {
	static meta = {
		icon: <Icon icon={'text'} size={30} />,
		initial: {
			text: 'Hello',
			rotate: 0,
			fontWeight: 'normal',
			fontStyle: 'normal',
			textDecoration: 'none',
			fill: 'black',
			fillOpacity: 1,
			fontSize: 50,
			fontFamily: 'Helvetica',
		},
	};

	getStyle() {
		let object = this.props.object;
		return {
			...super.getStyle(),
			dominantBaseline: 'central',
			fontWeight: object.fontWeight,
			fontStyle: object.fontStyle,
			textDecoration: object.textDecoration,
			mixBlendMode: object.blendMode,
			WebkitUserSelect: 'none',
		};
	}

	getTransformMatrix({ rotate, x, y }) {
		return `rotate(${rotate} ${x} ${y})`;
	}

	render() {
		const {
			text,
			rotate,
			fontWeight,
			fontStyle,
			textDecoration,
			fill,
			fillOpacity,
			fontSize,
			fontFamily,
			elementType,
			x,
			y,
			type,
			transform,
			ref,
			onMouseOver,
			index,
		} = this.getObjectAttributes();

		return (
			<text
				style={this.getStyle()}
				textAnchor="middle"
				fontSize={fontSize}
				fontFamily={fontFamily}
				x={x}
				y={y}
				// common props
				rotate={rotate}
				fill={fill}
				fillOpacity={fillOpacity}
				ref={ref}
				onMouseOver={onMouseOver}
				transform={transform}
				index={index}
			>
				{text}
			</text>
		);
	}
}
