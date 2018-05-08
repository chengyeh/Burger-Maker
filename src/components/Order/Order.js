import React from 'react';

import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import className from './Order.css'

const Order = (props) => (
	<div className={className.Order}>
		<p>Ingredients: lettuce (1)</p>
		<p>Total: <CurrencyFormat amount={7.25}/></p>
	</div>
);

export default Order;