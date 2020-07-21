import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#212529',
        color: 'white',
    },
    userName: {
        marginRight: theme.spacing(1),
    },
    title: {
        marginLeft: theme.spacing(2),
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    button: {
        color: 'white',
        '&:hover': {
            backgroundColor: '#444',
        },
    },
}));

export default useStyles;
