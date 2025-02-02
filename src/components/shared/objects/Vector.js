import { Component } from 'react';

import {
	BasicPropertyPanel,
	SizePanel,
	TextPanel,
	StylePanel,
	ArrangePanel,
	GatewayPanel,
} from '../../panels';

export default class Vector extends Component {
	static panels = [
		BasicPropertyPanel,
		SizePanel,
		TextPanel,
		StylePanel,
		GatewayPanel,
		ArrangePanel,
	];

	getTransformMatrix({ rotate, x, y, width, height }) {
		if (rotate) {
			let centerX = width / 2 + x;
			let centerY = height / 2 + y;
			return `rotate(${rotate} ${centerX} ${centerY})`;
		}
	}

	getObjectAttributes() {
		let { object, onRender, ...rest } = this.props;
		return {
			...object,
			transform: this.getTransformMatrix(object),
			ref: onRender,
			...rest,
		};
	}
}
