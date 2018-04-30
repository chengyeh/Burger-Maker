import React from 'react';

import Logo from '../../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
	const sideDrawerCss = [classes.SideDrawer];
	if(props.show) {
		sideDrawerCss.push(classes.Open)
	} else {
		sideDrawerCss.push(classes.Close)
	}

	return(
		<React.Fragment>
			<Backdrop show={props.show} clicked={props.closed}/>
			<div className={sideDrawerCss.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavBar />
				</nav>
			</div>
		</React.Fragment>
	);
};

export default SideDrawer;