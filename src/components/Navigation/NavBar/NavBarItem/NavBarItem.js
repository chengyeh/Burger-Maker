import React from 'react';

import classes from './NavBarItem.css';

const NavBarItem = (props) => (
	<li className={classes.NavBarItem}>
		<a 
			className={props.active ? classes.Active : null} 
			href={props.link}>{props.children}</a>
	</li>
);

export default NavBarItem;