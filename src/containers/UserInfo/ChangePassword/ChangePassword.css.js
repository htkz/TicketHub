import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        flewWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    passwordInput: {
        width: '400px',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        marginTop: '10px',
    },
}));

export default useStyles;
