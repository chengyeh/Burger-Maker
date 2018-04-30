import React, {Component} from 'react';

import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		sideDrawerVisble: true
	};

	closeSideDrawerHandler = () => {
		this.setState({sideDrawerVisble: false})
	}

	render() {
		return(
			<React.Fragment>
				<Toolbar />
				<SideDrawer 
					show={this.state.sideDrawerVisble} 
					closed={this.closeSideDrawerHandler}/>
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</React.Fragment>
		);
	}
}

export default Layout;