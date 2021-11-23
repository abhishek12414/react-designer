import React, { useState } from 'react';
import Designer from '../src/components/Designer';
import data from './data';

const layout = {
	width: 350,
	height: 400,
};
const imgObj = {
	href: 'http://localhost:3000/api/v2/file/6188e225c4e0e7005b77ffab',
	// href: 'https://miro.medium.com/max/1000/1*P4Z6NIm0dHypW2NnXqinqg.jpeg',
	width: layout.width,
	height: layout.height,
	elementType: 'image',
	x: 0,
	y: 0,
	fillOpacity: 1,
};
const CustomDesigner = () => {
	const [objects, setObjects] = useState([...data.dataSet1, imgObj]);

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
					// console.log(value);
					setObjects(value);
				}}
				onDelete={(obj) => console.log('deleteObject', obj)}
				onAddClusterClick={() => console.log('add new cluster')}
			/>
		</div>
	);
};

export default CustomDesigner;
