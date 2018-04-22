import React from 'react';

import ControllerItem from './ControllerItem/ControllerItem';
import classes from './Controller.css';

const Controller = (props) => (
	<div className={classes.Controller}>
		<ControllerItem label="salad" />
		<ControllerItem label="meat" />
	</div>
);

export default Controller;