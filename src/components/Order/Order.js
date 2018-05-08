import React from 'react';

import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import className from './Order.css'

const Order = (props) => {
	const ingredients = [];
	for(let key in props.ingredients) {
		ingredients.push({
			name: key,
			amount: props.ingredients[key]
		})
	}

	const ingredientsList = ingredients.map(ing => {
		return <span 
				key={ing.name}
				className={className.Ingredient}>{`${ing.name} (${ing.amount})`}</span>
	})

	return(
		<div className={className.Order}>
			<p>Ingredients: {ingredientsList}</p>
			<p>Total: <CurrencyFormat amount={props.total}/></p>
		</div>

	);
};

export default Order;