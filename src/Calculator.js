import React, { useState } from 'react'

export default function Calculator() {

	const [result, setResult] = useState("");

	const handleClick = (e) => {
		setResult(result.concat(e.target.name));
	}

	const clearKey = () => {
		setResult("");
	}
	const backspaceKey = () => {

	}

	const resultKey = () => {

	}

	return (
		<>
			<div className="calculatorContainer" >
				<form>
					<input className="textCalculator" type="text" value={result} />
				</form>

				<div className="keypad">
					<button className="keyCalculator" id="clearButton" onClick={clearKey} >Clear</button>
					<button className="keyCalculator" id="strongButton" onClick={backspaceKey} >C</button>
					<button name="/" className="keyCalculator" id="strongButton" onClick={handleClick}>&divide;</button>
					<button name="7" className="keyCalculator" onClick={handleClick}>7</button>
					<button name="8" className="keyCalculator" onClick={handleClick}>8</button>
					<button name="9" className="keyCalculator" onClick={handleClick}>9</button>
					<button name="*" className="keyCalculator" id="strongButton" onClick={handleClick}>&times;</button>
					<button name="4" className="keyCalculator" onClick={handleClick}>4</button>
					<button name="5" className="keyCalculator" onClick={handleClick}>5</button>
					<button name="6" className="keyCalculator" onClick={handleClick}>6</button>
					<button name="-" className="keyCalculator" id="strongButton" onClick={handleClick}>&ndash;</button>
					<button name="1" className="keyCalculator" onClick={handleClick}>1</button>
					<button name="2" className="keyCalculator" onClick={handleClick}>2</button>
					<button name="3" className="keyCalculator" onClick={handleClick}>3</button>
					<button name="+" className="keyCalculator" id="strongButton" onClick={handleClick}>+</button>
					<button name="0" className="keyCalculator" onClick={handleClick}>0</button>
					<button name="." className="keyCalculator" id="strongButton" onClick={handleClick}>.</button>
					<button className="keyCalculator" id="resultButton" onClick={resultKey} >=</button>
				</div>

			</div>

		</>
	)
}
