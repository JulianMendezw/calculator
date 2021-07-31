import './App.css';
import Select from 'react-select';

const options = [
	{ value: 'BTC', label: 'BTC 0.1' },
	{ value: 'PVU', label: 'PVU 1.9' },
	{ value: 'BNB', label: 'BNB 5.0' }
];


export default function FavCurrency() {
	const onDropdownChange = (value) => {
		console.log(value);
	}
	return (
		<div style={{ width: '100%', margin: '20px auto', display: 'flex', justifyContent: 'center' }}>
			<div style={{ width: '120px', margin: '0 20px' }}>
				<Select
					options={options}
					onChange={onDropdownChange}
				/>
			</div>
			<div style={{ width: '120px', margin: '0 20px' }}>
				<Select
					options={options}
					onChange={onDropdownChange}
				/>
			</div>
			<div style={{ width: '120px', margin: '0 20px' }}>
				<Select
					options={options}
					onChange={onDropdownChange}
				/>
			</div>
			<div style={{ width: '120px', margin: '0 20px' }}>
				<Select
					options={options}
					onChange={onDropdownChange}
				/>
			</div>
		</div>
	)
}
