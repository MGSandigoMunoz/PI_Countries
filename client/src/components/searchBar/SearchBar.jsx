import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchByName } from '../../redux/countries/countriesActions'

import styles from './SearchBar.module.css'

function SearchBar() {

  const dispatch = useDispatch();

  const[searchCountry, setSearchCountry] = useState('')

  const handleSearch = () => {//Envía el nombre del país a las actions para buscarlo
    dispatch(searchByName(searchCountry));
    setSearchCountry('')
  }

    return (
      <div>
        <input 
        type="text"
        placeholder='Write the name of a country...'
        value={searchCountry}
        onChange={(event)=> setSearchCountry(event.target.value)}
        />

      <button onClick={handleSearch}>Search</button>
      </div>
    );
  }

  export default SearchBar;