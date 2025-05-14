import { useState, useEffect } from 'react';
import useDebounce from './useDebounce';
import './App.css';

export const App = () => {
  const [searchVal, setSearchVal] = useState("");
  // debounceVal is unnecessary as it's just to visualize the input.
  const [debounceVal, setDebounceVal] = useState("");

  const debounceValue = useDebounce(searchVal, 1000);

  useEffect(() => {
    console.log("Debounced:", searchVal);
    setDebounceVal(searchVal);
  }, [debounceValue]);

  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <div className="App">
      <h1>Debounce</h1>
      <div className="container">
        <div className="search-input">
          <input type="text" value={searchVal} onChange={handleChange} />
        </div>
        <div className="search-data">{debounceVal}</div>
      </div>
    </div>
  );
};

export default App;