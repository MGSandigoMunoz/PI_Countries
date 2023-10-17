// import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'

//Componentes a renderizar
import Card from './components/card/Card'
import CardsView from './components/cardsView/CardsView'
import NavBar from './components/navBar/NavBar'
import SearchBar from './components/searchBar/SearchBar'

//Componentes con views a renderizar
import Detail from './views/detail/Detail'
import Form from './views/form/Form'
import Home from './views/home/Home'
import Landing from './views/landing/Landing'

import './App.css'

function App() {

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
