import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Formulario from './Pages/formulario'
import Feed from './Pages/feed'
import Edit from './Pages/edit'

function App() {
  return (
    <Router >

      <Switch>

        <Route path="/formulario" component={Formulario} />
        <Route path="/feed" component={Feed} />
        <Route path="/edit/:id" component={Edit} />

      </Switch>

    </Router>
  )


}

export default App;
