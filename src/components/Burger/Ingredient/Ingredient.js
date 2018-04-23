import React from 'react';
import PropTypes from 'prop-types';

import classes from './Ingredient.css';

const Ingredient = (props) => {
	let ingredient;

	switch (props.type) {
		case 'breadBottom':
			ingredient = <div className={classes.BreadBottom}></div>;
			break;
		case 'breadTop':
			ingredient = (
				<div className={classes.BreadTop}>
					<div className={classes.Seeds1}></div>
					<div className={classes.Seeds2}></div>
				</div>
			);
			break;
		case 'meat':
			ingredient = <div className={classes.Meat}></div>;
			break;
		case 'cheese':
			ingredient = <div className={classes.Cheese}></div>;
			break;
		case 'lettuce':
			ingredient = <div className={classes.Salad}></div>;
			break;
		case 'bacon':
			ingredient = <div className={classes.Bacon}></div>;
			break;
		default:
			ingredient = null;
	}

	return ingredient;
};

Ingredient.propTypes = {
	type: PropTypes.oneOf(['breadTop', 'breadBottom', 'meat', 'cheese', 'lettuce', 'bacon'])
};

export default Ingredient;