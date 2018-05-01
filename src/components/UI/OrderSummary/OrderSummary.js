import React, {Component} from 'react';

import Button from '../Button/Button';
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat';

class OrderSummary extends Component {

	shouldComponentUpdate(nextProps) {
		return nextProps.ingredients !== this.props.ingredients;
	}

	render() {
		const listOfAddedIngredients = Object.entries(this.props.ingredients).filter(ing => {
			return ing[1] > 0;
		}).map(ing => {
			return(
				<li key={ing[0]}>
					<span style={{textTransform: 'capitalize'}}>{ing[0]}</span>: {ing[1]} <strong>(+ </strong>
						<CurrencyFormat amount={this.props.ingsPrice[ing[0]] * ing[1]}/>)</li>
			);
		})
		return(
			<React.Fragment>
				<h3>Order Summary</h3>
				<p>The following ingredients have been added to your burger:</p>
				<ul>
					{listOfAddedIngredients}
					<li>
						Base Price: <CurrencyFormat amount={this.props.basePrice} /></li>
				</ul>
				<hr/>
				<p>Total Price: <CurrencyFormat amount={this.props.total} /></p>
				<p>Continue to checkout?</p>
				<Button btnType='Danger' clicked={this.props.cancelOrder}>Cancel</Button>
				<Button btnType='Success' clicked={this.props.continue}>Continue</Button>
			</React.Fragment>
		);
	}
} 

export default OrderSummary;