import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#343a40',
        padding: '5px 0',
    },
    title: {
        color: 'white',
    },
    author: {
        color: '#999',
    },
}));

export default useStyles;
