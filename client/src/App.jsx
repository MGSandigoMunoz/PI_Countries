import { Route, Routes} from 'react-router-dom'

//Componentes con views a renderizar
import Detail from './views/detail/Detail'
import Form from './views/form/Form'
import Home from './views/home/Home'
import Landing from './views/landing/Landing'
import Activities from './views/activities/Activities'

import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route exact path='/home' element={ <Home/> }/>
        <Route path='/home/:idPais' element= { <Detail/> }/>
        <Route path='/form' element= { <Form/> }/>
        <Route path='/' element={ <Landing/> }/>
        <Route path='/activities' element={ <Activities/> }/>
      </Routes>
    </div>
  )
}

export default App;
