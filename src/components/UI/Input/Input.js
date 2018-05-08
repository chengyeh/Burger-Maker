import React from 'react';

import classes from './Input.css';

const Input = (props) => {
	let inputEl = null;

	switch (props.eleType) {
		case 'input':
			inputEl = <input 
						className={classes.InputEl} 
						{...props.eleConfig} 
						value={props.value} 
						onChange={props.changed} />;
			break;
		case 'textarea':
			inputEl = <textarea 
						className={classes.InputEl} 
						{...props.eleConfig} 
						value={props.value}
						onChange={props.changed} />;
			break;
		case 'select':
			inputEl = (
					<select 
						className={classes.InputEl} 
						value={props.value}
						onChange={props.changed}>
						{props.eleConfig.options.map(option => (
							<option key={option.value} value={option.value}>
								{option.displayValue}
							</option>
						))}
					</select>
					  );
			break;
		default:
			inputEl = <input 
						className={classes.InputEl} 
						{...props.eleConfig} 
						value={props.value}
						onChange={props.changed} />;

	}
	return(
		<div className={classes.Input}>
			<label className={classes.Label}>{props.label}</label>
			{inputEl}
		</div>
	);
}

export default Input;