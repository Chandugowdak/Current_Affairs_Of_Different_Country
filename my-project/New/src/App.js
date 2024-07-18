import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Mover from './Mover';  // IMPORTING COMPONENT FOR NAVIGATION OR HEADER
import Indian from './Routers_File/Indian';  // IMPORTING COMPONENT FOR INDIAN NEWS
import Chaina from './Routers_File/Chaina';  // IMPORTING COMPONENT FOR CHINA NEWS
import Canada from './Routers_File/Canada';  // IMPORTING COMPONENT FOR CANADA NEWS
import Russia from './Routers_File/Russia';  // IMPORTING COMPONENT FOR RUSSIA NEWS
import Germany from './Routers_File/Germany';  // IMPORTING COMPONENT FOR GERMANY NEWS
import United_States from './Routers_File/United_States';  // IMPORTING COMPONENT FOR UNITED STATES NEWS
import United_Kingdom from './Routers_File/United_Kingdom';  // IMPORTING COMPONENT FOR UNITED KINGDOM NEWS
import Netherlands from './Routers_File/Netherlands';  // IMPORTING COMPONENT FOR NETHERLANDS NEWS
import France from './Routers_File/France';  // IMPORTING COMPONENT FOR FRANCE NEWS
import HongKong from './Routers_File/HongKong';  // IMPORTING COMPONENT FOR HONG KONG NEWS

const App = () => {
  return (
    <div>
      <Router>
        <Mover /> {/* COMPONENT FOR NAVIGATION OR HEADER */}
        <Switch>
          {/* ROUTES DEFINITION */}
          <Route exact path="/New" component={Indian} />  {/* ROUTE FOR INDIAN NEWS */}
          <Route path="/TM" component={Chaina} />  {/* ROUTE FOR CHINA NEWS */}
          <Route path="/France" component={France} />  {/* ROUTE FOR FRANCE NEWS */}
          <Route path="/Hong Kong" component={HongKong} />  {/* ROUTE FOR HONG KONG NEWS */}
          <Route path="/Canada" component={Canada} />  {/* ROUTE FOR CANADA NEWS */}
          <Route path="/Russia" component={Russia} />  {/* ROUTE FOR RUSSIA NEWS */}
          <Route path="/Germany" component={Germany} />  {/* ROUTE FOR GERMANY NEWS */}
          <Route path="/United_Sta" component={United_States} />  {/* ROUTE FOR UNITED STATES NEWS */}
          <Route path="/United_King" component={United_Kingdom} />  {/* ROUTE FOR UNITED KINGDOM NEWS */}
          <Route path="/NetherLand" component={Netherlands} />  {/* ROUTE FOR NETHERLANDS NEWS */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
