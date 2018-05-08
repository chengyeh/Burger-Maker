import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-instances/order';

class Orders extends Component {
	state = {
		orders: null,
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
		console.log(this.state)
		return(
			<div>
				<Order />
				<Order />
			</div>
		);
	}
}

export default Orders;