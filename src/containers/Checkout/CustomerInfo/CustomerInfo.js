import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './CustomerInfo.css';

class CustomerInfo extends Component{
	state = {
		name: {
			first: '',
			last: '',
		},
		email: '',
		address: {
			street: '',
			city: '',
			zipCode: ''
		}
	};

	render() {
		return(
			<div className={classes.CustomerInfo}>
				<h4>Enter your contact data</h4>
				<form>
					<input type='text' name='fname' placeholder='First name' />
					<input type='text' name='lname' placeholder='Last name' />
					<input type='email' name='email' placeholder='Email' />
					<input type='text' name='street' placeholder='Street' />
					<input type='text' name='city' placeholder='City' />
					<input type='text' name='zip_code' placeholder='Zip Code' />
					<Button btnType='Success'>PLACE ORDER</Button>
				</form>
			</div>
		);
	}
}

export default CustomerInfo;