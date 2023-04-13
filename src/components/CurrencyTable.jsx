import React, { useContext } from "react";
import { CurrencyRow } from "./CurrencyRow";
import { CurrencyContext } from "./CurrencyContext";

export const CurrencyTable = () => {
	const { pricesPairs } = useContext(CurrencyContext);

	return (
		<div className="currencyTable">
			{pricesPairs.map((pair) => {
				for (let key in pair) {
					return <CurrencyRow name={key} price={pair[key]} />;
				}
			})}
		</div>
	);
};
