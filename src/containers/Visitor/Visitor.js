import React from 'react';
import Header from '../../components/Header/Header';
import FilterBar from '../../components/FilterBar/FilterBar';
import Drawer from '../../components/Drawer/Drawer';

const visitor = (props) => {
    return (
        <React.Fragment>
            <Header isVisitor />
            <FilterBar />
        </React.Fragment>
    );
};

export default visitor;
