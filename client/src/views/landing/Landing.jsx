import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { fetchCountries } from '../../redux/countries/countriesActions';
import styles from './Landing.module.css'

function Landing() {
  
    return (
      <div className={styles.background}>
        <div className={styles.centerDiv}>   
          <h1> WELCOME TO AROUND THE WORLD!</h1>
          <button>
            <NavLink to="/home">
              Home
            </NavLink>
          </button>
        </div>
      </div>
    );
  }

  export default Landing;

