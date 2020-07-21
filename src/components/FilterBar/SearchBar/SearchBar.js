import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './SearchBar.css';

export default function PrimarySearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <AppBar
                position="static"
                color="transparent"
                className={classes.flat}
            >
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </AppBar>
        </div>
    );
}
