import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {getAllCountries} from './redux/countriesSlice'

import { Route, Routes} from 'react-router-dom'

//Componentes con views a renderizar
import Detail from './views/detail/Detail'
import Form from './views/form/Form'
import Home from './views/home/Home'
import Landing from './views/landing/Landing'

import './App.css'

function App() {

  

  const dispatch = useDispatch();
  const getCountries = async () => {
    const { data } = await axios('/countries');
    dispatch(getAllCountries(data));
  };



  return (
    <div>
      <Routes>
        <Route exact path='/home' element={ <Home/> }/>
        <Route path='/home/:idPais' element= { <Detail/> }/>
        <Route path='/form' element= { <Form/> }/>
        <Route path='/' element={ <Landing/> }/>
      </Routes>
    </div>
  )
}

export default App;
