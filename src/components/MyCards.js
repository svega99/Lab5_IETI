import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import { green } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';
import moment from "moment";
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import UpdateIcon from '@material-ui/icons/Update';

const classes = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export class MyCards extends Component {

  constructor(props) {
    super(props);
    this.state = {tasks:[{
        "description": "Implementar Tasks",
        "responsible": {
          "name": "Santiago Vega",
          "email": "santiago.vega-r@mail.escuelaing.edu.co"
        },
        "status": "Ready",
        "dueDate": "2020-08-27T00:00:00-05:00"
      },
      {
        "description": "Despliegue en Azure",
        "responsible": {
          "name": "Santiago Vega",
          "email": "santiago.vega-r@mail.escuelaing.edu.co"
        },
        "status": "In Progress",
        "dueDate": "2020-09-03T00:00:00-05:00"
      },
      {
        "description": "Implementar Login",
        "responsible": {
          "name": "Santiago Vega ",
          "email": "santiago.vega-r@mail.escuelaing.edu.co"
        },
        "status": "Completed",
        "dueDate": "2020-08-27T00:00:00-05:00"
      }]};

}
  

  render(){
      return (
        <div>
            {this.state.tasks.map((task,index) => (
                    <Card className={classes.root} variant="outlined" key={index}>

                    <CardHeader
                      action={
                        <IconButton aria-label="settings"  >
                          {task.status === "Completed" ? <CheckCircleIcon style={{ color: green[500] }} /> : task.status === "Ready" ? <AlarmOnIcon style={{ color: green[500] }} /> : <UpdateIcon style={{ color: orange[500] }} />}
                          
                        </IconButton>
                      }
                      title={task.description}
                    />
                      <CardContent>
                        
                      <Typography className={classes.pos} color="textSecondary">
                          {task.status}   -    {moment(task.dueDate).format("DD-MM-YYYY")}
                        </Typography>
                        <Typography variant="body2" component="p">
                          {task.responsible.name}
                        </Typography>
                      </CardContent>
                      
                    </Card>

            ))}

              
            
        </div>
      );
    }
}