import React, { Component } from 'react';

import ChangePassword from '../../components/UserInfo/ChangePassword/ChangePassword';
import Header from '../../components/UI/Header/Header';

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
