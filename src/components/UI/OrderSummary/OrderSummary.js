import React from 'react';

const OrderSummary = (props) => {
	const listOfAddedIngredients = Object.entries(props.ingredients).filter(ing => {
		return ing[1] > 0;
	}).map(ing => {
		return(
			<li key={ing[0]}>
				<span style={{textTransform: 'capitalize'}}>{ing[0]}</span>: {ing[1]}
			</li>
		);
	})

	return(
		<React.Fragment>
			<h3>Order Summary</h3>
			<p>The following ingredients have been added to your burger:</p>
			<ul>
				{listOfAddedIngredients}
			</ul>
			<p>Continue to checkout?</p>
		</React.Fragment>
	);
};

export default OrderSummary;