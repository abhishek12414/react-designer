export const getTransformedLayout = (width, height, zoneWidth, zoneHeight) => {
	let layoutWidth = 0,
		layoutHeight = 0,
		svgLeftDistance = 0,
		svgTopDistance = 0;

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
		svgLeftDistance = (width - layoutWidth) / 2;
		svgTopDistance = (height - layoutHeight) / 2;
	}

	return {
		zoneWidth: width,
		zoneHeight: height,
		layoutWidth,
		layoutHeight,
		transformWidth: +(layoutWidth / width).toFixed(2),
		transformHeight: +(layoutHeight / height).toFixed(2),
		svgLeftDistance,
		svgTopDistance,
	};
};

export const getTransformedObjects = (
	layoutHeight,
	layoutWidth,
	layoutCoordinates,
	transformedLayoutWidth,
	transformedLayoutHeight
) => {
	// handle if zone height or width is empty
	if (!layoutHeight || !layoutWidth) {
		return [];
	}

	const transformedWidth = transformedLayoutWidth / layoutWidth;
	const transformedHeight = transformedLayoutHeight / layoutHeight;

	const transformedCoordinates = layoutCoordinates.map((item) => {
		switch (item.elementType || item.type) {
			case 'polygon':
				item._x = +item.path[0].x;
				item._y = +item.path[0].y;
				item.path = item.path.map((key) => {
					let coordinates = {};
					coordinates.x = +(transformedWidth * (key.x1 ?? key.x)).toFixed(2);
					coordinates.y = +(transformedHeight * (key.y1 ?? key.y)).toFixed(2);

					return coordinates;
				});
				item.x = item.path[0].x;
				item.y = item.path[0].y;
				item.moveX = item.x;
				item.moveY = item.y;
				break;

			case 'rect':
				item._x = item.x;
				item._y = layoutHeight - item.height - item.y;
				item.x = +(transformedWidth * item.x).toFixed(2);
				item.y = +(transformedHeight * item.y).toFixed(2);
				item.width = +(transformedWidth * item.width).toFixed(2);
				item.height = +(transformedHeight * item.height).toFixed(2);
				break;

			case 'circle':
				item._x = item.x;
				item._y = item.y;
				item.x = +(transformedWidth * item.x).toFixed(2);
				item.y = +(transformedHeight * item.y).toFixed(2);
				item.radius = +(transformedHeight * item.radius).toFixed(2);
				break;

			case 'ellipse':
				item._x = item.x;
				item._y = item.y;
				item.x = +(transformedWidth * item.x).toFixed(2);
				item.y = +(transformedHeight * item.y).toFixed(2);
				item.width = +(transformedWidth * item.width).toFixed(2);
				item.height = +(transformedHeight * item.height).toFixed(2);
				break;

			case 'image':
				item.width = +(transformedWidth * item.width).toFixed(2);
				item.height = +(transformedHeight * item.height).toFixed(2);
				item.width = transformedLayoutWidth;
				item.height = transformedLayoutHeight;
				break;

			case 'gateway':
				item._x = item.x;
				item._y = layoutHeight - 18 - item.y;
				item.x = +(transformedWidth * item.x).toFixed(2);
				item.y = +(transformedHeight * item.y).toFixed(2);
				item.plot._x = item.plot.x;
				item.plot._y = layoutHeight - 18 - item.plot.y;
				item.plot.x = +(transformedWidth * item.plot.x).toFixed(2);
				item.plot.y = +(transformedHeight * item.plot.y).toFixed(2);
				break;

			default:
				return item;
		}

		if (
			layoutWidth &&
			layoutHeight &&
			item?.labelCoordinates?.x &&
			item?.labelCoordinates?.y
		) {
			item.labelCoordinates._x = item.labelCoordinates.x;
			item.labelCoordinates._y = layoutHeight - item.labelCoordinates.y;
			item.labelCoordinates.x = +(
				transformedWidth * item.labelCoordinates.x
			).toFixed(2);
			item.labelCoordinates.y = +(
				transformedHeight * item.labelCoordinates.y
			).toFixed(2);
		}

		return item;
	});
	return transformedCoordinates;
};
