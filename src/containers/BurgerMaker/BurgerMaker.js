import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';

class BurgerMaker extends Component {
	state = {
				ingredients: {
					salad: 0,
					meat: 0,
					bacon: 0,
					cheese: 0,
				}
			};

	render() {
		return(
			<React.Fragment>
				<Burger ingredients={this.state.ingredients}/>
				<div>Make controller</div>
			</React.Fragment>
		);
	}
}

export default BurgerMaker;