import React from 'react'

export default function CurrencyConverter() {
	return (
		<div>
			<input type="number" className="inputCurrencyConverter"/>
			<select className="selectCurrencyConverter">
				<option value="H1">$</option>
			</select>
		</div>
	)
}
