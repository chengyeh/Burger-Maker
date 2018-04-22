import React from 'react';

import classes from './Burger.css';
import Ingredient from './Ingredient/Ingredient'

const Burger = (props) => {
	return(
		<div className={classes.Container}>
			<Ingredient type='breadTop' />
			<Ingredient type='salad' />
			<Ingredient type='meat' />
			<Ingredient type='bacon' />
			<Ingredient type='cheese' />
			<Ingredient type='breadBottom' />
		</div>
	);
};

export default Burger;