import React, { useState } from 'react';
import Designer from '../src/components/Designer';
import data from './data';

const layout = {
	width: 350,
	height: 300,
};

const IS_LOG_ENABLE = false;

const logMe = (...props) => {
	if (IS_LOG_ENABLE) {
		console.debug(...props);
	}
};

const CustomDesigner = () => {
	const [objects, setObjects] = useState([...data.dataSet0]);

	return (
		<Designer
			width={layout.width}
			height={layout.height}
			objects={objects}
			clusterList={[
				{ label: 'a', value: 'a' },
				{ label: 'b', value: 'b' },
			]}
			onUpdate={(value) => {
				logMe(value);
				setObjects(value);
			}}
			onDelete={(obj) => {
				logMe('>>>> deleteObject', obj);
			}}
			onAddClusterClick={(value) => logMe('>>>> add new cluster', value)}
			onImageEditClick={(value) => logMe('>>>> onImageEditClick', value)}
			onAddImageClick={(value) => logMe('>>>> onAddImageClick', value)}
			onTransformLayoutChange={(value) =>
				logMe('>>>> onTransformLayoutChange', value)
			}
		/>
	);
};

export default CustomDesigner;
