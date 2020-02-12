import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Navbar  from './component/layout/Navbar';
import Dashboard from './component/dashboard/Dashboard';
import ProjectDetails from './component/projects/ProjectDetails';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import CreateProject from './component/projects/CreateProject';


class App extends Component {
  
  render (){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route  path='/signin' component={SignIn} />
            <Route  path='/signup' component={SignUp} />
            <Route  path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
