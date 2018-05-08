import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavBarItem.css';

const NavBarItem = (props) => (
	<li className={classes.NavBarItem}>
		<NavLink to={props.link} exact activeClassName={classes.Active}>
			{props.children}
		</NavLink>
	</li>
);

export default NavBarItem;