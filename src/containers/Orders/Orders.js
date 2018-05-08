import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-instances/order';
import errorHandler from '../../hoc/errorHandler/errorHandler';

class Orders extends Component {
	state = {
		orders: [],
		loading: true
	};

	componentDidMount() {
		const orders = [];
		axios.get('/orders.json')
			.then(response => {
				 for(let key in response.data) {
				 	orders.push({
				 		...response.data[key],
				 		id: key
				 	});
				 }
				 this.setState({orders, loading: false});
			})
			.catch(err => {
				this.setState({loading: false});
			});
	}

	render() {
		return(
			<div>
				{this.state.orders.map(order => (
					<Order 
						key={order.id} 
						ingredients={order.ingredients}
						total={order.total} />
				))}
			</div>
		);
	}
}

export default errorHandler(Orders, axios);