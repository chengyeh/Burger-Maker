import React from 'react';

import classes from './ControllerItem.css';

const ControllerItem = (props) => (
	<div className={classes.ControllerItem}>
		<div className={classes.Label}>{props.label}</div>
		<button className={classes.Less}>-</button>
		<button 
			className={classes.More}
			onClick={props.onAdded}>+</button>		
	</div>
);

export default ControllerItem;