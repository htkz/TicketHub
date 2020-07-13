import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
}));

const header = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position='static' color='transparent'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        TicketHub
                    </Typography>
                    <Button color='inherit'>Htkz</Button>
                    <Button color='inherit'>Profile</Button>
                    <Button color='inherit'>My Account</Button>
                    <Button color='inherit'>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default header;
