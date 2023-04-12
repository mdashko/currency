import React from "react";

export const CurrencyRow = ({ name, price }) => {
	return (
		<div className="currencyRow">
			<h1>{name}</h1>
			<h2>{price}</h2>
		</div>
	);
};
