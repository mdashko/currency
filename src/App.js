import React, { useState, createContext, useEffect } from "react";
import "./scss/App.scss";
import { CurrencyRow } from "./components/CurrencyRow";
import { CurrencyMenu } from "./components/CurrencyMenu";
import { CurrencyTable } from "./components/CurrencyTable";

export const CurrencyContext = createContext(null);
function App() {
	const [currencies, setCurrencies] = useState([]);
	const [pricesPairs, setPricesPairs] = useState([]);

	const fetchCurrencies = () => {
		fetch(
			"https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
		).then((response) =>
			response.json().then((actualData) => setCurrencies(actualData))
		);
	};

	useEffect(() => {
		fetchCurrencies();
	}, []);

	const handleCurrencyButton = (currency) => {
		let pairs = [];
		fetch(
			`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=${currency}&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false`
		)
			.then((response) =>
				response
					.json()
					.then((actualData) =>
						Object.entries(actualData).forEach(([name, price]) =>
							pairs.push({ [name]: price[currency] })
						)
					)
			)
			.then(() => setPricesPairs(pairs));

		console.log("here");
	};

	return (
		<div className="App">
			{/* <CurrencyContext.Provider
				value={{ prices, currencies, fetchCurrencies, handleCurrencyButton }}
			>
				<CurrencyMenu />
				<CurrencyTable />
			</CurrencyContext.Provider> */}
			<div className="currencyMenu">
				{currencies.map((cur, index) => (
					<button
						className="currencyMenu_btn"
						key={index}
						onClick={() => handleCurrencyButton(cur)}
					>
						{cur}
					</button>
				))}
			</div>
			<div className="currencyTable">
				{pricesPairs.map((pair) => {
					for (let key in pair) {
						console.log(`${key}: ${pair[key]}`);
						return <CurrencyRow name={key} price={pair[key]} />;
					}
				})}
			</div>
		</div>
	);
}

export default App;
