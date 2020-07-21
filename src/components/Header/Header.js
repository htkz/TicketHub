import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '../Drawer/Drawer';
import useStyles from './Header.css';

const Header = (props) => {
    const classes = useStyles();
    let navBar = null;
    if (props.isVisitor) {
        navBar = (
            <React.Fragment>
                <Typography variant='button' className={classes.userName}>
                    Visitor
                </Typography>
                <Button variant='outlined' className={classes.button}>
                    Login
                </Button>
            </React.Fragment>
        );
    }
    if (props.isUser) {
        navBar = (
            <React.Fragment>
                <Hidden xsDown>
                    <Typography variant='button' className={classes.userName}>
                        Htkz
                    </Typography>
                    <Button className={classes.button}>Profile</Button>
                    <Button className={classes.button}>My Account</Button>
                    <Button className={classes.button}>Logout</Button>
                </Hidden>
                <Hidden smUp>
                    <Drawer />
                </Hidden>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <AppBar position='static' color='transparent'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        TicketHub
                    </Typography>
                    {navBar}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
