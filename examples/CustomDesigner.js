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
				objects={objects}
				onUpdate={(value) => {
					// console.log(value);
					setObjects(value);
				}}
			/>
		</div>
	);
};

export default CustomDesigner;
