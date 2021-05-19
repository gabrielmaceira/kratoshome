import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { PublicacionContainer } from './components/Publicacion/PublicacionContainer'
import { MasPublicaciones } from './components/Publicacion/MasPublicaciones/MasPublicaciones'
import { Servicios } from './components/Servicios/Servicios'
import './App.css'

function App() {




  return (
    <BrowserRouter>
      <Switch>
        {/* HOME */}
        <Route exact path='/'>
          <Home />
        </Route>
        {/* HOME */}
        {/* SERVICIOS */}
        <Route exact path='/servicios'>
          <Servicios />
        </Route>
        {/* SERVICIOS */}

        <Route exact path='/publicaciones'>
          <MasPublicaciones />
        </Route>
        <Route path='/publicaciones/:id'>
          <PublicacionContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  )

}

export default App;
