import React from 'react';
import Header from '../../components/Header/Header';
import FilterBar from '../../components/FilterBar/FilterBar';

const visitor = (props) => {
    return (
        <React.Fragment>
            <Header />
            <FilterBar />
        </React.Fragment>
    );
};

export default visitor;
