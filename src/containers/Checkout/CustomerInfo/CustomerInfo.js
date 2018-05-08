import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './CustomerInfo.css';
import axios from '../../../axios-instances/order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class CustomerInfo extends Component{
	state = {
		formConfig: {
			fname: {
				eleType: 'input',
				eleConfig: {
					type: 'text',
					placeholder: 'First name',
					autoFocus: true
				},
				value: ''
			},
			lname: {
				eleType: 'input',
				eleConfig: {
					type: 'text',
					placeholder: 'Last name'
				},
				value: ''
			},
			email: {
				eleType: 'input',
				eleConfig: {
					type: 'email',
					placeholder: 'Email'
				},
				value: ''
			},
			street: {
				eleType: 'input',
				eleConfig: {
					type: 'text',
					placeholder: 'Street'
				},
				value: ''
			},
			city: {
				eleType: 'input',
				eleConfig: {
					type: 'text',
					placeholder: 'City'
				},
				value: ''
			},
			zipCode: {
				eleType: 'input',
				eleConfig: {
					type: 'text',
					placeholder: 'ZIP Code'
				},
				value: ''
			},
			method: {
				eleType: 'select',
				eleConfig: {
					options: [
						{value: '', displayValue: 'Choose a method'},
						{value: 'carryout', displayValue: 'Carryout'},
						{value: 'delivery', displayValue: 'Delivery'}
					]
				},
				value: ''
			},
		},
		sendingOrder: false
	};

	orderPlacedHandler = (event) => {
		event.preventDefault();
		this.setState({sendingOrder: true});

		const order = {
			ingredients: this.props.ingredients,
			total: this.props.total,
		};

		axios.post('/orders.json', order)
			.then(response => {
				this.setState({sendingOrder: false});
				this.props.history.push('/');
			})
			.catch(err => {
				this.setState({sendingOrder: false});
			});
	};

	inputChangedHandler = (event, elementId) => {
		const updatedForm = {...this.state.formConfig};
		const updatedEle = {...updatedForm[elementId]};
		updatedEle.value = event.target.value;
		updatedForm[elementId] = updatedEle;
		this.setState({formConfig: updatedForm});
	};

	render() {
		const formEleArray = Object.entries(this.state.formConfig).map(ele => {
			return {
				id: ele[0],
				config: ele[1]
			}
		});

		let form = (				
			<form>
				{formEleArray.map(ele => (
					<Input 
						key={ele.id}
						eleType={ele.config.eleType} 
						eleConfig={ele.config.eleConfig} 
						value={ele.config.value} 
						changed={(e) => this.inputChangedHandler(e, ele.id)} />
				))}
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