import React from 'react';

import classes from './Burger.css';
import Ingredient from './Ingredient/Ingredient'

const Burger = (props) => {
	let allIngredients = Object.entries(props.ingredients)
		.map(ig => {
			return [...Array(ig[1])].map((_, index) => {
				return <Ingredient key={ig[0] + index} type={ig[0]} />
			})
		}).reduce((arr, current) => {
			return arr.concat(current);
		}, []);

	if(!allIngredients.length) {
		allIngredients = <p>Start adding your favorite ingredients!!</p>;
	}

	return(
		<div className={classes.Container}>
			<Ingredient type='breadTop' />
			{allIngredients}
			<Ingredient type='breadBottom' />
		</div>
	);
};

export default Burger;