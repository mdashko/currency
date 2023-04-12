import React, { useEffect, useContext } from "react";
import { CurrencyContext } from "../App";

export const CurrencyMenu = () => {
	const { currencies, fetchCurrencies, handleCurrencyButton } = useContext(CurrencyContext);

	useEffect(() => {
		fetchCurrencies();
	}, []);
	
	return (
		<>
			<div className="currencyMenu">
				{currencies.map((cur, index) => (
					<button
						className="currencyMenu_btn"
						key={index}
						onClick={()=>handleCurrencyButton(cur)}
					>
						{cur}
					</button>
				))}
			</div>
		</>
	);
};
