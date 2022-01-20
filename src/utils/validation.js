import { TYPES } from '../constants';

const regExForMacId = /^[a-fA-F0-9]*$/;

export const validateObject = (object) => {
	let errorObj = {};

	if (object?.fillOpacity < 0 || object?.fillOpacity > 1) {
		errorObj.fillOpacity = 'Opacity is invalid';
	}

	if (object.type === TYPES.TRACK) {
		if (!object?.clusterId) {
			errorObj.clusterId = 'ClusterId is required';
		}
	}

	if (object.type === TYPES.GATEWAY || object.elementType === TYPES.GATEWAY) {
		if (!object?.name) {
			errorObj.name = 'Cluster Name is required';
		}

		if (!object?.clusterId) {
			errorObj.clusterId = 'ClusterId is required';
		}

		if (!object?.identifierKey) {
			errorObj.identifierKey = 'Identifier Key is required';
		}

		if (!object?.identifierValue) {
			errorObj.identifierValue = `${
				object.identifierKey ?? 'Identifier Value'
			} is required`;
		} else if (
			object?.identifierKey === 'macId' &&
			!regExForMacId.test(object.identifierValue)
		) {
			errorObj.identifierValue = 'MacId is invalid';
		}

		if (!object?.gatewayClusterType) {
			errorObj.gatewayClusterType = 'Cluster type is required';
		}

		if (object?._x === '') {
			errorObj._x = 'X is required';
		}

		if (object?._y === '') {
			errorObj._y = 'Y is required';
		}

		if (object?.plot?._x === '') {
			errorObj._x = 'Plot X is required';
		}

		if (object._y === '') {
			errorObj._y = 'Plot Y is required';
		}
	}

	return errorObj;
};
