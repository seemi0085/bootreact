import {Switch,Route} from 'react-router-dom'
import React from 'react';
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Dashboard from './Components/Common/Dashboard'

function App() {
  return (
    <React.Fragment>
      {/* <Navbar/> */}
      <Route>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <Route path="/dashboard" component={Navigationbar} /> */}
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Route>
    </React.Fragment>
  );
}

export default App;
