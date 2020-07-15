import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'inline-block',
        margin: theme.spacing(0),
        width: '97%',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'transparent',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(2),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 0.5),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    flat: {
        boxShadow: 'none',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: theme.shape.borderRadius,
    },
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <AppBar
                position='static'
                color='transparent'
                className={classes.flat}
            >
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder='Search…'
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
