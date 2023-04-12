import React, { useContext } from "react";
import { CurrencyRow } from "./CurrencyRow";
import { CurrencyContext } from "../App";

export const CurrencyTable = () => {
	const { prices } = useContext(CurrencyContext);

	return (
		<div className="currencyTable">
			{Object.entries(prices).forEach(([name, price]) => (
				<CurrencyRow name={name} price={price} />
			))}
		</div>
	);
};
