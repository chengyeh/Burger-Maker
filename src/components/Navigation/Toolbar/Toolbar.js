import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import ToggleButton from '../SideDrawer/ToggleButton/ToggleButton';

const Toolbar = (props) => (
	<header className={classes.Toolbar}>
		<ToggleButton clicked={props.toggled}/>
		<div className={classes.Logo}>
			<Logo />
		</div>
		<nav className={classes.DesktopMode}>
			<NavBar />
		</nav>
	</header>
);

export default Toolbar;