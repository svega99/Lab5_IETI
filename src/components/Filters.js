import React from 'react';

import {Button, FormControl,Input,InputLabel, Typography,
    Select, MenuItem, Paper} from '@material-ui/core';

import './Login.css';

import moment from "moment";

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers';

export class Filters extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            responsible:  "",
            status: "",
            dueDate: ""
            };

        this.handleResponsible = this.handleResponsible.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.handleDate = this.handleDate.bind(this);

        this.handleClear = this.handleClear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleResponsible(e) {
       
        this.setState({ responsible : e.target.value});        
    }

    handleStatus(e) {
       
        this.setState({ status : e.target.value });
    }

    handleDate(date) {
        this.setState({ dueDate : date });
    }

    handleClear(e) {
        this.setState({ responsible:  "",
                        status: "",
                        dueDate: "" });
    }

    handleSubmit(e) {

        e.preventDefault();
        
        
        this.props.Filter(this.state);
  
    }

    render(){
        return (

                <main className="layout">
                    <Paper className="paper">                
                        <Typography variant="h2">Task Filters</Typography>
                        <form  className="form">
                        
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="responsible">Responsible</InputLabel>
                                <Select
                                    labelId="responsible"
                                    id="responsible"
                                    value={this.state.responsible}
                                    onChange={this.handleResponsible}
                                    >
                                    <MenuItem value={'Santiago Vega'}>Santiago Vega</MenuItem>
                                    <MenuItem value={'Pedro Perez'}>Pedro Perez</MenuItem>
                                </Select>
                            </FormControl>

                            
                            <FormControl  margin="dense" required fullWidth>                                                       
                                <InputLabel id="Status">Status</InputLabel>
                                <Select
                                    labelId="Status"
                                    id="Status"
                                    value={this.state.status}
                                    onChange={this.handleStatus}
                                    >
                                    <MenuItem value={'Ready'}>Ready</MenuItem>
                                    <MenuItem value={'In Progress'}>In Progress</MenuItem>
                                    <MenuItem value={'Completed'}>Completed</MenuItem>
                                </Select>
                            </FormControl>

                            
                            <FormControl margin="normal" required fullWidth>
                            
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            
                                    <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="MMM dd yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Due Date"
                                            value={this.state.dueDate}
                                            onChange={this.handleDate}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            />
                                </MuiPickersUtilsProvider>
                            </FormControl>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick={this.handleSubmit}
                            >
                                Apply
                            </Button>

                           
                        </form>
                        <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick={this.handleClear}
                            >
                                Clear All
                            </Button>
                    </Paper>
                </main>
           
        );
    }


   
    

}