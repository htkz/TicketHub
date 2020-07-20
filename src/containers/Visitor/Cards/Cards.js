import React from 'react';
import Card from '../../../components/Card/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        width: '80%',
    },
}));

const Cards = (props) => {
    const classes = useStyles();
    const mobile = useMediaQuery('(max-width:1000px)');

    return (
        <div className={classes.root}>
            <Grid container justify={mobile ? 'center' : null}>
                {props.places.map((place) => (
                    <Grid key={place._id}>
                        <Card place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Cards;
