import { TYPES } from '../constants';

const getClusterList = (value, customList, mainList) => {
	if (!value) return customList;
	let findObj = mainList.find((o) => o.value === value);
	return findObj ? [...customList, findObj] : customList;
};

export const getOptions = (type, clusterId, clusterListTrack, clusterList) =>
	type !== TYPES.TRACK
		? clusterList
		: getClusterList(clusterId, clusterListTrack, clusterList);
