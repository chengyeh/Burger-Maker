import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
	state = {
		ingredients: null
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		const query = new URLSearchParams(nextProps.location.search);
		const ingredients = {};

		for(let ing of query.entries()) {
			ingredients[ing[0]] = +ing[1]; // Convert from string to number
		}

		return {ingredients};
	}

	checkoutCancelHandler = () => {
		this.props.history.goBack();
	};

	checkoutContinueHandler = () => {
		this.props.history.replace('/checkout/customer-info')
	};

	render() {
		return(
			<div>
				<CheckoutSummary 
					ingredients={this.state.ingredients} 
					cancelCheckout={this.checkoutCancelHandler} 
					continueCheckout={this.checkoutContinueHandler} />
			</div>
		);
	}
}

export default Checkout;