import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const errorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		constructor(props) {
			super(props)
			this.state ={
				error: null
			};
			this.setInterceptors()
		}

		componentWillUnmount(){
			console.log('errorHandler: unmount', this.reqInterceptor, this.resInterceptor)
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.response.eject(this.resInterceptor);
		}

		setInterceptors() {
			this.reqInterceptor = axios.interceptors.request.use(req => {
					this.setState({error: null});
					return req;
				}, error => {
					this.setState({error});
				});

			this.resInterceptor = axios.interceptors.response.use(res => res, error => {
					this.setState({error});
				});
		}

		confirmedErrorHandler = () => {
			this.setState({error: null});
		}

		render() {
			return(
				<React.Fragment>
					<Modal show={this.state.error} closeModal={this.confirmedErrorHandler}>
						<p>{this.state.error ? this.state.error.message : null}</p>
					</Modal>
					<WrappedComponent {...this.props} />
				</React.Fragment>
			);
		}
	}
};

export default errorHandler;