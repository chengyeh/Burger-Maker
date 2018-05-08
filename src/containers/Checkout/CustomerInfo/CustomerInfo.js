import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './CustomerInfo.css';
import axios from '../../../axios-instances/order';
import Spinner from '../../../components/UI/Spinner/Spinner';

class CustomerInfo extends Component{
	state = {
		customer: {
			name: {
				first: '',
				last: '',
			},
			email: '',
			address: {
				street: '',
				city: '',
				zipCode: ''
			},
			phone: ''
		},
		sendingOrder: false
	};

	orderPlacedHandler = (event) => {
		event.preventDefault();
		this.setState({sendingOrder: true});

		const order = {
			ingredients: this.props.ingredients,
			total: this.props.total,
			customer: {
				name: 'Brian Lee',
				email: 'test@test.com',
				address: {
					stree: 'Teststreet',
					city: 'Testcity',
					zidCode: '66666'
				},
				phone: '9199887777'
			}
		};

		axios.post('/orders.json', order)
			.then(response => {
				this.setState({sendingOrder: false});
				this.props.history.push('/');
			})
			.catch(err => {
				this.setState({sendingOrder: false});
			});
	}

	render() {
		let form = (				
			<form>
				<input type='text' name='fname' placeholder='First name' />
				<input type='text' name='lname' placeholder='Last name' />
				<input type='email' name='email' placeholder='Email' />
				<input type='text' name='street' placeholder='Street' />
				<input type='text' name='city' placeholder='City' />
				<input type='text' name='zip_code' placeholder='Zip Code' />
				<Button 
					btnType='Success'
					clicked={this.orderPlacedHandler}>PLACE ORDER</Button>
			</form>);

		if(this.state.sendingOrder) {
			form = <Spinner />
		}

		return(
			<div className={classes.CustomerInfo} style={{position: 'relative'}}>
				<h4>Enter your contact data</h4>
				{form}
			</div>
		);
	}
}

export default CustomerInfo;