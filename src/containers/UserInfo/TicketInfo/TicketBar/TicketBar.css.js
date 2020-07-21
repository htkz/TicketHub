import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    block: {
        height: '100vh',
        width: '100%',
        border: '1px solid green',
        margin: theme.spacing(1),
    },
}));

export default useStyles;