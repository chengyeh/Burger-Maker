import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavBar from '../NavBar/NavBar';

const Toolbar = (props) => (
	<header className={classes.Toolbar}>
		<div>MENU</div>
		<div className={classes.Logo}>
			<Logo />
		</div>
		<nav>
			<NavBar />
		</nav>
	</header>
);

export default Toolbar;