import React from 'react';

import NavBarItem from './NavBarItem/NavBarItem';
import classes from './NavBar.css';

const NavBar = () => (
	<ul className={classes.NavBar}>
		<NavBarItem link="/">Burger Maker</NavBarItem>
		<NavBarItem link="/orders">Orders</NavBarItem>
	</ul>
);

export default NavBar;