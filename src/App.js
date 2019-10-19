import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Create from './Components/create.component';
import Edit from './Components/edit.component';
import Index from './Components/index.component';

class App extends Component{

  render(){
    return (
      <Router>
        <div className="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-default">
            <Link to={'/'} className="navbar-brand">React Crud</Link>
            <div class="collapse navbar-collapse" id="navbarColor01">
            
            <ul class="navbar-nav mr-auto">
            <div className="row">
              <div className="col-md-4">
              <li className="nav-item">
                <Link to={'./'} className="nav-link">Home</Link> 
              </li>
              </div>
              <div className="col-md-4"> 
              <li className="nav-item">
                <Link to={'./create'} className="nav-link">Create</Link> 
              </li>
              </div>
              <div className="col-md-4">
              <li className="nav-item">
                <Link to={'./index'} className="nav-link">Index</Link> 
              </li>
              </div>
              </div>
            </ul>
            
            </div>
          </nav><br></br>
          <h2>Welcome To React Crud</h2><br></br>
          <Switch>
            <Route exact path ='/create' component = {Create}/>
            <Route exact path ='/edit/:id' component = {Edit}/>
            <Route exact path ='/index' component = {Index}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;