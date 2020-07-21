import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './Footer.css';

const Footer = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static' color='transparent'>
                <Typography
                    display='block'
                    align='center'
                    variant='h6'
                    className={classes.title}
                >
                    For Final Project of CS 546
                </Typography>
                <Typography
                    display='block'
                    align='center'
                    variant='body'
                    className={classes.author}
                >
                    Author: Mo Sun, Zechen Feng, Yuqi Wang
                </Typography>
            </AppBar>
        </div>
    );
};

export default Footer;
