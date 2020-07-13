import React from 'react';
import PropTypes from 'prop-types';

import ChangePassword from './ChangePassword/ChangePassword';
import Header from '../../components/Header/Header';

import { makeStyles, Tabs, Tab, Typography, Box } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        width: '60%',
        height: '800px',
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

function UserInfo() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <div>
                <Header />
            </div>
            <div className={classes.root}>
                <Tabs
                    orientation='vertical'
                    variant='scrollable'
                    value={value}
                    onChange={handleChange}
                    aria-label='Vertical tabs example'
                    className={classes.tabs}
                >
                    <Tab label='Personal Information' {...a11yProps(0)} />
                    <Tab label='Change Password' {...a11yProps(1)} />
                    <Tab label='Ticket Information' {...a11yProps(2)} />
                    <Tab label='Payment Infomantion' {...a11yProps(3)} />
                    <Tab label='Payment Information' {...a11yProps(4)} />
                    <Tab label='Friends Information' {...a11yProps(5)} />
                </Tabs>
                <TabPanel value={value} index={0} className={classes.tabPanle}>
                    <ChangePassword />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ChangePassword />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
            </div>
        </React.Fragment>
    );
}

export default UserInfo;
