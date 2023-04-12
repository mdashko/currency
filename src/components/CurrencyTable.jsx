import React, { useState, useEffect } from "react";

export const CurrencyTable = () => {
	const [currencies, setCurrencies] = useState([]);
	//const [prices, setPrices] = useState([]);

	const fetchCurrencies = () => {
		fetch(
			"https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
		).then((response) =>
			response.json().then((actualData) => setCurrencies(actualData))
		);
	};

	const handleCurrencyButton = (currency) => {
		fetch(
			`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=${currency}&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false`
		).then((response) =>
			response.json().then((actualData) => Object.entries(actualData).forEach(([name, price]) => console.log(`${name} ${price[currency]}${currency}`)))
		);
	};

	useEffect(() => {
		fetchCurrencies();
	}, []);

	return (
		<div className="currencyMenu">
			<div>
				{currencies.map((cur, index) => (
					<button key={index} onClick={() => handleCurrencyButton(cur)}>
						{cur}
					</button>
				))}
			</div>
			{/* <div>
				{Object.entries(prices).forEach(([name, price]) => `${name} ${price}`)}
			</div> */}
		</div>
	);
};
