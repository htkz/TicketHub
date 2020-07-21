import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 345,
        margin: theme.spacing(0.5),
    },
    description: {
        marginBottom: theme.spacing(2),
        height: 60,
    },
    media: {
        height: 200,
    },
    category: {
        marginRight: theme.spacing(0.25),
        cursor: 'pointer',
        color: 'white',
        backgroundColor: '#008295',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '4px 8px',
    },
}));

export default useStyles;
