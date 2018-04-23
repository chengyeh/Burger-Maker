import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import Controller from '../../components/Controller/Controller';

const INGREDIENT_PRICES = {
	lettuce: 0.5,
	meat: 1.25,
	bacon: 1,
	cheese: 0.75
};

class BurgerMaker extends Component {
	state = {
				ingredients: {
					lettuce: 0,
					meat: 0,
					bacon: 0,
					cheese: 0,
				},
				totalPrice: 4
			};

	addIngredientHandler = (type) => {
		const updatedIngredients = {...this.state.ingredients};
		updatedIngredients[type]++;
		const additionalFee = INGREDIENT_PRICES[type];

		this.setState(prevState => ({
			totalPrice: prevState.totalPrice += additionalFee,
			ingredients: updatedIngredients
		}))

	};

	removeIngredientHandler = (type) => {
		if(!this.state.ingredients[type]) {
			return;
		}

		const updatedIngredients = {...this.state.ingredients};
		updatedIngredients[type]--;
		const subtractingFee = INGREDIENT_PRICES[type];

		this.setState(prevState => ({
			totalPrice: prevState.totalPrice -= subtractingFee,
			ingredients: updatedIngredients
		}))
	};

	render() {
		return(
			<React.Fragment>
				<Burger ingredients={this.state.ingredients}/>
				<Controller 
					onAdded={this.addIngredientHandler} 
					onRemoved={this.removeIngredientHandler} />
			</React.Fragment>
		);
	}
}

export default BurgerMaker;