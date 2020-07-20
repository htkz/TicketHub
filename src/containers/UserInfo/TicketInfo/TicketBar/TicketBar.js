import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    block: {
        height: '100vh',
        width: '100%',
        border: '1px solid green',
        margin: theme.spacing(1),
    },
}));

const TicketBar = (props) => {
    const classes = useStyles();

    return (
        <Grid className={classes.block}>
            111
        </Grid>
    );
};

export default TicketBar;