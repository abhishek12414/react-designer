export default (width, height, zoneWidth, zoneHeight) => {
	let layoutWidth = 0,
		layoutHeight = 0;
	if (zoneWidth && zoneHeight) {
		let scalingWidth = width / zoneWidth;
		let scalingHeight = height / zoneHeight;

		if (!(scalingWidth * zoneHeight > height)) {
			layoutWidth = parseInt(scalingWidth * zoneWidth, 10);
			layoutHeight = parseInt(scalingWidth * zoneHeight, 10);
		} else {
			layoutWidth = parseInt(scalingHeight * zoneWidth, 10);
			layoutHeight = parseInt(scalingHeight * zoneHeight, 10);
		}
	}

	return {
		layoutWidth,
		layoutHeight,
	};
};
