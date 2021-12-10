const getDragTransformedCoords = (object, transformedDimension) => {
	object._x = +(object.x / transformedDimension.transformWidth).toFixed(2);
	object._y = +(
		transformedDimension.layoutHeight / transformedDimension.transformHeight -
		object.y / transformedDimension.transformHeight -
		(object?.height ?? 0) / transformedDimension.transformHeight
	).toFixed(2);
	return object;
};

export default getDragTransformedCoords;
