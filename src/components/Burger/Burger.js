import React from 'react';

import classes from './Burger.css';
import Ingredient from './Ingredient/Ingredient'

const Burger = (props) => {
	const finalBurger = Object.entries(props.ingredients)
		.map(ig => {
			return [...Array(ig[1])].map((_, index) => {
				return <Ingredient key={ig[0] + index} type={ig[0]} />
			})
		});

	return(
		<div className={classes.Container}>
			<Ingredient type='breadTop' />
			{finalBurger}
			<Ingredient type='breadBottom' />
		</div>
	);
};

export default Burger;