import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '../Drawer/Drawer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    userName: {
        marginRight: theme.spacing(1),
    },
    title: {
        marginLeft: theme.spacing(2),
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
}));

const Header = (props) => {
    const classes = useStyles();
    let navBar = null;
    if (props.isVisitor) {
        navBar = (
            <React.Fragment>
                <Typography variant='button' className={classes.userName}>
                    Visitor
                </Typography>
                <Button color='inherit'>Login</Button>
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
                    <Button color='inherit'>Profile</Button>
                    <Button color='inherit'>My Account</Button>
                    <Button color='inherit'>Logout</Button>
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
