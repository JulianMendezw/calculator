import './App.css';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import ExchangeIcon from './Exchange_icon';

const options = [
  { value: 'BTC', label: 'BTC 0.1' },
  { value: 'PVU', label: 'PVU 1.9' },
  { value: 'BNB', label: 'BNB 5.0' }
];



function App() {
  const onDropdownChange = (value) => {
    console.log(value);
  }

  return (
    <>
      <div className="App">
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
        <div style={{ width: '100%', margin: '20px auto', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '120px', margin: '0 20px' }}>
            <Select
              options={options}
              onChange={onDropdownChange}
            />
          </div>

          <ExchangeIcon />

          <div style={{ width: '120px', margin: '0 20px' }}>
            <Select
              options={options}
              onChange={onDropdownChange}
            />
          </div>
          <div style={{ margin: '0 20px' }}>
            <Button variant="contained" color="primary" style={{ width: '120px', height: '38px', margin: '0 20px' }}>
              USD
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
