import React from 'react';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBar/SearchBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(0.5),
    },
    Container: {
        margin: theme.spacing(2),
        padding: theme.spacing(0, 16),
    },
}));

const FilterBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.Container}>
            <Button variant='outlined' size='medium' className={classes.margin}>
                Latest
            </Button>
            <Button variant='outlined' size='medium' className={classes.margin}>
                Hottest
            </Button>
            <Button variant='outlined' size='medium' className={classes.margin}>
                Reset
            </Button>
            <SearchBar />
        </div>
    );
};

export default FilterBar;
