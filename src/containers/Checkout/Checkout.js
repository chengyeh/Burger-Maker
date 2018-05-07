import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import CustomerInfo from './CustomerInfo/CustomerInfo';

class Checkout extends Component {
	state = {
		ingredients: null
	};

	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};

		for(let ing of query.entries()) {
			ingredients[ing[0]] = +ing[1]; // Convert from string to number
		}

		this.setState({ingredients});
	}

	checkoutCancelHandler = () => {
		this.props.history.goBack();
	};

	checkoutContinueHandler = () => {
		this.props.history.replace(`${this.props.match.path}/customer-info`);
	};

	render() {
		let checkoutSum = null;
		if(this.state.ingredients) {
			checkoutSum = <CheckoutSummary 
							ingredients={this.state.ingredients} 
							cancelCheckout={this.checkoutCancelHandler} 
							continueCheckout={this.checkoutContinueHandler} />
		}

		return(
			<div>
				{checkoutSum}
				<Route path={`${this.props.match.path}/customer-info`} component={CustomerInfo} />
			</div>
		);
	}
}

export default Checkout;