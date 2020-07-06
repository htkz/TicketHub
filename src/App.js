import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div>
            <Switch>
                <Route path='/' render={() => <p>Welcome!</p>} />
            </Switch>
        </div>
    );
}

export default App;
