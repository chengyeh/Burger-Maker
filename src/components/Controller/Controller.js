import React from 'react';

import ControllerItem from './ControllerItem/ControllerItem';
import classes from './Controller.css';

const items = [
	{label: 'Lettuce', type: 'lettuce'},
	{label: 'Meat', type: 'meat'},
	{label: 'Bacon', type: 'bacon'},
	{label: 'Cheese', type: 'cheese'}
];

const Controller = (props) => (
	<div className={classes.Controller}>
		{items.map(item => {
			return <ControllerItem 
					key={item.label} 
					label={item.label} 
					onAdded={() => props.onAdded(item.type)} />;
		})}
	</div>
);

export default Controller;