import React, { Component } from 'react';

class SVGRenderer extends Component {
	static defaultProps = {
		onMouseOver() {},
	};

	getObjectComponent(elementType) {
		let { objectTypes } = this.props;
		return objectTypes[elementType];
	}

	renderObject(object, index) {
		let { objectRefs, onMouseOver, selectedObjectIndex } = this.props;
		let Renderer = this.getObjectComponent(object.elementType);
		return (
			<Renderer
				key={index}
				index={index}
				object={object}
				isSelected={index === selectedObjectIndex}
				onRender={(ref) => (objectRefs[index] = ref)}
				onMouseOver={onMouseOver.bind(this, index)}
			/>
		);
	}

	render() {
		let {
			background,
			backgroundImage,
			backgroundSize,
			backgroundRepeat,
			objects,
			svgStyle,
			canvas,
			onMouseDown,
			onRender,
		} = this.props;
		let { width, height, canvasOffsetX, canvasOffsetY } = canvas;

		let style = {
			...(background
				? {
						backgroundColor: background,
				  }
				: getBackgroundImage(
						backgroundImage,
						backgroundSize,
						backgroundRepeat
				  )),
			...{
				...svgStyle,
				marginTop: canvasOffsetY,
				marginLeft: canvasOffsetX,
			},
		};

		return (
			<svg
				onMouseDown={onMouseDown}
				ref={onRender}
				width={width}
				height={height}
				style={style}
				// isroot={true}
			>
				{objects.map(this.renderObject.bind(this))}
			</svg>
		);
	}
}

const getBackgroundImage = (
	backgroundImage = null,
	backgroundSize = 'auto',
	backgroundRepeat = 'repeat'
) => ({
	backgroundImage: backgroundImage
		? `url(${backgroundImage})`
		: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5' +
		  'vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0' +
		  'PSIyMCIgZmlsbD0iI2ZmZiI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9I' +
		  'iNGN0Y3RjciPjwvcmVjdD4KPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIG' +
		  'ZpbGw9IiNGN0Y3RjciPjwvcmVjdD4KPC9zdmc+)',
	backgroundSize: backgroundSize,
	backgroundRepeat: backgroundRepeat,
});

export default SVGRenderer;
