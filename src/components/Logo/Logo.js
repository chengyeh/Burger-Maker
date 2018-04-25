import React from 'react';

import burgerLogo from '../../assets/images/hamburger.png';
import classes from './Logo.css';

const Logo = (props) => (
	<div className={classes.Logo}>
		<img src={burgerLogo} alt='burger' />
	</div>
);

export default Logo;