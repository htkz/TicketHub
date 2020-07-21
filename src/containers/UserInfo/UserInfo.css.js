import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        width: '60%',
        height: 'maxHeight',
        margin: '10px auto',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        margin: '15px',
        width: '35%',
    },
    tabPanle: {
        width: '100%',
    },
}));

export default useStyles;
