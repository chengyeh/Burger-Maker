import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css'

const OrderSummary = (props) => {
	return(
		<div className={classes.CheckoutSummary}>
			<h1>Checkout</h1>
			<div style={{width: '100%', margin: 'auto'}}>
				<Burger ingredients={props.ingredients} />
			</div>
			<Button btnType='Danger'>Cancel</Button>
			<Button btnType='Success'>Checkout</Button>
		</div>
	);
};

export default OrderSummary;