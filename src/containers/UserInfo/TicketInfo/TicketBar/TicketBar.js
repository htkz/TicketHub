import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from './TicketBar.css';

const TicketBar = (props) => {
    const classes = useStyles();

    return <Grid className={classes.block}>{props.placeName}</Grid>;
};

export default TicketBar;
