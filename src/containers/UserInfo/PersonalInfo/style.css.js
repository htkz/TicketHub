import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        justifyContent: 'center',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    margin: {
        marginTop: theme.spacing(2),
    },
    width: { width: '75%' },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

export default useStyles;
