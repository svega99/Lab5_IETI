import React, {Component} from 'react';
import {TaskApp} from "./components/TaskApp";
import {Login} from "./components/Login.js";
import './App.css';
import {BrowserRouter as Router,  Route, } from 'react-router-dom'


class App extends Component  {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    
}

  render(){
       
        if(localStorage.getItem('isLoggedIn')==null) localStorage.setItem('isLoggedIn',false);
              //localStorage.setItem('isLoggedIn',false);
              localStorage.setItem('username', 'user');
              localStorage.setItem('password', 'psw');
              

        const LoginView = () => {
          /*const logged =localStorage.getItem('isLoggedIn');
          
          if (logged==="true"){
              return <Redirect to="/taskplanner" />
          }
          else*/ return <Login/>
      };

      const TaskAppView = () => {
        /*  const logged =localStorage.getItem('isLoggedIn');
          
          if (logged==="false" ){
              return <Redirect to="/" />
          }
          else */return <TaskApp/>
      };


        return (
          

            <Router>
                      <div className="App" >

                          <div>
                              <Route exact path="/" component={LoginView}/>
                              <Route path="/taskplanner" component={TaskAppView}
                              />
                          </div>
                        
                      </div>
            </Router>
          
        );
  }
}

export default App;
