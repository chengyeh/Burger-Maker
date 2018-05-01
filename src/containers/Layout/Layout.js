import React, {Component} from 'react';

import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		sideDrawerVisble: false
	};

	toggleSideDrawerHandler = () => {
		this.setState(prevState => ({
			sideDrawerVisble: !prevState.sideDrawerVisble
		}))
	};

	closeSideDrawerHandler = () => {
		this.setState({sideDrawerVisble: false})
	};

	render() {
		return(
			<React.Fragment>
				<Toolbar toggled={this.toggleSideDrawerHandler}/>
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