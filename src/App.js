import React, {Component} from 'react';
import TaskApp from "./components/TaskApp";
import {Login} from "./components/Login.js";
import {NewTask} from "./components/NewTask.js";
import './App.css';
import {BrowserRouter as Router,  Route, Redirect } from 'react-router-dom'
import moment from "moment";





class App extends Component  {

  constructor(props) {
    super(props);
    this.state = { isNewTask: false,task:{} };
    
    
}

    

  render(){
       
        if(localStorage.getItem('isLoggedIn')===null) localStorage.setItem('isLoggedIn',false);
              //localStorage.setItem('isLoggedIn',false);
        localStorage.setItem('isNewTask',false);
        localStorage.setItem('username', 'santiago.vega-r');
        localStorage.setItem('password', 'pass');
        
        

      const LoginView = () => {
          return <Login/>
      };

      const TaskAppView = () => {
        
          return  <TaskApp newTask={this.state.task} /> 
       
      };
        return (
          <Router>
            <div className="App" >

              <div>
                  {localStorage.getItem('isLoggedIn')==='true'?
                    <Route path="/taskplanner" component={TaskAppView}/>:
                    <Route exact path="/" component={LoginView}/>}
                              
                          
              </div>
                        
            </div>
          </Router>
          
        );
  }
}

export default App;
