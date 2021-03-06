import React from 'react';
import PropTypes from 'prop-types';

import ChangePassword from './ChangePassword/ChangePassword';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TicketInfo from './TicketInfo/TicketInfo';

import { Tabs, Tab, Typography, Box } from '@material-ui/core';
import useStyles from './UserInfo.css';

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
                    <Typography component={'span'}>{children}</Typography>
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

function UserInfo() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <div>
                <Header isUser />
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
                    <Tab label='Friends Information' {...a11yProps(4)} />
                </Tabs>
                <TabPanel value={value} index={0} className={classes.tabPanle}>
                    <PersonalInfo />
                </TabPanel>
                <TabPanel value={value} index={1} className={classes.tabPanle}>
                    <ChangePassword />
                </TabPanel>
                <TabPanel value={value} index={2} className={classes.tabPanle}>
                    <TicketInfo />
                </TabPanel>
                <TabPanel value={value} index={3} className={classes.tabPanle}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={4} className={classes.tabPanle}>
                    Item Five
                </TabPanel>
            </div>
            <div>
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default UserInfo;
