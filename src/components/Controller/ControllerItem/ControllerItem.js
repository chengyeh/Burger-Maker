import React from 'react';

const ControllerItem = (props) => (
	<div>
		<div>{props.label}</div>
		<button>Less</button>
		<button>More</button>		
	</div>
);

export default ControllerItem;