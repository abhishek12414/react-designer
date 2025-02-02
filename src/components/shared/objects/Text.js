import React from 'react';
import Icon from '../Icon';

import Vector from './Vector';

export default class Text extends Vector {
	static meta = {
		icon: <Icon icon={'text'} size={24} />,
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
			isHidden: false,
		},
	};

	getStyle() {
		let object = this.props.object;
		return {
			dominantBaseline: 'central',
			fontWeight: object.fontWeight,
			fontStyle: object.fontStyle,
			textDecoration: object.textDecoration,
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
			isHidden,
		} = this.getObjectAttributes();

		return (
			<text
				style={this.getStyle()}
				className={isHidden ? 'hidden' : ''}
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
