import React from 'react';
import Card from '../../../components/Card/Card';
import Grid from '@material-ui/core/Grid';
import useStyles from './Cards.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
