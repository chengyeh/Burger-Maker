import React from 'react';

import ControllerItem from './ControllerItem/ControllerItem';
import classes from './Controller.css';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';

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
		<p>Total Price: <CurrencyFormat amount={props.total} /></p>
		<button 
			className={classes.OrderButton}
			disabled={!props.purchasable}
			onClick={props.makeOrder}>Place Order</button>
	</div>
);

export default Controller;