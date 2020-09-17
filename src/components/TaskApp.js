import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {MyCards} from "./MyCards";
import {NewTask} from "./NewTask.js";
import {Filters} from "./Filters.js";
import {UserProfile} from "./UserProfile.js";
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './TaskApp.css';
import Modal from '@material-ui/core/Modal';
import FilterListIcon from '@material-ui/icons/FilterList';


const drawerWidth = 240;



const classes = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  margin: {
    margin: theme.spacing(4),
  },
  extendedIcon: {
    marginLeft: theme.spacing(2),
  },
}));




export default function TaskApp (){

    
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalProfile, setOpenModalProfile] = React.useState(false);
  const [openModalFilter, setOpenModalFilter] = React.useState(false);

  const [tasks, setTasks] = React.useState([{
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
  }]);
  
  const [Profile, setProfile] = React.useState(
     {
      "name": "Santiago Vega",
      "email": "santiago.vega-r@mail.escuelaing.edu.co"
    });

    const [filtersTask, setFilters] = React.useState(
      {
        responsible:  "",
        status: "",
        dueDate: ""
     });
   

  const handleOpen = ()=> {
      setOpen(true);
  }

  const handleClose = ()=> {
    setOpen(false);
  }

  const handleOpenModal = ()=> {
    setOpenModal(true);
  }
  const handleCloseModal = ()=> {
    setOpenModal(false);
  }

  const handleOpenModalProfile = ()=> {
    setOpenModalProfile(true);
  }
  const handleCloseModalProfile = ()=> {
    setOpenModalProfile(false);
  }

  const handleOpenModalFilter = ()=> {
    setOpenModalFilter(true);
  }
  const handleCloseModalFilter = ()=> {
    setOpenModalFilter(false);
  }

  const handleLogout = ()=>{
        localStorage.setItem('isLoggedIn', false);
        window.location.href = "/";
  }



  const myCallback = (dataFromChild) => {
      tasks.push( dataFromChild);
      setTasks(tasks);
      setOpenModal(false);
      

 };

 const myCallbackProfile = (dataFromChild) => {
    setProfile (dataFromChild);
    setOpenModalProfile(false);

};


const myCallbackFilter = (dataFromChild) => {
    setFilters(dataFromChild);
    setOpenModalFilter(false);

};

 
 
        return (
            <div className="App">
              <CssBaseline />
              <React.Fragment >
              <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                  [classes.appBarShift]: open,
                })}
              >

                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" noWrap>
                    Task Planner 
                  </Typography>
                </Toolbar>
              </AppBar>
                <Drawer anchor='left' open={open} onClose={handleClose}>
                <List>
                  
                        <ListItem >
                        <ListItemIcon> <PersonIcon fontSize="large"/> </ListItemIcon>
                          <ListItemText primary={Profile.name} secondary={Profile.email}/>
                        </ListItem>
                       
                </List>
                
                
                      <ListItemIcon> 
                        <IconButton onClick={handleOpenModalProfile}>
                          <EditIcon /> 
                          </IconButton>
                      </ListItemIcon>
                      <Modal
                          open={openModalProfile}
                          onClose={handleCloseModalProfile}
                          aria-labelledby="simple-modal-title"
                          aria-describedby="simple-modal-description"
                        >
                          <UserProfile EditProfile={(dataFromChild)=>myCallbackProfile(dataFromChild)}/>
                      </Modal>
                
                    <Divider />

                <List>
                <ListItem >
                    <ListItemIcon>  
                        <IconButton  onClick={handleLogout}>
                            <ExitToAppIcon fontSize="large"/>
                        </IconButton> 
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                    </ListItem>
                </List>
                </Drawer>
                

               <main className="layout">
               <Modal
                      open={openModal}
                      onClose={handleCloseModal}
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                    >
                      <NewTask callbackFromParent={(dataFromChild)=>myCallback(dataFromChild)}/>
              </Modal>
                    
                    <Container fixed>
                      <MyCards Tasks={tasks} TaskFilters={filtersTask}/> 
                    </Container>

                    <Fab color="primary" aria-label="add"  className={classes.margin}>
                      <AddIcon onClick={handleOpenModal}/>
                    </Fab>


                    <Fab variant="extended" color="primary" aria-label="add"  className={classes.margin} onClick={handleOpenModalFilter}>
                      <FilterListIcon className={classes.extendedIcon} />
                        Filtrar
                    </Fab>

                    <Modal
                      open={openModalFilter}
                      onClose={handleCloseModalFilter}
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                    >
                        <Filters Filter={(dataFromChild)=>myCallbackFilter(dataFromChild)}/>
                    </Modal>

                    
                </main>
                    
 
            </React.Fragment>
            
            </div>
        );
    

   

}