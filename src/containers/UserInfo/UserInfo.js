import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChangePassword from './ChangePassword/ChangePassword';
import Header from '../../components/Header/Header';

import { makeStyles, Tabs, Tab, Typography, Box } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
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

class UserInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Header />
                </div>
                <div>
                    <ChangePassword />
                </div>
            </React.Fragment>
        );
    }
}

export default UserInfo;
