import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100%',
        border: '1px solid red',
        margin: theme.spacing(1),
    },
}));

export default useStyles;