import './App.css';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const options = [
  { value: 'BTC', label: 'BTC 0.1' },
  { value: 'PVU', label: 'PVU 1.9' },
  { value: 'BNB', label: 'BNB 5.0' }
];

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});



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
