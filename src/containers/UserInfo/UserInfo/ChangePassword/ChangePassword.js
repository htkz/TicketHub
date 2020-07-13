import React from 'react';

import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    userName: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
}));

const ChangePassword = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" disabled>
                Change Password
            </Button>
        </div>
    );
};

export default ChangePassword;
