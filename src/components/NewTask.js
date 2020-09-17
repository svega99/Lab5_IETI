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

export class NewTask extends React.Component{

    constructor(props) {
        super(props);
        this.state = {tasks:{
            description: "",
            responsible: {
              name: "",
              email: ""
            },
            status: "",
            dueDate: moment(this.props.start)
            }};
        this.handleDes = this.handleDes.bind(this);
        this.handleResponsible = this.handleResponsible.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.handleDate = this.handleDate.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDes(e) {

        const newTask = { ...this.state.tasks, description : e.target.value };
        this.setState({ tasks : newTask });
    }

    handleResponsible(e) {
        const newResponsible = { ...this.state.tasks.responsible, name : e.target.value };
        const newTask = { ...this.state.tasks, responsible :newResponsible };
        this.setState({ tasks : newTask });        
    }

    handleStatus(e) {
        const newTask = { ...this.state.tasks, status : e.target.value };
        this.setState({ tasks : newTask });
    }

    handleDate(date) {
        const newTask = { ...this.state.tasks, dueDate : date };
        this.setState({ tasks : newTask });
    }

    handleSubmit(e) {

        e.preventDefault();
        if (!this.state.tasks.description.length || !this.state.tasks.status.length  || !this.state.tasks.responsible.name.length)
            return;
        
        
            const newResponsible = { ...this.state.tasks.responsible, email : this.state.tasks.responsible.name+"@mail.escuelaing.edu.co" };
            const newTask = { ...this.state.tasks, responsible :newResponsible };
            this.setState({ tasks : newTask } , () => {
               
                this.props.callbackFromParent(this.state.tasks);
                
            });
   
    }

    render(){
        return (

                <main className="layout">
                    <Paper className="paper">                
                        <Typography variant="h2">New Task</Typography>
                        <form onSubmit={this.handleSubmit} className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="description">Description</InputLabel>
                                <Input 
                                    id="description" 
                                    name="description" 
                                    autoComplete="description" 
                                    autoFocus 
                                    onChange={this.handleDes}
                                    value={this.state.tasks.description}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="responsible">Responsible</InputLabel>
                                <Input
                                    name="responsible"
                                    id="responsible"
                                    autoComplete="responsible"
                                    onChange={this.handleResponsible}
                                    value={this.state.tasks.responsible.name}
                                />
                            </FormControl>

                            
                            <FormControl  margin="dense" required fullWidth>                                                       
                                <InputLabel id="Status">Status</InputLabel>
                                <Select
                                    labelId="Status"
                                    id="Status"
                                    value={this.state.tasks.status}
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
                                            value={this.state.tasks.dueDate}
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
                            >
                                Create New Task
                            </Button>
                        </form>
                    </Paper>
                </main>
           
        );
    }


   
    

}