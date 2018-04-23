import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import Controller from '../../components/Controller/Controller';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/UI/OrderSummary/OrderSummary';

const BASE_PRICE = 3;
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
				totalPrice: BASE_PRICE,
				purchasable: false,
				ordering: false
			};

	updatePurchaseState = () => {
		for(let ing in this.state.ingredients) {
			if(this.state.ingredients[ing] > 0) {
				return this.setState({purchasable: true});
			}
		}
		this.setState({purchasable: false});
	};

	makeOrderHandler = () => {
		this.setState({ordering: true});
	};

	cancelOrderHandler = () => {
		this.setState({ordering: false});
	};

	continueCheckoutHandler = () => {
		alert('Checkout');
	};

	addIngredientHandler = (type) => {
		const updatedIngredients = {...this.state.ingredients};
		updatedIngredients[type]++;
		const additionalFee = INGREDIENT_PRICES[type];

		this.setState(prevState => ({
			totalPrice: prevState.totalPrice += additionalFee,
			ingredients: updatedIngredients
		}), () => this.updatePurchaseState())
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
		}), () => this.updatePurchaseState())
	};

	render() {
		return(
			<React.Fragment>
				<Modal show={this.state.ordering} closeModal={this.cancelOrderHandler}>
					<OrderSummary 
						ingredients={this.state.ingredients}
						basePrice={BASE_PRICE}
						ingsPrice={INGREDIENT_PRICES} 
						total={this.state.totalPrice}
						cancelOrder={this.cancelOrderHandler} 
						continue={this.continueCheckoutHandler} />
				</Modal>
				<Burger ingredients={this.state.ingredients}/>
				<Controller 
					onAdded={this.addIngredientHandler} 
					onRemoved={this.removeIngredientHandler} 
					currentIngredients={this.state.ingredients} 
					total={this.state.totalPrice} 
					purchasable={this.state.purchasable} 
					makeOrder={this.makeOrderHandler} />
			</React.Fragment>
		);
	}
}

export default BurgerMaker;