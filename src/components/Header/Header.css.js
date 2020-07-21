import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#343a40',
        color: 'white',
    },
    appBar: {
        padding: theme.spacing(0, 10),
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
