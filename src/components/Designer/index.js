import React, { Component } from 'react';
import cx from 'classnames';
import has from 'lodash/has';
import includes from 'lodash/includes';
import mapValues from 'lodash/mapValues';
import { HotKeys } from 'react-hotkeys';
import ContainerDimensions from 'react-container-dimensions';

import './index.css';

import { modes, SHAPES } from '../../constants';
import * as actions from '../../actions';
import { Path, Rect, Ellipse, Image, Gateway, Circle } from '../shared/objects';
import PanelList from '../panels/PanelList';
import Handler from '../Handler';
import SVGRenderer from '../SVGRenderer';
import InsertMenu from '../panels/InsertMenu';
import ObjectList from '../panels/ObjectList';
import {
	getTransformedLayout,
	getTransformedObjects,
} from '../../utils/layoutTransformation';
import deepClone from '../../utils/deepClone';

class Designer extends Component {
	static defaultProps = {
		objectTypes: {
			// text: Text,
			rect: Rect,
			ellipse: Ellipse,
			polygon: Path,
			image: Image,
			gateway: Gateway,
			circle: Circle,
		},
		snapToGrid: 1,
		svgStyle: {},
		insertMenu: InsertMenu,
	};

	state = {
		mode: modes.FREE,
		handler: {
			top: 200,
			left: 200,
			width: 50,
			height: 50,
			rotate: 0,
		},
		currentObjectIndex: null,
		selectedObjectIndex: null,
		selectedTool: null,
		type: 'map',
		objectFilter: 'all',
		hasTransformed: false,
	};

	keyMap = {
		removeObject: ['del', 'backspace'],
		moveLeft: ['left', 'shift+left'],
		moveRight: ['right', 'shift+right'],
		moveUp: ['up', 'shift+up'],
		moveDown: ['down', 'shift+down'],
		closePath: ['enter'],
	};

	componentWillMount() {
		this.objectRefs = {};
	}

	showHandler(index) {
		let { mode } = this.state;
		let { objects } = this.props;
		let object = objects[index];

		if (mode !== modes.FREE || object.elementType === 'image') {
			return;
		}

		this.updateHandler(index, object);
		this.setState({
			currentObjectIndex: index,
			showHandler: true,
		});
	}

	hideHandler() {
		let { mode } = this.state;
		if (mode === modes.FREE) {
			this.setState({
				showHandler: false,
			});
		}
	}

	getStartPointBundle(event, object) {
		let { currentObjectIndex } = this.state;
		let { objects } = this.props;
		let mouse = this.getMouseCoords(event);
		object = object || objects[currentObjectIndex];
		return {
			clientX: mouse.x,
			clientY: mouse.y,
			objectX: object.x,
			objectY: object.y,
			width: object.width,
			height: object.height,
			rotate: object.rotate,
		};
	}

	startDrag(mode, event) {
		let { currentObjectIndex } = this.state;
		this.setState({
			mode: mode,
			startPoint: this.getStartPointBundle(event),
			selectedObjectIndex: currentObjectIndex,
		});
	}

	resetSelection() {
		this.setState({
			selectedObjectIndex: null,
		});
	}

	resetCurrentSelection() {
		this.setState({
			selectedObjectIndex: null,
			currentObjectIndex: null,
			showHandler: false,
		});
	}

	newObject(event) {
		let { mode, selectedTool, type } = this.state;

		this.resetSelection(event);

		if (mode !== modes.DRAW) {
			return;
		}

		let { meta } = this.getObjectComponent(selectedTool);
		let mouse = this.getMouseCoords(event);

		let { objects, onUpdate } = this.props;
		let object = {
			...meta.initial,
			elementType: selectedTool,
			x: mouse.x,
			y: mouse.y,
			type,
			idx: objects.length + 1,
		};

		onUpdate([...objects, object]);

		this.setState({
			currentObjectIndex: objects.length,
			selectedObjectIndex: objects.length,
			startPoint: this.getStartPointBundle(event, object),
			mode: meta.editor ? modes.EDIT_OBJECT : modes.SCALE,
			selectedTool: null,
		});
	}

	updatePath(object) {
		let { path } = object;
		let diffX = object.x - object.moveX;
		let diffY = object.y - object.moveY;

		let newPath = path.map(({ x1, y1, x2, y2, x, y }) => ({
			x1: diffX + x1,
			y1: diffY + y1,
			x2: diffX + x2,
			y2: diffY + y2,
			x: diffX + x,
			y: diffY + y,

			// x1: diffX + x,
			// y1: diffY + y,
			// x2: diffX + x,
			// y2: diffY + y,
			// x: diffX + x,
			// y: diffY + y,
		}));

		return {
			...object,
			path: newPath,
			moveX: object.x,
			moveY: object.y,
		};
	}

	updateObject(objectIndex, changes, updatePath) {
		let { objects, onUpdate } = this.props;
		onUpdate(
			objects.map((object, index) => {
				if (index === objectIndex) {
					let newObject = {
						...object,
						...changes,
					};

					return updatePath ? this.updatePath(newObject) : newObject;
				} else {
					return object;
				}
			})
		);
	}

	getOffset() {
		let parent = this.svgElement.getBoundingClientRect();
		let { canvasWidth, canvasHeight } = this.getCanvas();
		return {
			x: parent.left,
			y: parent.top,
			width: canvasWidth,
			height: canvasHeight,
		};
	}

	applyOffset(bundle) {
		let offset = this.getOffset();
		return {
			...bundle,
			x: bundle.x - offset.x,
			y: bundle.y - offset.y,
		};
	}

	updateHandler(index, object) {
		let target = this.objectRefs[index];
		let bbox = target.getBoundingClientRect();
		let { canvasOffsetX, canvasOffsetY } = this.getCanvas();

		let handler = {
			...this.state.handler,
			width: object.width || bbox.width,
			height: object.height || bbox.height,
			top: object.y + canvasOffsetY,
			left: object.x + canvasOffsetX,
			rotate: object.rotate,
		};

		if (!object.width) {
			let offset = this.getOffset();
			handler = {
				...handler,
				left: bbox.left - offset.x,
				top: bbox.top - offset.y,
			};
		}

		this.setState({
			handler: handler,
		});
	}

	snapCoordinates({ x, y }) {
		let { snapToGrid } = this.props;
		return {
			x: x - (x % snapToGrid),
			y: y - (y % snapToGrid),
		};
	}

	getMouseCoords({ clientX, clientY }) {
		let coords = this.applyOffset({
			x: clientX,
			y: clientY,
		});

		return this.snapCoordinates(coords);
	}

	onDrag(event) {
		let { currentObjectIndex, startPoint, mode } = this.state;
		let { objects } = this.props;
		let object = objects[currentObjectIndex];
		let mouse = this.getMouseCoords(event);

		let { scale, rotate, drag } = actions;

		let map = {
			[modes.SCALE]: scale,
			[modes.ROTATE]: rotate,
			[modes.DRAG]: drag,
		};

		let action = map[mode];

		if (action) {
			let newObject = action({
				object,
				startPoint,
				mouse,
				objectIndex: currentObjectIndex,
				objectRefs: this.objectRefs,
			});

			this.updateObject(currentObjectIndex, newObject);
			this.updateHandler(currentObjectIndex, newObject);
		}

		if (currentObjectIndex !== null) {
			this.detectOverlappedObjects(event);
		}
	}

	detectOverlappedObjects(event) {
		let { currentObjectIndex } = this.state;
		let mouse = this.getMouseCoords(event);

		let refs = this.objectRefs,
			keys = Object.keys(refs),
			offset = this.getOffset();

		let currentRect = refs[currentObjectIndex].getBoundingClientRect();

		keys
			.filter((object, index) => index !== currentObjectIndex)
			.forEach((key) => {
				let rect = refs[key].getBoundingClientRect();
				let { left, top, width, height } = rect;

				left -= offset.x;
				top -= offset.y;

				let isOverlapped =
					mouse.x > left &&
					mouse.x < left + width &&
					mouse.y > top &&
					mouse.y < top + height &&
					currentRect.width > width &&
					currentRect.height > height;

				if (isOverlapped) {
					this.showHandler(Number(key));
				}
			});
	}

	stopDrag() {
		let { mode, currentObjectIndex } = this.state;

		// Disables shape drag out of bounds
		if (mode === modes.DRAG) {
			let { objects } = this.props;
			let object = objects[currentObjectIndex];
			const offset = this.getOffset();
			// if (object.x < 0) {
			// 	object.x = 0;
			// }
			// if (object.y < 0) {
			// 	object.y = 0;
			// }
			// if (object.x + object.width > offset.width) {
			// 	object.x = offset.width - object.width;
			// }
			// if (object.y + object.height > offset.height) {
			// 	object.y = offset.height - object.height;
			// }
			this.updateObject(currentObjectIndex, object);
			this.updateHandler(currentObjectIndex, object);
		}

		if (includes([modes.DRAG, modes.ROTATE, modes.SCALE], mode)) {
			this.setState({
				mode: modes.FREE,
			});
		}
	}

	showEditor() {
		let { selectedObjectIndex } = this.state;

		let { objects } = this.props,
			currentObject = objects[selectedObjectIndex],
			objectComponent = this.getObjectComponent(currentObject.elementType);

		if (objectComponent.meta.editor) {
			this.setState({
				mode: modes.EDIT_OBJECT,
				showHandler: false,
			});
		}
	}

	getObjectComponent(elementType) {
		let { objectTypes } = this.props;
		return objectTypes[elementType];
	}

	getCanvas() {
		let { width, height } = this.props;
		let { canvasWidth = width, canvasHeight = height } = this.props;
		return {
			width,
			height,
			canvasWidth,
			canvasHeight,
			canvasOffsetX: (canvasWidth - width) / 2,
			canvasOffsetY: (canvasHeight - height) / 2,
		};
	}

	selectTool(tool) {
		this.setState({
			selectedTool: tool,
			mode: modes.DRAW,
			currentObjectIndex: null,
			showHandler: false,
			handler: null,
		});
	}

	handleObjectChange(key, value) {
		let { selectedObjectIndex } = this.state;
		this.updateObject(selectedObjectIndex, {
			[key]: value,
		});
	}

	handleArrange(arrange) {
		let { selectedObjectIndex } = this.state;
		let { objects } = this.props;
		let object = objects[selectedObjectIndex];

		let arrangers = {
			front: (rest, object) => [[...rest, object], rest.length],
			back: (rest, object) => [[object, ...rest], 0],
		};

		let rest = objects.filter((object, index) => selectedObjectIndex !== index);

		this.setState(
			{
				selectedObjectIndex: null,
			},
			() => {
				let arranger = arrangers[arrange];
				let [arranged, newIndex] = arranger(rest, object);
				this.props.onUpdate(arranged);
				this.setState({
					selectedObjectIndex: newIndex,
				});
			}
		);
	}

	removeCurrent() {
		let { selectedObjectIndex } = this.state;
		let { objects } = this.props;
		const deleteObj = objects[selectedObjectIndex];

		let rest = objects.filter((object, index) => selectedObjectIndex !== index);

		this.setState(
			{
				currentObjectIndex: null,
				selectedObjectIndex: null,
				showHandler: false,
				handler: null,
			},
			() => {
				this.objectRefs = {};
				this.props.onUpdate(rest);
				this.props.onDelete(deleteObj);
			}
		);
	}

	moveSelectedObject(attr, points, event, key) {
		let { selectedObjectIndex } = this.state;
		let { objects } = this.props;
		let object = objects[selectedObjectIndex];

		if (key.startsWith('shift')) {
			points *= 10;
		}

		let changes = {
			...object,
			[attr]: object[attr] + points,
		};

		this.updateObject(selectedObjectIndex, changes);
		this.updateHandler(selectedObjectIndex, changes);
	}

	getKeymapHandlers() {
		let handlers = {
			removeObject: this.removeCurrent.bind(this),
			moveLeft: this.moveSelectedObject.bind(this, 'x', -1),
			moveRight: this.moveSelectedObject.bind(this, 'x', 1),
			moveUp: this.moveSelectedObject.bind(this, 'y', -1),
			moveDown: this.moveSelectedObject.bind(this, 'y', 1),
			closePath: () => this.setState({ mode: modes.FREE }),
		};

		return mapValues(handlers, (handler) => (event, key) => {
			if (event.target.tagName !== 'INPUT') {
				event.preventDefault();
				handler(event, key);
			}
		});
	}

	updateSelectedObjectIndex(selectedObjectIndex) {
		this.setState({
			selectedObjectIndex,
		});
	}

	onTypeChange(type) {
		this.setState({ type });
	}

	renderSVG(transformedLayout, transformedObjects) {
		// let canvas = this.getCanvas();
		let canvas = {
			width: transformedLayout.layoutWidth,
			height: transformedLayout.layoutHeight,
			canvasOffsetX: 0,
			canvasOffsetY: 0,
		};
		let { background, svgStyle, objects, objectTypes, backgroundImage } =
			this.props;

		if (!this.state.hasTransformed) {
			transformedObjects = getTransformedObjects(
				this.props.height,
				this.props.width,
				objects,
				transformedLayout.layoutWidth,
				transformedLayout.layoutHeight
			);
			this.setState({ hasTransformed: true, transformedLayout });
			this.props?.onUpdate(transformedObjects);
			this.props?.onTransformLayoutChange?.(transformedLayout);
		}

		return (
			<SVGRenderer
				canvas={canvas}
				objects={transformedObjects}
				objectRefs={this.objectRefs}
				objectTypes={objectTypes}
				selectedObjectIndex={this.state.selectedObjectIndex}
				svgStyle={svgStyle}
				background={background}
				backgroundImage={backgroundImage}
				onRender={(ref) => (this.svgElement = ref)}
				onMouseOver={this.showHandler.bind(this)}
				onMouseDown={this.newObject.bind(this)}
			/>
		);
	}

	render() {
		let {
			showHandler,
			handler,
			mode,
			selectedObjectIndex,
			selectedTool,
			type,
			objectFilter,
		} = this.state;

		let { objects, objectTypes, insertMenu: InsertMenuComponent } = this.props;

		let currentObject = objects?.[selectedObjectIndex],
			isEditMode = mode === modes.EDIT_OBJECT,
			showPropertyPanel = selectedObjectIndex !== null;

		let { width, height, canvasWidth, canvasHeight } = this.getCanvas();

		let objectComponent, objectWithInitial, ObjectEditor;
		if (currentObject) {
			objectComponent = this.getObjectComponent(currentObject.elementType);
			objectWithInitial = {
				...objectComponent.meta.initial,
				...currentObject,
			};
			ObjectEditor = objectComponent.meta.editor;
		}

		const hasImage = !!objects?.filter(
			({ elementType }) => elementType === SHAPES.image
		)?.[0];

		return (
			<div className="reactDesigner">
				<HotKeys
					keyMap={this.keyMap}
					className="keyboardManager"
					handlers={this.getKeymapHandlers()}
				>
					<div
						className={cx('rdContainer', this.props.className)}
						onMouseMove={this.onDrag.bind(this)}
						onMouseUp={this.stopDrag.bind(this)}
					>
						{/* Left Panel: Displays insertion tools (shapes, images, etc.) */}
						{InsertMenuComponent && (
							<InsertMenuComponent
								type={type}
								tools={objectTypes}
								hasImage={hasImage}
								currentTool={selectedTool}
								onSelect={this.selectTool.bind(this)}
								onTypeChange={(value) => this.onTypeChange(value)}
								onAddImageClick={this.props.onAddImageClick}
							/>
						)}

						{/* Center Panel: Displays the preview */}
						<div className="drawingContainer">
							<ContainerDimensions id="containerD">
								{({ width, height }) => {
									const transformedLayout = getTransformedLayout(
										width,
										height,
										this.props.width,
										this.props.height
									);
									let transformedObjects = deepClone(objects);

									return (
										<div
											className={'canvasContainer'}
											style={{
												width: transformedLayout.layoutWidth,
												height: transformedLayout.layoutHeight,
											}}
										>
											{isEditMode && ObjectEditor && (
												<ObjectEditor
													object={currentObject}
													offset={this.getOffset()}
													onUpdate={(object) =>
														this.updateObject(selectedObjectIndex, object)
													}
													onClose={() => this.setState({ mode: modes.FREE })}
													width={width}
													height={height}
												/>
											)}

											{showHandler && (
												<Handler
													boundingBox={handler}
													canResize={
														has(currentObject, 'width') ||
														has(currentObject, 'height')
													}
													// canRotate={has(currentObject, 'rotate')}
													onMouseLeave={this.hideHandler.bind(this)}
													onDoubleClick={this.showEditor.bind(this)}
													onDrag={this.startDrag.bind(this, modes.DRAG)}
													onResize={this.startDrag.bind(this, modes.SCALE)}
													// onRotate={this.startDrag.bind(this, modes.ROTATE)}
												/>
											)}

											{this.renderSVG(transformedLayout, transformedObjects)}
										</div>
									);
								}}
							</ContainerDimensions>
						</div>

						{/* Right Panel: Displays text, styling and sizing tools */}

						<div className="propertiesPanelContainer">
							{showPropertyPanel ? (
								<PanelList
									layoutDimension={{
										width: this.props.width,
										height: this.props.height,
									}}
									offset={this.getOffset()}
									object={objectWithInitial}
									objects={this.props.objects}
									clusterList={this.props.clusterList}
									onArrange={this.handleArrange.bind(this)}
									onChange={this.handleObjectChange.bind(this)}
									onDelete={this.removeCurrent.bind(this)}
									objectComponent={objectComponent}
									onObjectSelect={this.updateSelectedObjectIndex.bind(this)}
									resetCurrentSelection={this.resetCurrentSelection.bind(this)}
									onAddClusterClick={this.props.onAddClusterClick}
									onImageEditClick={this.props.onImageEditClick}
								/>
							) : (
								<ObjectList
									objectFilter={objectFilter}
									onObjectFilterChange={(objectFilter) =>
										this.setState({ objectFilter })
									}
									objects={this.props.objects}
									clusterList={this.props.clusterList}
									onChange={this.updateObject.bind(this)}
									onAddClusterClick={this.props.onAddClusterClick}
									onObjectSelect={this.updateSelectedObjectIndex.bind(this)}
								/>
							)}
						</div>
					</div>
				</HotKeys>
			</div>
		);
	}
}

export default Designer;
