import './App.css';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import ExchangeIcon from './ExchangeIcon';
import CurrencyRow from './CurrencyConverter';
import FavCurrency from './FavCurrency';
import Calculator from './Calculator';


function App() {
  return (
    <>
      <div className="App">
        < FavCurrency />

        <div style={{ width: '100%', margin: '20px auto', display: 'flex', justifyContent: 'center' }}>
          <CurrencyRow />
          <ExchangeIcon />
          <CurrencyRow />

          <div style={{ margin: '0 20px' }}>
            <Button variant="contained" color="primary" style={{ width: '120px', height: '38px', margin: '0 20px' }}>
              USD
            </Button>
          </div>
        </div>

        < Calculator />

      </div>
    </>
  );
};

export default App;
