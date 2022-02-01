import React from "react";
import "./App.css";
   

import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/homePage';
import ModalPage from './pages/ModalPage';
import NotFound from './Components/ui/NotFound.jsx'
import BookVisitPage from './pages/BookVisitPage';
import CovidPage from './Components/CovidComponent/CovidPage'
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home'/>
        </Route>
        <Route path='/home' component={HomePage}/>
        <Route path='/visiting' component={ModalPage} />
        <Route path='/bookvisit' component={BookVisitPage} />
        <Route path='/covid' component={CovidPage}/>
        <Route path='**' component={NotFound} />
      </Switch>

      {/* <TabToggle /> */}
    {/* <h1>Vezeeta website</h1>
    <button className='btn btn-danger'>HI</button>
    <Doctorcard/> */}

    </React.Fragment>
  );
}

export default App;
