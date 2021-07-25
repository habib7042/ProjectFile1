import React from 'react'
import{ Route, Switch} from 'react-router-dom'
import Pokehome from './components/Pokehome'
import Pokemon from './components/Pokemon'

function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Pokehome {...props}/>} />

      <Route
      exact
      path="/:pokemonID"
      render={(props) => <Pokemon {...props}/>}
      />

    </Switch>
    
  )
}

export default App
