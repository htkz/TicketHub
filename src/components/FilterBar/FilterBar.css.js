import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    margin: {
        width: '95%',
    },
    Container: {
        margin: '1%',
        padding: '1%',
    },
    buttonbar: {
        display: 'flex',
        margin: '0.5%',
        padding: '0.5%',
        justifyContent: 'center',
    },
    searchbar: {
        display: 'flex',
        margin: '0.5%',
        padding: '0.5%',
        justifyContent: 'center',
    },
    buttongrid: {
        display: 'flex',
        justifyContent: 'center',
        width: '33%',
    },
}));

export default useStyles;
