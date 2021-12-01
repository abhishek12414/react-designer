import React, { useState } from 'react';
import Designer from '../src/components/Designer';
import data from './data';

const layout = {
	width: 350,
	height: 300,
};

const CustomDesigner = () => {
	const [objects, setObjects] = useState([...data.dataSet0]);

	return (
		<div>
			<Designer
				width={layout.width}
				height={layout.height}
				// background={'#ece2be'}
				objects={objects}
				clusterList={[
					{ label: 'a', value: 'a' },
					{ label: 'b', value: 'b' },
				]}
				onUpdate={(value) => {
					console.log(value);
					setObjects(value);
				}}
				onDelete={(obj) => console.debug('>>>> deleteObject', obj)}
				onAddClusterClick={(value) =>
					console.debug('>>>> add new cluster', value)
				}
				onImageEditClick={(value) =>
					console.debug('>>>> onImageEditClick', value)
				}
				onAddImageClick={(value) =>
					console.debug('>>>> onAddImageClick', value)
				}
				onTransformLayoutChange={(value) =>
					console.debug('>>>> onTransformLayoutChange', value)
				}
			/>
		</div>
	);
};

export default CustomDesigner;
