import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import Controller from '../../components/Controller/Controller';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/UI/OrderSummary/OrderSummary';
import axios from '../../axios-instances/order';
import errorHandler from '../../hoc/errorHandler/errorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

const BASE_PRICE = 3;
const INGREDIENT_PRICES = {
	lettuce: 0.5,
	meat: 1.25,
	bacon: 1,
	cheese: 0.75
};

class BurgerMaker extends Component {
	state = {
				ingredients: null,
				totalPrice: BASE_PRICE,
				purchasable: false,
				ordering: false,
				sendingOrder: false,
				error: false
			};

	componentDidMount() {
		axios.get('https://react-burger-shop-lcy.firebaseio.com/ingredients.json')
			.then(res => {
				const {lettuce, meat, bacon, cheese} = res.data;
				const ingredients = {lettuce, meat, bacon, cheese};
				this.setState({ingredients});
			})
			.catch(err => {
				this.setState({error: true});
			})
	}

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
		// this.setState({sendingOrder: true});

		// const order = {
		// 	ingredients: this.state.ingredients,
		// 	total: this.state.totalPrice,
		// 	customer: {
		// 		name: 'Brian Lee',
		// 		email: 'test@test.com',
		// 		address: {
		// 			stree: 'Teststreet',
		// 			city: 'Testcity',
		// 			zidCode: '66666'
		// 		},
		// 		phone: '9199887777'
		// 	}
		// };

		// axios.post('/orders.json', order)
		// 	.then(response => {
		// 		this.setState({sendingOrder: false, ordering: false});
		// 	})
		// 	.catch(err => {
		// 		this.setState({sendingOrder: false});
		// 	});

		const queryParams = [];
		for(let key in this.state.ingredients) {
			queryParams.push(encodeURIComponent(key) + '=' + encodeURIComponent(this.state.ingredients[key]));
		}
		const queryString = queryParams.join('&');

		this.props.history.push({
			pathname: '/checkout',
			search: `?${queryString}`
		});
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
		let orderSummary = null;
		let main = this.state.error ? <p style={{textAlign: 'center'}}>Please refresh the page</p> : <Spinner />;
		if(this.state.ingredients) {
			orderSummary = (
				<OrderSummary 
				ingredients={this.state.ingredients}
				basePrice={BASE_PRICE}
				ingsPrice={INGREDIENT_PRICES} 
				total={this.state.totalPrice}
				cancelOrder={this.cancelOrderHandler} 
				continue={this.continueCheckoutHandler} />
			);

			main = (
				<React.Fragment>
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

		return(
			<React.Fragment>
				<Modal show={this.state.ordering} 
					   sending={this.state.sendingOrder} 
					   closeModal={this.cancelOrderHandler}>
					{orderSummary}
				</Modal>
				{main}
			</React.Fragment>
		);
	}
}

export default errorHandler(BurgerMaker, axios);