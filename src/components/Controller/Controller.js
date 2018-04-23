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
					onAdded={() => props.onAdded(item.type)} 
					onRemoved={() => props.onRemoved(item.type)} 
					disabled={!props.currentIngredients[item.type]}/>;
		})}
		<p>Total Price: <strong>{new Intl.NumberFormat(undefined, {style: 'currency', currency: 'USD' })
					.format(props.total)}</strong></p>
	</div>
);

export default Controller;