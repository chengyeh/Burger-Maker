import React from 'react';

const CurrencyFormat = (props) => (
	<strong>
		{new Intl.NumberFormat(undefined, {style: 'currency', currency: 'USD' })
					.format(props.amount)}</strong>
);

export default CurrencyFormat;