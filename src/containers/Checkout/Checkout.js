import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import CustomerInfo from './CustomerInfo/CustomerInfo';

class Checkout extends Component {
	state = {
		ingredients: null,
		total: 0
	};

	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		let total = 0;

		for(let ing of query.entries()) {
			if(ing[0] === 'total') {
				total = +ing[1];
			} else {
				ingredients[ing[0]] = +ing[1]; // Convert from string to number
			}
		}

		this.setState({ingredients, total});
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
				<Route 
					path={`${this.props.match.path}/customer-info`} 
					render={(props) => (
						<CustomerInfo 
							ingredients={this.state.ingredients} 
							total={this.state.total}
							{...props} />
					)} />
			</div>
		);
	}
}

export default Checkout;