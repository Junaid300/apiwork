
import React from 'react';
import DisplayContent from './Components/DisplayContent';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    
      <Navbar/>
      <Switch>
        
       
        <Route exact path="/"  component={DisplayContent}/>
        <Route exact path="*"  >
          <h1>PAGE NOT FOUND</h1>
          </Route>
     </Switch>
     </BrowserRouter>
  );
}

export default App;
