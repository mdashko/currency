import React, { useState, createContext } from "react";
import "./scss/App.scss";
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
			<CurrencyContext.Provider
				value={{
					pricesPairs,
					currencies,
					fetchCurrencies,
					handleCurrencyButton,
				}}
			>
				<CurrencyMenu />
				<CurrencyTable />
			</CurrencyContext.Provider>
		</div>
	);
}

export default App;
