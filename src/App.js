import React, { useState, useContext } from "react";
import "./scss/App.scss";
import { CurrencyMenu } from "./components/CurrencyMenu";
import { CurrencyTable } from "./components/CurrencyTable";
import { CurrencyProvider } from "./components/CurrencyContext";

function App() {
	return (
		<div className="App">
			<CurrencyProvider>
				<CurrencyMenu />
				<CurrencyTable />
			</CurrencyProvider>
		</div>
	);
}

export default App;
