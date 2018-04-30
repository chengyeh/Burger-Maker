import React from 'react';

import Logo from '../../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import classes from './SideDrawer.css';

const SideDrawer = (props) => {
	return(
		<div className={classes.SideDrawer}>
			<div className={classes.Logo}>
				<Logo />
			</div>
			<nav>
				<NavBar />
			</nav>
		</div>
	);
};

export default SideDrawer;