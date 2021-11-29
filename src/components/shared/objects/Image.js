import React from 'react';
import Icon from '../Icon';

import Vector from './Vector';

export default class Image extends Vector {
	static meta = {
		icon: <Icon icon={'image'} size={24} />,
		initial: {
			width: 100,
			height: 100,
			fillOpacity: 1,
			isHidden: false,
			// Just a simple base64-encoded outline
			href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAhSURBVHgBtYmxDQAADII8lv9faBNH4yoJLAi4ppxgMZoPoxQrXYyeEfoAAAAASUVORK5CYII=',
		},
	};

	render() {
		const {
			href,
			width,
			height,
			elementType,
			x,
			y,
			transform,
			ref,
			onMouseOver,
			fillOpacity,
			isHidden,
		} = this.getObjectAttributes();

		return (
			<image
				className={isHidden ? 'hidden' : ''}
				ref={ref}
				href={href}
				width={width}
				height={height}
				opacity={fillOpacity}
				transform={transform}
				onMouseOver={onMouseOver}
			/>
		);
	}
}
