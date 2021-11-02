import { SHAPES } from '../constants';
import deepClone from './deepClone';

export default function zoomTransform(objects, scale) {
	let cloneObjects = deepClone(objects);

	console.log('>>> zoom transform', cloneObjects);
	cloneObjects.map((obj) => {
		console.log('>>> obj', obj);
		const { elementType } = obj;
		switch (elementType) {
		case SHAPES.rect:
			break;

		default:
			break;
		}
	});
}
