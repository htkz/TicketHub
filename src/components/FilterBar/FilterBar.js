import React from 'react';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBar/SearchBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    margin: {
        width: '95%',
    },
    Container: {
        margin: '1%',
        padding: '1%',
    },
    buttonbar: {
        display: 'flex',
        margin: '0.5%',
        padding: '0.5%',
        justifyContent: 'center',
    },
    searchbar: {
        display: 'flex',
        margin: '0.5%',
        padding: '0.5%',
        justifyContent: 'center',
    },
    buttongrid: {
        display: 'flex',
        justifyContent: 'center',
        width: '33%',
    },
}));

const FilterBar = () => {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.Container}>
            <Grid
                item
                xs={12}
                sm={5}
                md={5}
                lg={3}
                xl={3}
                className={classes.searchbar}
            >
                <SearchBar />
            </Grid>
            <Grid
                item
                xs={12}
                sm={5}
                md={5}
                lg={2}
                xl={2}
                className={classes.buttonbar}
            >
                <Grid className={classes.buttongrid}>
                    <Button
                        variant="outlined"
                        size="medium"
                        className={classes.margin}
                    >
                        Latest
                    </Button>
                </Grid>
                <Grid className={classes.buttongrid}>
                    <Button
                        variant="outlined"
                        size="medium"
                        className={classes.margin}
                    >
                        Hottest
                    </Button>
                </Grid>
                <Grid className={classes.buttongrid}>
                    <Button
                        variant="outlined"
                        size="medium"
                        className={classes.margin}
                    >
                        Reset
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default FilterBar;
