import React, { useState } from 'react';
import Designer from '../src/components/Designer';
import data from './data';

const CustomDesigner = () => {
	const [objects, setObjects] = useState(data.dataSet1);

	return (
		<div>
			<Designer
				width={350}
				height={400}
				// background={'#ece2be'}
				backgroundImage="https://miro.medium.com/max/1000/1*P4Z6NIm0dHypW2NnXqinqg.jpeg"
				backgroundSize="contain"
				backgroundRepeat="no-repeat"
				objects={objects}
				clusterList={[
					{ label: 'a', value: 'a' },
					{ label: 'b', value: 'b' },
				]}
				onUpdate={(value) => {
					console.log(value);
					setObjects(value);
				}}
				onDelete={(obj) => console.log('deleteObject', obj)}
				onAddClusterClick={() => console.log('add new cluster')}
			/>
		</div>
	);
};

export default CustomDesigner;
