import Card from '../../components/card/Card';
import SearchBar from '../../components/searchBar/SearchBar'
import CardsView from '../../components/cardsView/CardsView'

import styles from './Home.module.css'

function Home() {

    return (
      <div>
        <h1> HOME!</h1>
        <SearchBar/>
        <CardsView/>

        <div >
          <h3>Continents filter</h3>
            <select >
              <option>Africa</option>
              <option>Europe</option>
              <option>Oceania</option>
              <option>Asia</option>
              <option>North America</option>
              <option>South America</option>
              <option>Antartica</option>
            </select>
        </div>

        <div>
          <h3>Activities filter</h3>
            <select>
              <option>Skydiving</option>
              <option>Rafting</option>
              <option>Hiking</option>
              <option>Rappelling</option>
              <option>Surf</option>
            </select>
        </div>

        <div >
          <h3>Organize countries by ABC</h3>
          <select>
            <option >Ascendente</option>
            <option >Descendente</option>
          </select>
        </div>


        <div >
          <h3>Organize countries by population</h3>
          <select>
            <option >Ascendente</option>
            <option >Descendente</option>
          </select>
        </div>
      </div>
    );
  }

  export default Home;