import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 345,
        margin: theme.spacing(2),
    },
    description: {
        marginBottom: theme.spacing(2),
        height: 60,
    },
    media: {
        height: 200,
    },
}));

export default useStyles;
