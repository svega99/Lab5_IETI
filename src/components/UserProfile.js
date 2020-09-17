import React from 'react';
import {MyCards} from "./MyCards";
import {Button, FormControl,Input,InputLabel, Typography,
     Paper} from '@material-ui/core';

import './Login.css';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';    
import {  withRouter} from 'react-router-dom';
import moment from "moment";

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers';

export class UserProfile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
              name: "",
              email: "",
              password: "",
              newpassword:""
            };
        this.handlename = this.handlename.bind(this);
        this.handleemail = this.handleemail.bind(this);
        this.handlepassword= this.handlepassword.bind(this);
        this.handlenewpassword = this.handlenewpassword.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlename(e) {
        this.setState({ name :e.target.value  });
    }

    handleemail(e) {
        
        this.setState({ email : e.target.value  });        
    }

    handlepassword(e) {
        
        this.setState({ password : e.target.value });
    }

    handlenewpassword(e) {
        
        this.setState({ newpassword : e.target.value });
    }

    handleSubmit(e) {

        e.preventDefault();
        if (!this.state.name.length || !this.state.email.length  )
            return;

        const responsible={
            name: this.state.name,
            email: this.state.email
          };

        this.props.EditProfile(responsible);
        
    }

    render(){
        return (

                <main className="layout">
                    <Paper className="paper">                
                        <Typography variant="h2">Registration</Typography>
                        <form onSubmit={this.handleSubmit} className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="description">Full name</InputLabel>
                                <Input 
                                    id="fullname" 
                                    name="fullname" 
                                    autoComplete="fullname" 
                                    autoFocus 
                                    onChange={this.handlename}
                                    value={this.state.name}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">email</InputLabel>
                                <Input
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    onChange={this.handleemail}
                                    value={this.state.email}
                                />
                            </FormControl>

                            
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="Password">Password</InputLabel>
                                <Input
                                    name="Password"
                                    id="Password"
                                    autoComplete="Password"
                                    type="password"
                                    onChange={this.handlepassword}
                                    value={this.state.password}
                                />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="cPassword">Confirm Password</InputLabel>
                                <Input
                                    name="cPassword"
                                    id="cPassword"
                                    autoComplete="cPassword"
                                    type="password"
                                    onChange={this.handlenewpassword}
                                    value={this.state.newpassword}
                                />
                            </FormControl>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Save
                            </Button>
                        </form>
                    </Paper>
                </main>
           
        );
    }


   
    

}