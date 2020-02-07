import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Navbar  from './component/layout/Navbar';
import Dashboard from './component/dashboard/Dashboard';
import ProjectDetails from './component/projects/ProjectDetails';


class App extends Component {
  
  render (){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
