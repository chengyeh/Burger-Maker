import React from 'react';

import NavBarItem from './NavBarItem/NavBarItem';
import classes from './NavBar.css';

const NavBar = () => (
	<ul className={classes.NavBar}>
		<NavBarItem link="/" active>Burger Maker</NavBarItem>
		<NavBarItem link="/">Checkout</NavBarItem>
	</ul>
);

export default NavBar;