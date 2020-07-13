import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import Signin from './containers/Signin/Signin';
import Signup from './containers/Signup/Signup';
import Main from './containers/Main/Main';
import Visitor from './containers/Visitor/Visitor';
import './App.css';

function App() {
    return (
        <div>
            <CssBaseline />
            <Switch>
                <Route path='/signin' exact component={Signin} />
                <Route path='/signup' exact component={Signup} />
                <Route path='/main' exact component={Main} />
                <Route path='/visitor' exact component={Visitor} />
                <Route path='/' exact render={() => <p>Welcome!</p>} />
                <Route path='/' render={() => <p>Error: Page not found!</p>} />
            </Switch>
        </div>
    );
}

export default App;
