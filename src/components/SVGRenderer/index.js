import React from 'react';
import PropTypes from 'prop-types';

const SVGRenderer = ({
	canvas,
	objects,
	objectRefs,
	objectTypes,
	selectedObjectIndex,
	svgStyle,
	background,
	backgroundImage,
	onRender,
	onMouseOver,
	onMouseDown,
}) => {
	let { width, height, canvasOffsetX, canvasOffsetY } = canvas;

	const renderObject = (object, index) => {
		let Renderer = objectTypes[object.elementType];
		return (
			<Renderer
				key={index}
				index={index}
				object={object}
				isSelected={index === selectedObjectIndex}
				onRender={(ref) => (objectRefs[index] = ref)}
				onMouseOver={() => onMouseOver(index)}
			/>
		);
	};

	let style = {
		...(background
			? { backgroundColor: background }
			: getBackgroundImage(backgroundImage)),
		...{
			...svgStyle,
			marginTop: canvasOffsetY,
			marginLeft: canvasOffsetX,
		},
	};

	return (
		<svg
			ref={onRender}
			style={style}
			width={width}
			height={height}
			onMouseDown={onMouseDown}
		>
			{objects.map(renderObject)}
		</svg>
	);
};

const getBackgroundImage = (backgroundImage = null) => ({
	backgroundImage: backgroundImage
		? `url(${backgroundImage})`
		: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmZiI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNGN0Y3RjciPjwvcmVjdD4KPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNGN0Y3RjciPjwvcmVjdD4KPC9zdmc+)',
	backgroundSize: 'auto',
	backgroundRepeat: 'repeat',
});

SVGRenderer.propTypes = {
	canvas: PropTypes.object,
	objects: PropTypes.array,
	svgStyle: PropTypes.object,
	background: PropTypes.string,
	objectRefs: PropTypes.object,
	objectTypes: PropTypes.object,
	backgroundImage: PropTypes.string,
	selectedObjectIndex: PropTypes.number,
	onMouseOver: PropTypes.func,
	onMouseDown: PropTypes.func,
	onRender: PropTypes.func,
};

SVGRenderer.defaultProps = {
	onMouseOver: () => {},
};

export default SVGRenderer;
