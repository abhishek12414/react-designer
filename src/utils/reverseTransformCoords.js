const reverseTransformCoords = (data, transformedLayoutObj, zoneObject) => {
	const { width: layoutWidth, height: layoutHeight } = zoneObject;

	// handle if zone height or width is empty
	if (!layoutHeight || !layoutWidth) {
		return [];
	}

	const transformedWidth = transformedLayoutObj.layoutWidth / zoneObject.width;
	const transformedHeight =
		transformedLayoutObj.layoutHeight / zoneObject.height;

	const transformedCoordinates = data.map((item) => {
		switch (item.elementType || item.type) {
			case 'polygon':
				item.path = item.path.map((key) => {
					let coordinates = {};
					coordinates.x = +((key.x1 ?? key.x) / transformedWidth).toFixed(2);
					coordinates.y = +((key.y1 ?? key.y) / transformedHeight).toFixed(2);
					return coordinates;
				});
				item.x = item.path[0].x;
				item.y = item.path[0].y;
				item.moveX = item.x;
				item.moveY = item.y;
				break;
			case 'rect':
				item.x = +(item.x / transformedWidth).toFixed(2);

				item.y = +(item.y / transformedHeight).toFixed(2);
				item.width = +(item.width / transformedWidth).toFixed(2);
				item.height = +(item.height / transformedHeight).toFixed(2);
				break;
			case 'circle':
				item.x = +(item.x / transformedWidth).toFixed(2);
				item.y = +(item.y / transformedHeight).toFixed(2);
				item.radius = +(item.radius / transformedHeight).toFixed(2);
				break;
			case 'ellipse':
				item.x = +(item.x / transformedWidth).toFixed(2);
				item.y = +(item.y / transformedHeight).toFixed(2);
				item.width = +(item.width / transformedWidth).toFixed(2);
				item.height = +(item.height / transformedHeight).toFixed(2);
				break;

			// case 'image':
			//   item.width = +((transformedWidth) * item.width).toFixed(2);
			//   item.height = +((transformedHeight) * item.height).toFixed(2);
			//   item.width = transformedLayoutWidth;
			//   item.height = transformedLayoutHeight;
			//   break;
			case 'gateway':
				item.x = +(item.x / transformedWidth).toFixed(2);
				item.y = +(item.y / transformedHeight).toFixed(2);
				item.plot.x = +(item.plot.x / transformedWidth).toFixed(2);
				item.plot.y = +(item.plot.y / transformedHeight).toFixed(2);
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
			item.labelCoordinates.x = +(
				item.labelCoordinates.x / transformedWidth
			).toFixed(2);
			item.labelCoordinates.y = +(
				item.labelCoordinates.y / transformedHeight
			).toFixed(2);
		}

		return item;
	});

	return transformedCoordinates;
};

export default reverseTransformCoords;
