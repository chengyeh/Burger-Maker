import React, { Component } from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Spinner from '../Spinner/Spinner';

class Modal extends Component {

	shouldComponentUpdate(nextProps) {
		return (nextProps.show !== this.props.show) || (nextProps.sending !== this.props.sending);
	}

	render() {
		return(
			<React.Fragment>
				<Backdrop show={this.props.show} clicked={this.props.closeModal}/>
				<div 
					className={classes.Modal}
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.show ? '1' : '0'
					}}>
					{this.props.sending ? <Spinner /> : null}
					{this.props.children}
				</div>
			</React.Fragment>
		);
	}
}
export default Modal;